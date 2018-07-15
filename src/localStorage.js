export function uploadDataToLocalStorage(status, email) {
    const statusUser = {
        status: status,
        email: email,
    };
    localStorage.setItem('tubersi', JSON.stringify(statusUser));
}

export function downloadStatusFromLocalStorage() {
    const retrievedObject = localStorage.getItem('tubersi');
    var statusTubersi = JSON.parse(retrievedObject);
    return statusTubersi ? statusTubersi.status : false; 
}







