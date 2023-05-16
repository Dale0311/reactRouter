import { useState } from "react";
import axios from "axios";
function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [type, setType] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && price && description && imageUrl && type) {
      axios
        .post("https://645c8a84250a246ae30744d5.mockapi.io/vans", {
          name: name,
          price: price,
          description: description,
          imageUrl: imageUrl,
          type: type,
        })
        // if it is successful connecting to the api
        .then(res => {
          setIsSubmitted((old) => !old);
          if (res.status === 201) {
            setIsSuccessful((old) => !old);
          } 
          else {
            setErrorMessage(res.statusText)
          }
        })
        // if not succesful connecting to the api
        .catch(e=>{
          setIsSubmitted(old => !old);
          setErrorMessage(e.message)
        });
    }
  };

  const handleClick = () => {
    setName("");
    setPrice("");
    setDescription("");
    setImageUrl("");
    setType("");
    setErrorMessage("")
    setIsSubmitted(false);
    setIsSuccessful(false);
  };
  return (
    <div className="min-h-screen w-10/12 md:w-auto mx-auto">
      <h1 className="text-center text-xl md:text-3xl font-bold">Upload a rental van:</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        {/* name input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-gray-400 rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required={true}
          />
        </div>
        {/* price input */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            className="border border-gray-400 rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required={true}
          />
        </div>
        {/* description input */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="border border-gray-400 rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required={true}
          />
        </div>
        {/* imageUrl */}
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-gray-700 font-bold mb-2"
          >
            imageUrl
          </label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
            className="border border-gray-400 rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required={true}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Type
          </label>
          <input
            type="text"
            id="type"
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="border border-gray-400 rounded py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required={true}
          />
        </div>

        {/* succesfully append to the db */}
        {isSubmitted && 
          <div className={`flex ${isSuccessful? "bg-green-400":"bg-red-400"} rounded py-4 px-8 text-white font-bold my-4 justify-between items-center`}>
            <h1>{isSuccessful? "Successfully added to the database": errorMessage}</h1>
            <button
              className="rounded-full bg-white hover:bg-gray-400 text-gray-700 hover:text-white w-6 h-6 flex items-center justify-center focus:outline-none"
              onClick={handleClick}
            >
              <span className="text-xs font-bold">×</span>
            </button>
          </div>
        }
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
