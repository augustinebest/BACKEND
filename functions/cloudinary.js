const cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'chota',
    api_key: '454241471689352',
    api_secret: 'pCWnCq-cSSiM4UEcBrnI2EGTguQ'
  })

exports.upload = function(file){
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, function(result){
            resolve({url: result.url, Id: result.public_id});
        }, {resource_type: "auto"})
   })
}

exports.delete = function(publicId) {
    cloudinary.uploader.destroy(publicId, function(err, result) {
        if(err) {
            console.log(err);
        } else {
            console.log('It have been deleted in cloudinary!');
        }
    })
}