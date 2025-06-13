import { useState, useContext } from "react";
import GithubContext from "../../Context/Github/GithubContext";
import AlertContext from "../../Context/alert/AlertContext";
import { FaGithub } from "react-icons/fa";

function UserSearch() {
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please Enter something", "Error");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      {users.length === 0 && (
        <div
          className="relative mb-4 overflow-hidden rounded-2xl h-96"
          style={{
            backgroundImage:
              'url("https://gopaddle-io.github.io/configurator/assets/images/github.png")',
            backgroundPosition: "center",
            objectFit: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="mb-4 text-5xl font-extrabold text-center">
              Discover GitHub Users
            </h1>
            <p className="text-lg">
              Unleash the power of open source collaboration.
            </p>
          </div>
        </div>
      )}

      <div className="grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pr-40 text-black bg-gray-200 input input-lg"
                  placeholder="Search"
                  value={text}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>
        {users.length > 0 && (
          <div>
            <button
              className="mt-4 text-white btn btn-ghost btn-lg bg-neutral hover:text-black"
              onClick={clearUsers}
            >
              Clear
            </button>
          </div>
        )}
        {users.length > 0 && (
          <div className="mt-4">
            <h2 className="mb-2 text-xl font-semibold">
              Total Users: {users.length}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
