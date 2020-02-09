import React from 'react';
import PropTypes from 'prop-types';

/** 이런식으로 입력하면 Storybook Docs에서 컴포넌트 설명 추가 가능  **/
const MyComponent = ({ name, children }) => {
  return (
    <div>
      <p>Hello, {name}</p>
      {children}
    </div>
  );
};

MyComponent.propTypes = {
  /** name은 이름 속성입니다. **/
  name: PropTypes.string,
};

MyComponent.defaultProps = {
  /** Props 설명 **/
  name: 'Storybook',
};

export default MyComponent;
