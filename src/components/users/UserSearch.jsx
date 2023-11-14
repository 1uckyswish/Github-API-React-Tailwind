import {useState, useContext} from 'react';
import GithubContext from '../../Context/Github/GithubContext';
import AlertContext from '../../Context/alert/AlertContext';

function UserSearch() {
    const {users, searchUsers, clearUsers} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext);
    const [text,setText] = useState('');

    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text === ""){
           setAlert("Please Enter something", "Error");
        }
        else{
            searchUsers(text);
            setText('');
        }
    }
    
  return (
    <div className='grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2'>
        <div>
           <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 text-black bg-gray-200 input input-lg'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
        </div>
        {users.length > 0 && (<div>
            <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
                Clear
            </button>
        </div>)}
    </div>
  )
}

export default UserSearch