import React, { Component } from 'react';

// const wClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={classNAme}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

const wClass = (WrappedComponent, className) => {
  const WClass = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <WClass {...props} forwardedRef={ref} />
  });
}

export default wClass;