(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return `${str}${this}`.toString();
        }
        return this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return `${this}${str}`.toString();
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        return this.length == 0 ? true : false;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            let dot = '.';
            return `${dot.repeat(n)}`;
        }

        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substring(0, n - 2).lastIndexOf(' ');
            if (lastIndex != -1) {
                return this.toString().substring(0, lastIndex) + '...';
            } else {
                return this.toString().substring(0, n - 3) + '...';
            }
        }
    }
    String.format = function(str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }
        return str;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
     str = str.truncate(16);
     console.log(str);
     str = str.truncate(14);
     console.log(str);
     str = str.truncate(8);
     console.log(str);
     str = str.truncate(4);
     console.log(str);
     str = str.truncate(2);
     console.log(str);
     str = String.format('The {0} {1} fox',
         'quick', 'brown');
         console.log(str);
     str = String.format('jumps {0} {1}',
         'dog');
    console.log(str);

