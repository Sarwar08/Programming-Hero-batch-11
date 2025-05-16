
const getStoredBookIds = () => {
    const storedBooksStr = localStorage.getItem('booksIdList');

    if (storedBooksStr) {
        const storedBooksIds = JSON.parse(storedBooksStr);
        return storedBooksIds;
    }
    else{
        return [];
    }
}

const addBookId = (id) => {
    const existingIds = getStoredBookIds();

    if (existingIds.includes(id)) {
        alert("This book is exists");
    }
    else{
        existingIds.push(id);
        const existingIdsStr = JSON.stringify(existingIds);
        localStorage.setItem('booksIdList', existingIdsStr)
    }
}

export {addBookId, getStoredBookIds};