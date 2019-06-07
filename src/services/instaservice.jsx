export default class instaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/'
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return res.json();
    }

    getAllCapsules = async () => {
        const res = await this.getResource('capsules/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('capsules/');
        return res.map(this._transformData);
    }

    _transformData = (capsules) => {
        return {
            capsule_serial: capsules.capsule_serial,
            capsule_id: capsules.capsule_id,
            status: capsules.status,
            original_launch: capsules.original_launch,
            original_launch_unix: capsules.original_launch_unix,
            missions_name: capsules[0].missions[0].name,
            missions_flight: capsules[0].missions[0].flight,
            landings: capsules.landings,
            type: capsules.type,
            details: capsules.details,
            reuse_count: capsules.reuse_count
        }
    }
}