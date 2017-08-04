var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

var text = new Vue({
	el: '#text',
	data: {
		text: 'default'
	}
});

var participantForm = new Vue({
	el: '#participant-form',
	data: {
		firstName: '',
		lastName: '',
		consent: true
	}
});