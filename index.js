module.exports = function() {
  var args    = Array.prototype.slice.call(arguments);
  var cursor  = args[0];
  var keys    = args.slice(1);

  for(var i = 0; i < keys.length; i++) {
    cursor = cursor[keys[i]];
    if (cursor === void 0)
      return void 0;
  }

  return cursor;
}
