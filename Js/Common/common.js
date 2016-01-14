    function w(str, name) {
        if (name)
            console.log(name + " : " + str);
        else {
            console.log(str);
        }
    }

    function wl(str) {
        w('-------------- ' + str + ' --------------')
    }

    function wlb(str) {
        w('-------------- ' + str + ' begin --------------')
    }

    function wle(str) {
        w('-------------- ' + str + ' end --------------')
    }
