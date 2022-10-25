function requestValidator(object) {
    let patternUri = /(\w*\.*)*/g;
    let patternMessage = /[^<>\\&'"]+/g;
    
    let validMethods = ['GET','POST','DELETE','CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (!validMethods.includes(object.method)) {
            throw new Error('Invalid request header: Invalid Method');
        }
        if (!object.method != '') {
            throw new Error('Invalid request header: Invalid Method');
        }
        if (object.uri != '*') {
            if (!object.uri) {
                throw new Error('Invalid request header: Invalid URI');
            } else if (patternUri.exec(object.uri)[0] == null) {
                throw new Error('Invalid request header: Invalid URI');
            } else if (object.uri.match(patternUri)[0] != object.uri) {
                throw new Error('Invalid request header: Invalid URI');
            } else if (object.uri == '') {
                throw new Error('Invalid request header: Invalid URI');
            }
        }
        if (!validVersions.includes(object.version)) {
            throw new Error('Invalid request header: Invalid Version');
        }
        if (!object.version != '') {
            throw new Error('Invalid request header: Invalid Version');
        }
        if (object.message != '') {
            if (!object.message) {
                throw new Error('Invalid request header: Invalid Message');
            } else if (patternMessage.exec(object.message)[0] == null) {
                throw new Error('Invalid request header: Invalid Message');
            } else if(object.message.match(patternMessage)[0] != object.message) {
                throw new Error('Invalid request header: Invalid Message');
            }
        }
    
    return object;
}

console.log(requestValidator({
    method: 'POST',
    uri: 'asd',
    version: 'HTTP/1.1',
    message: ";DROP TABLE"
}
));
