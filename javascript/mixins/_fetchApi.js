export default async function fetchApi(url , action) {
    try {
        let response = await fetch(url)
        if (response.ok) {
            let data = await response.json()
            action(data)
        } else {
            console.error(response.status)
        }
    } catch (e) {
        console.log(e);
    }
}