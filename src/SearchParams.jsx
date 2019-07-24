import React from "react";

export default function SearchParams() {
  const location = "San Francisco, CA";

  return (
    <div>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            type="text"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
