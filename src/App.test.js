
import React from 'react';
import { mount,shallow } from 'enzyme';
import App from './App';
describe('The input field',()=>{
  let wrapper;
  beforeEach(()=>{
    wrapper=mount(<App />)
  });
  it('It is initially empty',()=>{
    const input= wrapper.find('.inputField');
    expect(input.props().value).toBe('');
  });
        it('form contain a inputfield',()=>{
        expect(wrapper.find('.inputField')).toBeTruthy()
    })
  
        it('Input button has a test',()=>{
        expect(wrapper.find('.submitbutton').text()).toBe('Submit')
    })
    it('empty or not',()=>{
      const input=wrapper.find('.inputField');
      expect(input).toEqual({});
    })
        it('render heading',()=>{
  const heading=<h2>TodoForm</h2>
  expect(wrapper.contains(heading)).toEqual(true);
})
it('it should contain `th`',()=>{
  expect(
    wrapper.contains(<th>Action</th>)
  ).toBe(true);
})
 
 
it('whether form is present or not', () => {
  expect(wrapper.find('.form')).toBeTruthy()
});
  describe('populate with value',()=>{
    const todoValue="my todolist";
    beforeEach(()=>{
      let input=wrapper.find('.inputField');
      input.simulate('change',{
      target:{name : 'searchField', value:todoValue}
    });
  });
    it(`The input value changes to ${todoValue}`,()=>{
      const inputValue=wrapper.find('.inputField');
      expect(inputValue.props().value).toBe(todoValue);
    });
  });
  describe('CRUD Operations Testing',()=>{
    beforeEach(()=>{
      let input = wrapper.find(".inputField");
      input.simulate('change',{
        target:{name: 'searchField',value:'my todolist'}
      });
      const form = wrapper.find('.form');
      form.simulate('submit',{
      preventDefault:()=>{},
    });
    });
    describe('when the form is submitted ',()=>{
      const todoValue="my todolist";
      it('input field is cleared',()=>{
        const input=wrapper.find('.inputField')
        expect(input.props().value).toBe('')
      });
      it('todo value is added to the todolist',()=>{
        const todoList=wrapper.find('.todos');
        expect(todoList).toHaveLength(1);
      });
      it(`todo value is ${todoValue}`,()=>{
        const todoList=wrapper.find('.todos');
        expect(todoList.text()).toBe(todoValue);
      });
    });
    describe("Delete",()=>{
      beforeEach(()=>{
        const form = wrapper.find('.delete');
        form.simulate('click',{
          preventDefault:()=>{},
        });
      });
      describe("when delete button is clicked",()=>{
        it("todo value deleted",()=>{
          const todolist = wrapper.find('.todos');
          expect(todolist).toHaveLength(0);
        });
      });
    });
    describe('Update',()=>{
      beforeEach(()=>{
        const updform=wrapper.find('.update');
        updform.simulate('click',{
          preventDefault:()=>{},
        });
        let input = wrapper.find('.inputField');
        input.simulate('change',{
          target : {name:'searchField',value:'My Updated TodoList'},
        });
        const formupdate = wrapper.find('.mainupdate');
        formupdate.simulate('click',{
          preventDefault:()=>{},
        });
      });

        describe('When update button in clicked',()=>{
          it('todo value updated to my update todolist',()=>{
            const todoList = wrapper.find('.todos');
            expect(todoList.text()).toBe('My Updated TodoList'); })
        }) ;   
        it('input field is cleared',()=>{
          const input = wrapper.find('.inputField');
          expect(input.props().value).toBe('');
        });
    });   
  describe("check button exist", () => {
    it("input field exist or not", () => {
      expect(wrapper.find(".inputField").exists()).toBeTruthy();
    });
    it("button field exist or not", () => {
      expect(wrapper.find(".submitbutton").exists()).toBeTruthy();
    });
    it("button text exist or not", () => {
      expect(wrapper.find(".submitbutton").text()).toBe("Submit");
    });
  });
  });
});
describe('App', () => {
  it('should have the table', ()=> {
    const wrapper = shallow(
      <App/>
    );
    expect(
      wrapper.find('#table')
    ).toBeTruthy()
  });
});

