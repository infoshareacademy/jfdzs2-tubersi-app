export function uploadDataToLocalStorage(setStatus) {
    const statusUser = {
        status: setStatus,
    };
    localStorage.setItem('tubersi', JSON.stringify(statusUser));
}

export function downloadDataFromLocalStorage() {
    const retrievedObject = localStorage.getItem('tubersi');
    var statusTubersi = JSON.parse(retrievedObject);
    return statusTubersi ? statusTubersi.status : false; 
}







