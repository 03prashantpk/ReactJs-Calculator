import React from "react";

function History({ entries, isOn, handleEntryClick }) {
  const renderEntries = () => {
    return (
      <>
        {entries.map((entry, index) => (
          <h4 key={index}
            onClick={() => handleEntryClick(entry)}
            title={entry}>{index + 1}. {entry}</h4>
        ))}
      </>
    );
  }

  return (
    <div className="history-outer" hidden={!isOn}>
      <h3>History</h3>
      {entries.length > 0 ? renderEntries() : <span>No History Exist</span>}
    </div>
  );
}

export default History;
