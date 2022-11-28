var vue = new Vue({
  el: '#app',
  data: {
    string: '',
    new_task: {
      title: '',
      desc: ''
    },
    isDone:false,
    id:0,
    tasks : [
      {
        title: 'Вивчити основи vue.js',
        desc: 'Спробувати написати калькулятор',
        id:0,
      },
    ]
  },
  methods: {
    add_task(){
      if(this.new_task.title != ''){
        this.tasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc,
          id:this.id,
          isComplete:this.isDone
        });
        this.new_task.title='';
        this.new_task.desc='';
      }
    },
    delete_task(i){
      this.tasks.splice(i,1);
    }
  }
})