enum StorageType {
    l = 'localStoage',
    s = 'sessionStorage'
}

const PREFIX = 'RPAS_'

class MyStorage {
	storage: Storage

	constructor(type: StorageType) {
		this.storage = type === StorageType.l ? window.localStorage : window.sessionStorage
	}

	setItem(key: string, value: any) {
		this.storage.setItem(PREFIX + key, JSON.stringify(value))
	}

	getItem(key: string) {
		const value: any = this.storage.getItem(PREFIX + key)
		if (value) {
			return JSON.parse(value)
		}
		return null
	}

	removeItem(key: string) {
		this.storage.removeItem(PREFIX + key)
	}

	clear() {
		this.storage.clear()
	}
}

const LStorage = new MyStorage(StorageType.l)
const SStorage = new MyStorage(StorageType.s)

export {
	LStorage,
	SStorage
}
