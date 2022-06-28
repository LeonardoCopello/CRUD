import AsyncStorage from '@react-native-async-storage/async-storage'

async function saveItem(listItem) {
    listItem.id = new Date().getTime()
    let savedItems = []
    const response = await AsyncStorage.getItem('items')

    // response && (savedItems = JSON.parse(response))
    if (response) savedItems = JSON.parse(response);
    savedItems.push(listItem)

    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}

async function getItems() {
    return await AsyncStorage.getItem('items')
        .then(response => {
            if (response)
                return Promise.resolve(JSON.parse(response))
            else
                return Promise.resolve([])
        })
}

function apagar() {
    return AsyncStorage.clear()
}

export async function getItem(id) {
    const savedItem = await getItems();
    return savedItem.find(item => item.id === id)
}
// function delete() {
//     return AsyncStorage.removeItem()
// }

module.exports = {
    saveItem,
    getItems,
    apagar
}