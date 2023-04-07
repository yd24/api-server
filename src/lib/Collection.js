'use strict';

class Collection {
    constructor(model) {
        this.model = model;
    }
    
    async read (id, options) {
        try {
            if (id) {
                return this.model.findOne({where: {id: id}, ...options});
            } else {
                return this.model.findAll(options);
            }
        } catch (e) {
            console.log('Collection class READ ERROR', e);
        }
    }

    async create (data) {
        try {
            return this.model.create(data);
        } catch (e) {
            console.log('Collection class READ ERROR', e);
        }
    }

    async update (id, data) {
        try {
            let updated = await this.model.update(
                data,
                {
                    where:{id: id},
                },
            );
            return updated;
        } catch (e) {
            console.log('Collection class READ ERROR', e);
        }
    }

    async delete (id, data) {
        try {
            let deleted = await this.model.delete({where: {id: id}});
            return deleted;
        } catch (e) {
            console.log('Collection class READ ERROR', e);
        }
    }
}

module.exports = Collection;