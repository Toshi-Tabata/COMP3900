
function handleError(res: Response) {
    console.log(`${res.status} Error ${res.statusText}`);
}


const Utils = {
    getToken: () => "TODO: return the appropriate token",
    getJSON: (path: string, options: RequestInit) => {
        fetch(path, options)
            .then((res) => (res.ok ? res.json() : handleError(res)))
            .catch((err) => console.warn("Error: " + err))
    }

};

export default Utils;