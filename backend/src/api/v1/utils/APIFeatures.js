class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }
    search() {
        const q = this.queryString.q;
        
        let query = {};
        if (q !== 'undefined' || q !== undefined || q) {
            let regex = new RegExp(q, 'i');
            query = { ...query, $or: [{ name: regex }, { category: regex }] };
        }
        this.query = this.query.find(query);
        return this;
    } 
    filter() {

        const queryCopy = { ...this.queryString };
        // Removing fields from the query
        const removeFields = ['q']
        removeFields.forEach(el => delete queryCopy[el]);
        let queryStr = JSON.stringify(queryCopy)

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
}
module.exports = APIFeatures