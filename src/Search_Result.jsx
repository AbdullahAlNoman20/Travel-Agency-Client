const Search_Result = ({ results }) => {
  return (
    <div>
      <div className="flex justify-center p-5">
        {results.length > 0 ? (
          <ul>
            {results.map((packageItem) => (
              <li key={packageItem.id} className=" p-4 mb-4">
                <h3>{packageItem.title}</h3>
                <p>
                  <strong>Destination:</strong> {packageItem.destination}
                </p>
                <p>
                  <strong>Season:</strong> {packageItem.season}
                </p>
                <p>
                  <strong>Type:</strong> {packageItem.type}
                </p>
                <p>
                  <strong>Place Name:</strong>{packageItem.placeName}
                </p>
                <p>
                  <strong>Description:</strong> {packageItem.description}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>You did not search anything. [OR] No packages found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Search_Result;
