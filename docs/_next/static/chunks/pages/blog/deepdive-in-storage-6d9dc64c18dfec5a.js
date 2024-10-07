(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6546:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/deepdive-in-storage",function(){return a(7195)}])},7195:function(e,t,a){"use strict";a.r(t);var s=a(5893),n=(a(7294),a(6741)),i=a(9832),r=a(5711),o=a(5225),l=a(63),h=a(7354);function d(){var e,t,a=(e=["\n    white-space: pre-wrap;\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return d=function(){return a},a}var c=l.ZP.div(d());t.default=function(){return(0,s.jsx)(o.Z,{children:(0,s.jsx)(r.PU,{children:(0,s.jsxs)(i.XF,{children:[(0,s.jsx)(n.Z,{title:"Deep dive into storage architecture"}),(0,s.jsx)(c,{children:"On fundamental level, a database needs to do two things: store and fetch data. Most of you're probably familiar with the Relational Database and also so called NoSQL databases. But lets start our journey to explore the database engines and their architecture at very basic level. Consider, a simple database, implemented using bash functions:"}),(0,s.jsx)(h.pP,{children:'\n                    #!/bin/bash\n                    db_set () {\n                        echo "$1,$2" >> database\n                    }\n                    db_get () {\n                        grep "^$1," database | sed -e "s/^$1,//" | tail -n 1\n                    }\n                    '}),"These two functions implement a basic key-value store, where db_set supports an INSERT and db_get support a GET operation. Here the key and value can be anything (almost). The underlying storage format is very simple: a text file where each line contains a key-value pair, separated by a comma (roughly like a CSV file)",(0,s.jsx)(h.pP,{children:'\n    $ db_set 42 \'{"name":"San Francisco","attractions":["Exploratorium"]}\' \n    $ db_get 42\n    {"name":"San Francisco","attractions":["Exploratorium"]}\n    $ cat database\n    123456,{"name":"London","attractions":["Big Ben","London Eye"]} \n    42,{"name":"San Francisco","attractions":["Golden Gate Bridge"]} \n    42,{"name":"San Francisco","attractions":["Exploratorium"]}\n'}),"Our db_set function actually has pretty good performance for something that is so simple, because appending to a file is generally very efficient Similarly to what db_set does, many databases internally use a log, which is an append-only data file. On the other hand, our db_get function has terrible performance if you have a large number of records in your database. The cost of a lookup is O(n).",(0,s.jsx)("br",{}),'In order to efficiently find the value for a particular key in the database, we need a different data structure: an "index". lets explore indexes structure which can help us optimize our lookup. An index is an additional structure that is derived from the primary data. Many data\u2010bases allow you to add and remove indexes, and this doesn\u2019t affect the contents of the database; Maintaining additional structures incurs overhead, especially on writes. For writes, it\u2019s hard to beat the performance of simply appending to a file, because that\u2019s the simplest possible write operation This is an important trade-off in storage systems: well-chosen indexes speed up read queries, but every index slows down writes',(0,s.jsx)("br",{}),"Hash indexes Key-value stores are quite similar to the dictionary type that you can find in most programming languages and which is usually implemented as a hash map (hash table). Let\u2019s say our data storage consists only of appending to a file, as in the preceding example. Then the simplest possible indexing strategy is this: keep an in-memory hash map where every key is mapped to a byte offset in the data file This may sound simplistic, but it is a viable approach. In fact, this is essentially what Bitcask (the default storage engine in Riak) does.",(0,s.jsx)("br",{}),"A storage engine like Bitcask is well suited to situations where the value for each key is updated frequently. For example, the key might be the URL of a cat video, and the value might be the number of times it has been played (incremented every time someone hits the play button). In this kind of workload, there are a lot of writes, but there are not too many distinct keys\u2014you have a large number of writes per key, but it\u2019s feasible to keep all keys in memory. As described so far, we only ever append to a file\u2014so how do we avoid eventually running out of disk space? A good solution is to break the log into segments of a cer\u2010 tain size by closing a segment file when it reaches a certain size, and making subsequent writes to a new segment file.",(0,s.jsx)("br",{}),"An append-only log seems wasteful at first glance: why don\u2019t you update the file in place, overwriting the old value with the new value? pros - Appending and segment merging are sequential write operations. generally faster than random writes Concurrency and crash recovery are much simpler if segment files are append- only or immutable const - The hash table must fit in memory Range queries are not efficient",(0,s.jsx)("br",{}),"SSTables and LSM-Trees each log-structured storage segment is a sequence of key-value pairs. These pairs appear in the order that they were written, and values later in the log take precedence over values for the same key earlier in the log. Apart from that, the order of key-value pairs in the file does not matter. Now we can make a simple change to the format of our segment files: we require that the sequence of key-value pairs is sorted by key At first glance, that requirement seems to break our ability to use sequential writes, but we\u2019ll get to that in a moment. We call this format Sorted String Table, or SSTable for short. We also require that each key only appears once within each merged segment file (the compaction process already ensures that). SSTables have several big advantages over log segments with hash indexes: Merging segments is simple and efficient, even if the files are bigger than the available memory. The approach is like the one used in the mergesort algorithm and is illustrated in Figure 3-4: you start reading the input files side by side, look at the first key in each file, copy the lowest key (according to the sort order) to the output file, and repeat. This produces a new merged segment file, also sorted by key. What if the same key appears in several input segments? Remember that each segment contains all the values written to the database during some period of time. This means that all the values in one input segment must be more recent than all the values in the other segment (assuming that we always merge adjacent segments). When multiple segments contain the same key, we can keep the value from the most recent segment and discard the values in older segments. In order to find a particular key in the file, you no longer need to keep an index of all the keys in memory. See Figure 3-5 for an example: say you\u2019re looking for the key handiwork, but you don\u2019t know the exact offset of that key in the segment file. However, you do know the offsets for the keys handbag and handsome, and because of the sorting you know that handiwork must appear between those two. This means you can jump to the offset for handbag and scan from there until you find handiwork (or not, if the key is not present in the file). You still need an in-memory index to tell you the offsets for some of the keys, but it can be sparse: one key for every few kilobytes of segment file is sufficient, because a few kilobytes can be scanned very quickly.i Since read requests need to scan over several key-value pairs in the requested range anyway, it is possible to group those records into a block and compress it before writing it to disk (indicated by the shaded area in Figure 3-5). Each entry of the sparse in-memory index then points at the start of a compressed block. Besides saving disk space, compression also reduces the I/O bandwidth use.",(0,s.jsx)("br",{}),"Constructing and maintaining SSTables Fine so far\u2014but how do you get your data to be sorted by key in the first place? Our incoming writes can occur in any order. Maintaining a sorted structure on disk is possible, but maintaining it in memory is much easier. There are plenty of well-known tree data structures that you can use, such as red-black trees or AVL trees [2]. With these data structures, you can insert keys in any order and read them back in sorted order. When a write comes in, add it to an in-memory balanced tree data structure (for example, a red-black tree). This in-memory tree is sometimes called a memtable. \u2022 When the memtable gets bigger than some threshold\u2014typically a few megabytes \u2014write it out to disk as an SSTable file. This can be done efficiently because the tree already maintains the key-value pairs sorted by key. The new SSTable file becomes the most recent segment of the database. While the SSTable is being written out to disk, writes can continue to a new memtable instance. \u2022 In order to serve a read request, first try to find the key in the memtable, then in the most recent on-disk segment, then in the next-older segment, etc. \u2022 From time to time, run a merging and compaction process in the background to combine segment files and to discard overwritten or deleted values. This scheme works very well. It only suffers from one problem: if the database crashes, the most recent writes (which are in the memtable but not yet written out to disk) are lost. In order to avoid that problem, we can keep a separate log on disk to which every write is immediately appended, just like in the previous section. That log is not in sorted order, but that doesn\u2019t matter, because its only purpose is to restore the memtable after a crash. the LSM-tree algorithm can be slow when looking up keys that do not exist in the database: you have to check the memtable, then the segments all the way back to the oldest (possibly having to read from disk for each one) before you can be sure that the key does not exist. In order to optimize this kind of access, storage engines often use additional Bloom filters B-Trees The log-structured indexes we have discussed so far are gaining acceptance, but they are not the most common type of index. The most widely used indexing structure is quite different: the B-tree. They remain the standard index implementation in almost all relational databases, and many nonrelational databases use them too. Like SSTables, B-trees keep key-value pairs sorted by key, which allows efficient key- value lookups and range queries. But that\u2019s where the similarity ends: B-trees have a very different design philosophy. B-trees break the database down into fixed-size blocks or pages, traditionally 4 KB in size (sometimes bigger), and read or write one page at a time. This design corresponds more closely to the underlying hardware, as disks are also arranged in fixed-size blocks. Each page can be identified using an address or location, which allows one page to refer to another\u2014similar to a pointer, but on disk instead of in memory. We can use these page references to construct a tree of pages One page is designated as the root of the B-tree; whenever you want to look up a key in the index, you start here. The page contains several keys and references to child pages. Each child is responsible for a continuous range of keys, and the keys between the references indicate where the boundaries between those ranges lie. This algorithm ensures that the tree remains balanced: a B-tree with n keys always has a depth of O(log n). Most databases can fit into a B-tree that is three or four levels deep, so you don\u2019t need to follow many page references to find the page you are look\u2010 ing for. (A four-level tree of 4 KB pages with a branching factor of 500 can store up to 256 TB.) Comparing B-Trees and LSM-Trees Even though B-tree implementations are generally more mature than LSM-tree implementations, LSM-trees are also interesting due to their performance character\u2010 istics. As a rule of thumb, LSM-trees are typically faster for writes, whereas B-trees are thought to be faster for reads [23]. Reads are typically slower on LSM-trees because they have to check several different data structures and SSTables at different stages of compaction Moreover, LSM-trees are typically able to sustain higher write throughput than B- trees, partly because they sometimes have lower write amplification (although this depends on the storage engine configuration and workload), and partly because they sequentially write compact SSTable files rather than having to overwrite several pages in the tree [26] LSM-trees can be compressed better, and thus often produce smaller files on disk than B-trees. B-tree storage engines leave some disk space unused due to fragmenta\u2010 tion: when a page is split or when a row cannot fit into an existing page, some space in a page remains unused. Since LSM-trees are not page-oriented and periodically rewrite SSTables to remove fragmentation, they have lower storage overheads, espe\u2010 cially when using leveled compaction [27]. A downside of log-structured storage is that the compaction process can sometimes interfere with the performance of ongoing reads and writes. Even though storage engines try to perform compaction incrementally and without affecting concurrent 84 | Chapter 3: Storage and Retrieval access, disks have limited resources, so it can easily happen that a request needs to wait while the disk finishes an expensive compaction operation. The impact on throughput and average response time is usually small, but at higher percentiles (see \u201cDescribing Performance\u201d on page 13) the response time of queries to log-structured storage engines can sometimes be quite high, and B-trees can be more predictable [28]. An advantage of B-trees is that each key exists in exactly one place in the index, whereas a log-structured storage engine may have multiple copies of the same key in different segments. This aspect makes B-trees attractive in databases that want to offer strong transactional semantics: in many relational databases, transaction isola\u2010 tion is implemented using locks on ranges of keys, and in a B-tree index, those locks can be directly attached to the tree [5]. In Chapter 7 we will discuss this point in more detail. B-trees are very ingrained in the architecture of databases and provide consistently good performance for many workloads, so it\u2019s unlikely that they will go away anytime soon. In new datastores, log-structured indexes are becoming increasingly popular. There is no quick and easy rule for determining which type of storage engine is better for your use case, so it is worth testing empirically"]})})})}}},function(e){e.O(0,[115,37,774,888,179],(function(){return t=6546,e(e.s=t);var t}));var t=e.O();_N_E=t}]);