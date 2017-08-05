

const runPage = () => {

  
  var app = new Vue({
    el: '#app',
    data: {
      datacount: null,
      hashes: [],
      success:true,
    	lastName: '',
    	consent: true
    }
  });

  study.getDatasetCount.call(0, participant).then((res) => app.datacount = res);

  
  qs('#upload').onclick = () => {
    
    
fetch('http://localhost:4000/content', {
  method: 'POST',
  body: 'lbaljljdf'
})
  .then(response => response.json())
  .then(({ data }) => {
    console.log(data);

    app.success = 'Successfully Uploaded data with Hash ' + data;

    app.hashes = [];
    study.uploadDataset(0, data, { from: participant, gas: 500000 }).then(() => {
      console.log('hi');
      
  setTimeout(() => {

    study.getDatasetCount.call(0, participant).then((res) => {
      app.datacount = res;

      for (var i = 0; i < parseInt(res); i++) {
        study.getDataset.call(0, participant, i).then((res) => {
          app.hashes.push(res);
        })
      }

    });
  }, 1000);
      
    });


  
    
  });
    
  };
  
  
  
  
  
};





