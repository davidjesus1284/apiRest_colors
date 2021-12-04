const xml = require('xml');
const Color = require('../models/Colors');

class ColorService {

    constructor(color = Color) {
        this.color = color;
    }
    async createColor(body) {
        try {
            const consult = await this.color.create(body, {
                fields: ['name', 'year', 'color', 'pantone_value']
            });
            return consult;
        } catch (error) {
            return error;
        }
    }

    async getColors(limit, skip, format) {

        try {
            let options = {
                offset: this.getOffset(skip, limit),
                limit: limit,
            };
            
            let {count, rows} = await this.color.findAndCountAll(options);
            let html = rows.map( row => {
                const { id, name, color } = row;
                const colores = {
                    colors: [
                        { color: [
                            {id: `${id}`},
                            {name: `${name}`},
                            {color: `${color}`}
                        ]}
                    ]
                };
                return colores
            });
            
            rows = this.transform(rows);
            const result = {
                previousPage: this.getPreviousPage(skip),
                currentPage: skip,
                nextPage: this.getNextPage(skip, limit, count),
                total: count,
                limit: limit,
                numberPages: this.getNumberPages(count, limit),
                data: rows
            }
            
            if (format == 'xml') {
                return xml(html, true);
            } else if (format == 'json') {
                return result;
            }
        } catch (error) {
            return error;
        }
    }

    async getColorsById(id, format) {

        try {
            const consult = await this.color.findOne({ where: { id }});
            
            const colores = {
                colors: [
                    { color: [
                        {id: `${consult.id}`},
                        {name: `${consult.name}`},
                        {year: `${consult.year}`},
                        {color: `${consult.color}`},
                        {pantone_value: `${consult.pantone_value}`}
                    ]}
                ]
            };
            
            if (format == 'xml') {
                return xml(colores, true);
            } else if (format == 'json') {
                return consult;
            }
            
        } catch (error) {
            return error;
        }
    }

    getOffset(page, limit) {
        return (page * limit) - limit;
    }

    getNextPage(page, limit, total) {
        if ((total/limit) > page) {
            return page + 1;
        }
    
        return null
    }
    getPreviousPage (page) {
        if (page <= 1) {
            return null
        }
        return page - 1;
    }

    getNumberPages(count, limit) {
        return (Math.round(count / limit));
    }

    transform(records) {
        return records.map( record => {
            return {
                id: record.id,
                name: record.name,
                color: record.color
            }
        })
    }
}

   
   

module.exports = new ColorService();