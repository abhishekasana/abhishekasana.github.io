import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { BaseContainer } from 'components/wrappers';
import { BlogSectionHeader, BlogWrapper, Separator } from 'components/blog/wrapper';
import Title from 'components/blog/header';
import { Snippet } from "components/fancyWrappers";
import { InlineImage } from 'components/fancyWrappers';
import Thumbnail from "components/thumbnail";

const DivWrapper = styled.div`
  white-space: pre-wrap;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ListItemWrapper = styled.li`
  padding-left: 4px;
`;

const LineSweepBlog = () => (
  <Layout>
    <BaseContainer>
      <BlogWrapper>
        <Title title="Solving schedule collisions with geometric algorithms" />
        <Separator />
        <BlogSectionHeader>Introduction</BlogSectionHeader>
        <DivWrapper>
          Imagine you're given 100,000 points scattered across a plane. Your task seems simple: find the closest pair of points. The naive approach would compare every possible pair, resulting in nearly 5 billion comparisons. But what if I told you there's a technique that could solve this in almost linear time?
          <br />
          <br />
          This elegant approach—the line sweep algorithm—turned out to be the solution to a seemingly unrelated problem I encountered years later. Let me share how this geometric algorithm became the unexpected hero in my event scheduling system.
        </DivWrapper>
        <Separator />
        <BlogSectionHeader>How I Discovered Line Sweep: A Scheduling Analysis Dilemma</BlogSectionHeader>
        <DivWrapper>
          The problem was deceptively simple: find all overlapping time slots across thousands of appointments in our scheduling system. My first instinct was the brute-force route—compare every pair of slots and check for collisions. Whether done in SQL or in memory, the approach quickly crumbled under real-world scale. With tens of thousands of slots being logged daily across multiple time zones, the computation became unmanageable.
          <br />
          <br />
          I wasn't willing to settle for batching, it felt like conceding defeat. That's when a distant memory resurfaced: the line sweep.
          <br />
          <br />
          If you imagine every appointment as a start and end point on a 1D timeline, the collision problem transforms into something strikingly geometric. By "sweeping" through the sorted list of start and end times, you can track how many appointments are active at any moment—and spot overlaps efficiently.
          <br /> 
          <br />
          What once felt like a messy data problem suddenly had a clean, elegant algorithmic core. The line sweep turned out to be the key, transforming our slow and clunky analytics into something snappy.
        </DivWrapper>
        <Separator />
        <BlogSectionHeader>Understanding Line Sweep</BlogSectionHeader>
        <DivWrapper>
          At its core, the line sweep algorithm works by imagining an invisible line (usually vertical) that sweeps across the plane from left to right, stopping at important points. Rather than considering all geometric objects simultaneously, we only focus on the objects that intersect with our sweeping line at any given moment.
          <br />
          <br />
          Think of it like scanning a room with a laser beam—instead of trying to process everything at once, you examine only what the beam illuminates as it moves across the space. This approach dramatically reduces the computational complexity.
          <br />
          <br />
        <Thumbnail imgUrl="/static/images/line_sweep_algorithm.png" />
          <br />
          The key components of any line sweep algorithm include:
          <ol>
            <ListItemWrapper>
              <strong>The Sweep Line:</strong> A conceptual line that moves across the plane
            </ListItemWrapper>
            <ListItemWrapper>
              <strong>Events:</strong> Points where we need to update our data structures (like when the sweep line hits a new point)
            </ListItemWrapper>
            <ListItemWrapper>
              <strong>Status Structure:</strong> A data structure that maintains information about objects currently intersecting the sweep line
            </ListItemWrapper>
          </ol>
        </DivWrapper>
        <BlogSectionHeader>Solving the Closest Pair Problem</BlogSectionHeader>
        <DivWrapper>
          Let's apply the line sweep technique to find the closest pair of points among n points in a plane—a problem that would normally require O(n²) comparisons.
          <br />
          <br />
          The algorithm works as follows:
          <ol>
            <ListItemWrapper>
              Sort all points by their x-coordinates (taking O(n log n) time)
            </ListItemWrapper>
            <ListItemWrapper>
              Initialize a variable δ to track the minimum distance found so far (set to infinity initially)
            </ListItemWrapper>
            <ListItemWrapper>
              Create an empty balanced binary search tree (BST) to store points sorted by their y-coordinates
            </ListItemWrapper>
            <ListItemWrapper>
              Sweep a vertical line from left to right, processing each point
            </ListItemWrapper>
          </ol>
          <br />
          As we process each point p:
          <ol>
            <ListItemWrapper>
              Remove all points from our BST that have x-coordinates less than (p.x - δ), as they cannot form the closest pair with p
            </ListItemWrapper>
            <ListItemWrapper>
              Search the BST for all points with y-coordinates between (p.y - δ) and (p.y + δ), as only these points could potentially be closer than our current minimum
            </ListItemWrapper>
            <ListItemWrapper>
              Calculate the distance between p and each potential candidate, updating δ if we find a smaller distance
            </ListItemWrapper>
            <ListItemWrapper>
              Insert p into the BST
            </ListItemWrapper>
          </ol>
          <br />
          <Thumbnail imgUrl="/static/images/closest_pair.png" />
          <br />
          The brilliance of this approach is that we don't need to compare every pair of points. At each step, we only consider points within a narrow vertical strip of width 2δ around our current point. And within this strip, we only look at points within a distance δ above or below our current point.
          <br />
          <br />
          A key insight: within any strip of width δ, there can be at most a constant number of points that are at least δ apart from each other. This means each point is compared with only a constant number of other points, resulting in an O(n log n) algorithm overall.
        </DivWrapper>
        <BlogSectionHeader>Translating Line Sweep to Time: Solving the Collision Problem</BlogSectionHeader>
        <DivWrapper>
          The breakthrough moment came when I realized that time intervals could be treated just like geometric objects. An event with start and end times is conceptually similar to a line segment with start and end points. The collision detection problem in my scheduling system was fundamentally a line segment intersection problem—just along a one-dimensional timeline rather than in 2D space.
          <br />
          <br />
          Here's how I implemented the solution:
          <br />
          <br />
          1. Transform events into time points: Each event generates two time points—a start point (adding 1 to our "active count") and an end point (subtracting 1)
          <br />
          <br />
          <Snippet>
            {`-- Start points (value = 1)
SELECT start_time AS time_point, 1 AS event_value, id, user_id
FROM appointments 
WHERE date = '2025-05-18'
UNION ALL

-- End points (value = -1)
SELECT end_time AS time_point, -1 AS event_value, id, user_id
FROM appointments 
WHERE date = '2025-05-18'`}
          </Snippet>
          <br />
          2. Sort these time points chronologically: This is our "sweep line" moving through time
          <br />
          <br />
          <Snippet>
            {`SELECT 
    time_point,
    id,
    user_id,
    event_value,
    -- Running sum tracks active events at each moment
    SUM(event_value) OVER (ORDER BY time_point) AS active_count
FROM sweep_events
ORDER BY time_point`}
          </Snippet>
          <br /> 
          3. Detect collisions: Wherever the active count exceeds 1, we have overlapping events
          <br />
          <br />
          <Snippet>
            {`-- Finding user-specific conflicts
SELECT 
    s1.id AS slot1_id,
    s2.id AS slot2_id,
    s1.user_id,
    s1.time_point AS collision_point
FROM sweep_state s1
JOIN sweep_state s2 ON 
    s1.time_point = s2.time_point AND
    s1.id < s2.id AND
    s1.user_id = s2.user_id AND
    s1.event_value = 1
WHERE 
    s1.active_count > 1`}
          </Snippet>
          <br />
          <br />
          The beauty of this solution is its efficiency. Instead of comparing every possible pair of appointments (n²), we process just 2n time points (start and end for each appointment) in sorted order. The time complexity drops to O(n log n), again dominated by the sorting step.
        </DivWrapper>
        <BlogSectionHeader>Beyond Basic Collision Detection</BlogSectionHeader>
        <DivWrapper>
          Once I had the foundation in place, I could extend the solution to handle more complex business rules:
          <br />
          <br />
          <ul>
            <ListItemWrapper>User-specific conflicts: Finding cases where the same person is double-booked</ListItemWrapper>
            <ListItemWrapper>Room-specific conflicts: Identifying overlapping bookings for the same physical space</ListItemWrapper>
            <ListItemWrapper>Resource utilization: Determining peak times when we need additional staff</ListItemWrapper>
            <ListItemWrapper>Capacity planning: Visualizing time periods with the highest booking density</ListItemWrapper>
          </ul>
          <br />
          By adding a few additional dimensions to our sweep, we could answer complex questions that would have been computationally expensive with traditional approaches.
        </DivWrapper>
        <BlogSectionHeader>The Elegant Transformation</BlogSectionHeader>
        <DivWrapper>
          What fascinates me most about this algorithm is how elegantly it transforms dimensions. In the closest pair problem, it reduces a two-dimensional search space to a manageable one-dimensional sweep. In my scheduling problem, it transformed a complex temporal relationship question into a simple counting exercise along a timeline.
          <br />
          <br />
          This dimensional reduction is what gives the line sweep algorithm its power across seemingly unrelated domains. Whether you're working with points in a plane or events in time, the core principle remains the same: sweep through one dimension in order, maintaining only the information needed at each step.
          <br />
          <br />
          Sometimes great solutions come from unexpected places—in my case, from a computational geometry algorithm I'd studied years earlier. It's a reminder that algorithmic thinking transcends specific domains, and elegant solutions often have surprising applications.
        </DivWrapper>
      </BlogWrapper>
    </BaseContainer>
  </Layout>
);

export default LineSweepBlog;
