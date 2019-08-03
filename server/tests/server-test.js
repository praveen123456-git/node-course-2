const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) =>{
   Todo.remove({}).then(()=>done());
});


describe('POST /todos', () =>{
    it('should create a new todo', (done) => {
      var name = 'Praveen';

  request(app)
    .post('/todos')
    .send({name})
    .expect(200)
    .expect((res)=>{
      expect(res.body.name).toBe(name);
    })
    .end((err, res)=>{
      if(err) {
        return done(err);
      }

      Todo.find().then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].name).toBe(name);
        done();
      }).catch((e)=>done(e));
    });
  });
});
