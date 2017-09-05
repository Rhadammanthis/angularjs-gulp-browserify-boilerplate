function ExampleCtrl() {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;

  vm.alert = () => {
    alert('I\'m am Angular Material component!')
  }

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
