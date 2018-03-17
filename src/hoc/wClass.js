import React, { Component } from 'react';

// const wClass = (WrappedComponent, className) => {
//   return props => (
//     <div className={classNAme}>
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

const wClass = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default wClass;