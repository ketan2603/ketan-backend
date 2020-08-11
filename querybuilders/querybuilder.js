var util = require('util');

module.exports = {
    getZones: () => {
        return util.format(`SELECT * FROM zone`);
    },
    getZoneById: (data) => {
        return util.format(`SELECT * FROM zone WHERE zone_id = ${data.zone_id}`);
    },
    getAllCities: () => {
        return util.format(`SELECT * FROM city`);
    },
    getAllCityByZone: (data) => {
        return util.format(`SELECT * FROM city WHERE zone_id = ${data.zone_id}`)
    },
    getCityById: (data) => {
        return util.format(`SELECT * FROM city WHERE city_id = ${data.city_id}`);
    },
    getAllUserBycity: (data) => {
        return util.format(`SELECT * FROM persons WHERE family_id = ${(Number(data.family_id))}`);
    },
    getAllFamilyBycity: (data) => {
        return util.format(`SELECT * FROM family_table WHERE city_id = ${(Number(data.city_id))}`);
    },
    insertFamilyMember: (data) => {
        return util.format('INSERT INTO persons (person_name, city_id, dob, education, married_status, mobile_number, wife_address, address, office_address, family_id) ' +
            'VALUES(\'%s\',\'%s\', \'%s\', \'%s\', \'%s\', \'%s\', \'%s\', \'%s\', \'%s\', \'%s\' ) RETURNING *',
            data.person_name, data.city_id, data.dob || '', data.education || '', data.married_status || '', data.mobile_number || '',
            data.wife_address || '', data.address || '', data.office_address || '', data.family_id);
    },
    updateFamilyMember: (data) => {
        return util.format(`UPDATE persons SET person_name = \'%s\', city_id = \'%s\', dob = \'%s\', education = \'%s\',
            married_status = \'%s\', mobile_number = \'%s\', wife_address = \'%s\',  
            address = \'%s\',  office_address = \'%s\', family_id = \'%s\'  WHERE person_id = \'%s\' RETURNING *`,
            data.person_name, data.city_id, data.dob || '', data.education || '', data.married_status || '', data.mobile_number || '',
            data.wife_address || '', data.address || '', data.office_address || '', data.family_id,
            data.person_id
        )
    },
    getFaimilyMemberDetail: (data) => {
        return util.format(`SELECT * FROM persons WHERE person_id = ${(Number(data.person_id))}`);
    },
     insertFamilyName: (data) => {
        return util.format('INSERT INTO family_table (family_name, city_id, zone_id) ' +
            'VALUES(\'%s\',\'%s\', \'%s\') RETURNING *',
            data.person_name, data.city_id, data.zone_id );
    },
}