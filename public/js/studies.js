

const runPage = () => {
  
  var app = new Vue({
    el: '#app',
    data: {
      participants: [],
    	firstName: '',
    	lastName: '',
    	consent: true
    }
  });

  study.getStudyParticipants.call(0).then((res) => {
    app.participants = res;
  })
  
};
