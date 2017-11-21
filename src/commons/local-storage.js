let { localStorage } = window

if (!localStorage) {
  localStorage = {
    setItem() {},
    getItem() {},
  }
}

export function saveObject(id, obj) {
  localStorage.setItem(id, obj)
}

export function saveJsonObject(id, obj) {
  saveObject(id, JSON.stringify(obj))
}

export function getObject(id) {
  return localStorage.getItem(id)
}

export function getJsonObject(id) {
  return JSON.parse(getObject(id))
}
