window.mo = {}
mo.$ = require('jquery')
mo._allowCopy = []
mo._ajax = []
require('./m/linkage/index.js')
mo._allowCopy.push('linkage')
require('./m/2/index.js')
require('./m/box/index.js')
require('./m/ajax/index.js')
require('./m/form-input/index.js')
require('./m/copy/index.js')
require('./m/upload/index.js')
mo._allowCopy.push('upload')
require('./m/login/index.js')
require('./m/alert/index.js')
require('./m/remove/index.js')
require('./m/sort/index.js')
require('./m/time/index.js')
mo._allowCopy.push('time')
require('./m/tree/index.js')
mo._allowCopy.push('tree')
require('./m/editor/index.js')
mo._allowCopy.push('editor')
require('./m/tree-select/index.js')
mo._allowCopy.push('ts')
require('./m/tab/index.js')
mo._allowCopy.push('edit')
require('./m/edit/index.js')
require('./m/dialog/index.js')
mo._allowCopy.push('ajaxtable')
require('./m/ajaxtable/index.js')
require('./m/table/index.js')
