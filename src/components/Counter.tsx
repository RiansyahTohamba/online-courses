class Counter {
//   constructor(props) {
//     super(props);
//     // set the default internal state
//     this.state = {
//       clicks: 0
//     };
//     this.myComponentDiv = React.createRef();
//   }

//   componentDidMount() {        
//     this.myComponentDiv.current.addEventListener('click', this.clickHandler);    
//   }

//   componentWillUnmount() {    
//     this.myComponentDiv.current.removeEventListener('click', this.clickHandler);
//   }
// // this.setState tak bisa dipanggil jika clickHandler belum menjadi arrow function
// // 
//   clickHandler = () => {
//     this.setState({ clicks: this.state.clicks + 1});
//   }

//   render() {
//     let children = this.props.children;

//     return (    
//       <div className="my-component" ref={this.myComponentDiv}>
//         <h2>My Component ({this.state.clicks} clicks)</h2>
//         <h3>{this.props.headerText}</h3>
//       {children}
//       </div>
//     );
//   }
}
export default Counter