import React from "react";

import styled from 'styled-components';

import PropTypes from "prop-types";

const Dialog = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.7);
`;
const ThumbImg = styled.img`
  max-width: ${props => props.thumbMxWidth ? props.thumbMxWidth: "128px"};
  max-height: ${props => props.thumbMxHeight ? props.thumbMxHeight: "128px"};;
  border-radius: 3px;
  cursor: pointer;
  z-index: 3;
`;
const ImgWrapper = styled.img`
  max-width: calc(100% - 24px);
  max-height: calc(100% - 24px);
`;

class Thumbnail extends React.Component {
    state = { isOpen: false };

    handleShowDialog = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const {imgUrl, alt, style: {thumbnail: {maxWidth: thumbMxWidth, maxHeight: thumbMxHeight} = {}} = {}} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <ThumbImg
                    src={imgUrl}
                    onClick={this.handleShowDialog}
                    alt={alt}
                    thumbMxWidth={thumbMxWidth}
                    thumbMxHeight={thumbMxHeight}
                />
                {isOpen && (
                    <Dialog
                        open
                        onClick={this.handleShowDialog}
                    >
                        <ImgWrapper
                            src={imgUrl}
                            onClick={(e) => {e.stopPropagation()}}
                            alt={alt}
                        />
                    </Dialog>
                )}
            </div>
        );
    }
}

Thumbnail.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.shape({})
};
Thumbnail.defaultProps = {
    alt: "",
    style: {}
};

export default Thumbnail;