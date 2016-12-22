/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _myHead = __webpack_require__(2);

	var _myHead2 = _interopRequireDefault(_myHead);

	var _left = __webpack_require__(12);

	var _left2 = _interopRequireDefault(_left);

	var _message = __webpack_require__(78);

	var _message2 = _interopRequireDefault(_message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.config.debug = true; //开启错误提示

	/*组件必须在头部(最顶端)就引入，不能在函数体内引入*/


	/******   页面头部    *********/
	var head = new _vue2.default({
	    el: '#head',
	    components: {
	        myHead: _myHead2.default
	    }
	});

	/***** container组件 ******/
	var container = new _vue2.default({
	    el: '#container',
	    data: {
	        left: '',
	        message: {
	            pagination: {
	                pageNum: 1
	            }
	        }
	    },
	    components: {
	        Left: _left2.default,
	        Message: _message2.default
	    }
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Vue.js v2.0.5
	 * (c) 2014-2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vue = factory());
	}(this, (function () { 'use strict';

	/*  */

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function _toString (val) {
	  return val == null
	    ? ''
	    : typeof val === 'object'
	      ? JSON.stringify(val, null, 2)
	      : String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
	  var n = parseFloat(val, 10);
	  return (n || n === 0) ? n : val
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
	  str,
	  expectsLowerCase
	) {
	  var map = Object.create(null);
	  var list = str.split(',');
	  for (var i = 0; i < list.length; i++) {
	    map[list[i]] = true;
	  }
	  return expectsLowerCase
	    ? function (val) { return map[val.toLowerCase()]; }
	    : function (val) { return map[val]; }
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
	var isBuiltInTag = makeMap('slot,component', true);

	/**
	 * Remove an item from an array
	 */
	function remove$1 (arr, item) {
	  if (arr.length) {
	    var index = arr.indexOf(item);
	    if (index > -1) {
	      return arr.splice(index, 1)
	    }
	  }
	}

	/**
	 * Check whether the object has the property.
	 */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn (obj, key) {
	  return hasOwnProperty.call(obj, key)
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
	  return typeof value === 'string' || typeof value === 'number'
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
	  var cache = Object.create(null);
	  return function cachedFn (str) {
	    var hit = cache[str];
	    return hit || (cache[str] = fn(str))
	  }
	}

	/**
	 * Camelize a hyphen-delmited string.
	 */
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
	  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
	  return str.charAt(0).toUpperCase() + str.slice(1)
	});

	/**
	 * Hyphenate a camelCase string.
	 */
	var hyphenateRE = /([^-])([A-Z])/g;
	var hyphenate = cached(function (str) {
	  return str
	    .replace(hyphenateRE, '$1-$2')
	    .replace(hyphenateRE, '$1-$2')
	    .toLowerCase()
	});

	/**
	 * Simple bind, faster than native
	 */
	function bind$1 (fn, ctx) {
	  function boundFn (a) {
	    var l = arguments.length;
	    return l
	      ? l > 1
	        ? fn.apply(ctx, arguments)
	        : fn.call(ctx, a)
	      : fn.call(ctx)
	  }
	  // record original fn length
	  boundFn._length = fn.length;
	  return boundFn
	}

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
	  start = start || 0;
	  var i = list.length - start;
	  var ret = new Array(i);
	  while (i--) {
	    ret[i] = list[i + start];
	  }
	  return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
	  for (var key in _from) {
	    to[key] = _from[key];
	  }
	  return to
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	var toString = Object.prototype.toString;
	var OBJECT_STRING = '[object Object]';
	function isPlainObject (obj) {
	  return toString.call(obj) === OBJECT_STRING
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
	  var res = {};
	  for (var i = 0; i < arr.length; i++) {
	    if (arr[i]) {
	      extend(res, arr[i]);
	    }
	  }
	  return res
	}

	/**
	 * Perform no operation.
	 */
	function noop () {}

	/**
	 * Always return false.
	 */
	var no = function () { return false; };

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
	  return modules.reduce(function (keys, m) {
	    return keys.concat(m.staticKeys || [])
	  }, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
	  /* eslint-disable eqeqeq */
	  return a == b || (
	    isObject(a) && isObject(b)
	      ? JSON.stringify(a) === JSON.stringify(b)
	      : false
	  )
	  /* eslint-enable eqeqeq */
	}

	function looseIndexOf (arr, val) {
	  for (var i = 0; i < arr.length; i++) {
	    if (looseEqual(arr[i], val)) { return i }
	  }
	  return -1
	}

	/*  */

	var config = {
	  /**
	   * Option merge strategies (used in core/util/options)
	   */
	  optionMergeStrategies: Object.create(null),

	  /**
	   * Whether to suppress warnings.
	   */
	  silent: false,

	  /**
	   * Whether to enable devtools
	   */
	  devtools: "development" !== 'production',

	  /**
	   * Error handler for watcher errors
	   */
	  errorHandler: null,

	  /**
	   * Ignore certain custom elements
	   */
	  ignoredElements: null,

	  /**
	   * Custom user key aliases for v-on
	   */
	  keyCodes: Object.create(null),

	  /**
	   * Check if a tag is reserved so that it cannot be registered as a
	   * component. This is platform-dependent and may be overwritten.
	   */
	  isReservedTag: no,

	  /**
	   * Check if a tag is an unknown element.
	   * Platform-dependent.
	   */
	  isUnknownElement: no,

	  /**
	   * Get the namespace of an element
	   */
	  getTagNamespace: noop,

	  /**
	   * Check if an attribute must be bound using property, e.g. value
	   * Platform-dependent.
	   */
	  mustUseProp: no,

	  /**
	   * List of asset types that a component can own.
	   */
	  _assetTypes: [
	    'component',
	    'directive',
	    'filter'
	  ],

	  /**
	   * List of lifecycle hooks.
	   */
	  _lifecycleHooks: [
	    'beforeCreate',
	    'created',
	    'beforeMount',
	    'mounted',
	    'beforeUpdate',
	    'updated',
	    'beforeDestroy',
	    'destroyed',
	    'activated',
	    'deactivated'
	  ],

	  /**
	   * Max circular updates allowed in a scheduler flush cycle.
	   */
	  _maxUpdateCount: 100,

	  /**
	   * Server rendering?
	   */
	  _isServer: "client" === 'server'
	};

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
	  var c = (str + '').charCodeAt(0);
	  return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

	/**
	 * Parse simple path.
	 */
	var bailRE = /[^\w.$]/;
	function parsePath (path) {
	  if (bailRE.test(path)) {
	    return
	  } else {
	    var segments = path.split('.');
	    return function (obj) {
	      for (var i = 0; i < segments.length; i++) {
	        if (!obj) { return }
	        obj = obj[segments[i]];
	      }
	      return obj
	    }
	  }
	}

	/*  */
	/* globals MutationObserver */

	// can we use __proto__?
	var hasProto = '__proto__' in {};

	// Browser environment sniffing
	var inBrowser =
	  typeof window !== 'undefined' &&
	  Object.prototype.toString.call(window) !== '[object Object]';

	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = UA && UA.indexOf('android') > 0;
	var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

	/* istanbul ignore next */
	function isNative (Ctor) {
	  return /native code/.test(Ctor.toString())
	}

	/**
	 * Defer a task to execute it asynchronously.
	 */
	var nextTick = (function () {
	  var callbacks = [];
	  var pending = false;
	  var timerFunc;

	  function nextTickHandler () {
	    pending = false;
	    var copies = callbacks.slice(0);
	    callbacks.length = 0;
	    for (var i = 0; i < copies.length; i++) {
	      copies[i]();
	    }
	  }

	  // the nextTick behavior leverages the microtask queue, which can be accessed
	  // via either native Promise.then or MutationObserver.
	  // MutationObserver has wider support, however it is seriously bugged in
	  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
	  // completely stops working after triggering a few times... so, if native
	  // Promise is available, we will use it:
	  /* istanbul ignore if */
	  if (typeof Promise !== 'undefined' && isNative(Promise)) {
	    var p = Promise.resolve();
	    timerFunc = function () {
	      p.then(nextTickHandler);
	      // in problematic UIWebViews, Promise.then doesn't completely break, but
	      // it can get stuck in a weird state where callbacks are pushed into the
	      // microtask queue but the queue isn't being flushed, until the browser
	      // needs to do some other work, e.g. handle a timer. Therefore we can
	      // "force" the microtask queue to be flushed by adding an empty timer.
	      if (isIOS) { setTimeout(noop); }
	    };
	  } else if (typeof MutationObserver !== 'undefined' && (
	    isNative(MutationObserver) ||
	    // PhantomJS and iOS 7.x
	    MutationObserver.toString() === '[object MutationObserverConstructor]'
	  )) {
	    // use MutationObserver where native Promise is not available,
	    // e.g. PhantomJS IE11, iOS7, Android 4.4
	    var counter = 1;
	    var observer = new MutationObserver(nextTickHandler);
	    var textNode = document.createTextNode(String(counter));
	    observer.observe(textNode, {
	      characterData: true
	    });
	    timerFunc = function () {
	      counter = (counter + 1) % 2;
	      textNode.data = String(counter);
	    };
	  } else {
	    // fallback to setTimeout
	    /* istanbul ignore next */
	    timerFunc = function () {
	      setTimeout(nextTickHandler, 0);
	    };
	  }

	  return function queueNextTick (cb, ctx) {
	    var func = ctx
	      ? function () { cb.call(ctx); }
	      : cb;
	    callbacks.push(func);
	    if (!pending) {
	      pending = true;
	      timerFunc();
	    }
	  }
	})();

	var _Set;
	/* istanbul ignore if */
	if (typeof Set !== 'undefined' && isNative(Set)) {
	  // use native Set when available.
	  _Set = Set;
	} else {
	  // a non-standard Set polyfill that only works with primitive keys.
	  _Set = (function () {
	    function Set () {
	      this.set = Object.create(null);
	    }
	    Set.prototype.has = function has (key) {
	      return this.set[key] !== undefined
	    };
	    Set.prototype.add = function add (key) {
	      this.set[key] = 1;
	    };
	    Set.prototype.clear = function clear () {
	      this.set = Object.create(null);
	    };

	    return Set;
	  }());
	}

	/* not type checking this file because flow doesn't play well with Proxy */

	var hasProxy;
	var proxyHandlers;
	var initProxy;

	{
	  var allowedGlobals = makeMap(
	    'Infinity,undefined,NaN,isFinite,isNaN,' +
	    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
	    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
	    'require' // for Webpack/Browserify
	  );

	  hasProxy =
	    typeof Proxy !== 'undefined' &&
	    Proxy.toString().match(/native code/);

	  proxyHandlers = {
	    has: function has (target, key) {
	      var has = key in target;
	      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
	      if (!has && !isAllowed) {
	        warn(
	          "Property or method \"" + key + "\" is not defined on the instance but " +
	          "referenced during render. Make sure to declare reactive data " +
	          "properties in the data option.",
	          target
	        );
	      }
	      return has || !isAllowed
	    }
	  };

	  initProxy = function initProxy (vm) {
	    if (hasProxy) {
	      vm._renderProxy = new Proxy(vm, proxyHandlers);
	    } else {
	      vm._renderProxy = vm;
	    }
	  };
	}

	/*  */


	var uid$2 = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
	  this.id = uid$2++;
	  this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
	  this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
	  remove$1(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
	  if (Dep.target) {
	    Dep.target.addDep(this);
	  }
	};

	Dep.prototype.notify = function notify () {
	  // stablize the subscriber list first
	  var subs = this.subs.slice();
	  for (var i = 0, l = subs.length; i < l; i++) {
	    subs[i].update();
	  }
	};

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (_target) {
	  if (Dep.target) { targetStack.push(Dep.target); }
	  Dep.target = _target;
	}

	function popTarget () {
	  Dep.target = targetStack.pop();
	}

	/*  */


	var queue = [];
	var has$1 = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
	  queue.length = 0;
	  has$1 = {};
	  {
	    circular = {};
	  }
	  waiting = flushing = false;
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
	  flushing = true;

	  // Sort queue before flush.
	  // This ensures that:
	  // 1. Components are updated from parent to child. (because parent is always
	  //    created before the child)
	  // 2. A component's user watchers are run before its render watcher (because
	  //    user watchers are created before the render watcher)
	  // 3. If a component is destroyed during a parent component's watcher run,
	  //    its watchers can be skipped.
	  queue.sort(function (a, b) { return a.id - b.id; });

	  // do not cache length because more watchers might be pushed
	  // as we run existing watchers
	  for (index = 0; index < queue.length; index++) {
	    var watcher = queue[index];
	    var id = watcher.id;
	    has$1[id] = null;
	    watcher.run();
	    // in dev build, check and stop circular updates.
	    if ("development" !== 'production' && has$1[id] != null) {
	      circular[id] = (circular[id] || 0) + 1;
	      if (circular[id] > config._maxUpdateCount) {
	        warn(
	          'You may have an infinite update loop ' + (
	            watcher.user
	              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
	              : "in a component render function."
	          ),
	          watcher.vm
	        );
	        break
	      }
	    }
	  }

	  // devtool hook
	  /* istanbul ignore if */
	  if (devtools && config.devtools) {
	    devtools.emit('flush');
	  }

	  resetSchedulerState();
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
	  var id = watcher.id;
	  if (has$1[id] == null) {
	    has$1[id] = true;
	    if (!flushing) {
	      queue.push(watcher);
	    } else {
	      // if already flushing, splice the watcher based on its id
	      // if already past its id, it will be run next immediately.
	      var i = queue.length - 1;
	      while (i >= 0 && queue[i].id > watcher.id) {
	        i--;
	      }
	      queue.splice(Math.max(i, index) + 1, 0, watcher);
	    }
	    // queue the flush
	    if (!waiting) {
	      waiting = true;
	      nextTick(flushSchedulerQueue);
	    }
	  }
	}

	/*  */

	var uid$1 = 0;

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
	  vm,
	  expOrFn,
	  cb,
	  options
	) {
	  if ( options === void 0 ) options = {};

	  this.vm = vm;
	  vm._watchers.push(this);
	  // options
	  this.deep = !!options.deep;
	  this.user = !!options.user;
	  this.lazy = !!options.lazy;
	  this.sync = !!options.sync;
	  this.expression = expOrFn.toString();
	  this.cb = cb;
	  this.id = ++uid$1; // uid for batching
	  this.active = true;
	  this.dirty = this.lazy; // for lazy watchers
	  this.deps = [];
	  this.newDeps = [];
	  this.depIds = new _Set();
	  this.newDepIds = new _Set();
	  // parse expression for getter
	  if (typeof expOrFn === 'function') {
	    this.getter = expOrFn;
	  } else {
	    this.getter = parsePath(expOrFn);
	    if (!this.getter) {
	      this.getter = function () {};
	      "development" !== 'production' && warn(
	        "Failed watching path: \"" + expOrFn + "\" " +
	        'Watcher only accepts simple dot-delimited paths. ' +
	        'For full control, use a function instead.',
	        vm
	      );
	    }
	  }
	  this.value = this.lazy
	    ? undefined
	    : this.get();
	};

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
	  pushTarget(this);
	  var value = this.getter.call(this.vm, this.vm);
	  // "touch" every property so they are all tracked as
	  // dependencies for deep watching
	  if (this.deep) {
	    traverse(value);
	  }
	  popTarget();
	  this.cleanupDeps();
	  return value
	};

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
	  var id = dep.id;
	  if (!this.newDepIds.has(id)) {
	    this.newDepIds.add(id);
	    this.newDeps.push(dep);
	    if (!this.depIds.has(id)) {
	      dep.addSub(this);
	    }
	  }
	};

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    var dep = this$1.deps[i];
	    if (!this$1.newDepIds.has(dep.id)) {
	      dep.removeSub(this$1);
	    }
	  }
	  var tmp = this.depIds;
	  this.depIds = this.newDepIds;
	  this.newDepIds = tmp;
	  this.newDepIds.clear();
	  tmp = this.deps;
	  this.deps = this.newDeps;
	  this.newDeps = tmp;
	  this.newDeps.length = 0;
	};

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
	  /* istanbul ignore else */
	  if (this.lazy) {
	    this.dirty = true;
	  } else if (this.sync) {
	    this.run();
	  } else {
	    queueWatcher(this);
	  }
	};

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
	  if (this.active) {
	    var value = this.get();
	      if (
	        value !== this.value ||
	      // Deep watchers and watchers on Object/Arrays should fire even
	      // when the value is the same, because the value may
	      // have mutated.
	      isObject(value) ||
	      this.deep
	    ) {
	      // set new value
	      var oldValue = this.value;
	      this.value = value;
	      if (this.user) {
	        try {
	          this.cb.call(this.vm, value, oldValue);
	        } catch (e) {
	          "development" !== 'production' && warn(
	            ("Error in watcher \"" + (this.expression) + "\""),
	            this.vm
	          );
	          /* istanbul ignore else */
	          if (config.errorHandler) {
	            config.errorHandler.call(null, e, this.vm);
	          } else {
	            throw e
	          }
	        }
	      } else {
	        this.cb.call(this.vm, value, oldValue);
	      }
	    }
	  }
	};

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
	  this.value = this.get();
	  this.dirty = false;
	};

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
	    var this$1 = this;

	  var i = this.deps.length;
	  while (i--) {
	    this$1.deps[i].depend();
	  }
	};

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
	    var this$1 = this;

	  if (this.active) {
	    // remove self from vm's watcher list
	    // this is a somewhat expensive operation so we skip it
	    // if the vm is being destroyed or is performing a v-for
	    // re-render (the watcher list is then filtered by v-for).
	    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
	      remove$1(this.vm._watchers, this);
	    }
	    var i = this.deps.length;
	    while (i--) {
	      this$1.deps[i].removeSub(this$1);
	    }
	    this.active = false;
	  }
	};

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	var seenObjects = new _Set();
	function traverse (val) {
	  seenObjects.clear();
	  _traverse(val, seenObjects);
	}

	function _traverse (val, seen) {
	  var i, keys;
	  var isA = Array.isArray(val);
	  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
	    return
	  }
	  if (val.__ob__) {
	    var depId = val.__ob__.dep.id;
	    if (seen.has(depId)) {
	      return
	    }
	    seen.add(depId);
	  }
	  if (isA) {
	    i = val.length;
	    while (i--) { _traverse(val[i], seen); }
	  } else {
	    keys = Object.keys(val);
	    i = keys.length;
	    while (i--) { _traverse(val[keys[i]], seen); }
	  }
	}

	/*
	 * not type checking this file because flow doesn't play well with
	 * dynamically accessing methods on Array prototype
	 */

	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);[
	  'push',
	  'pop',
	  'shift',
	  'unshift',
	  'splice',
	  'sort',
	  'reverse'
	]
	.forEach(function (method) {
	  // cache original method
	  var original = arrayProto[method];
	  def(arrayMethods, method, function mutator () {
	    var arguments$1 = arguments;

	    // avoid leaking arguments:
	    // http://jsperf.com/closure-with-arguments
	    var i = arguments.length;
	    var args = new Array(i);
	    while (i--) {
	      args[i] = arguments$1[i];
	    }
	    var result = original.apply(this, args);
	    var ob = this.__ob__;
	    var inserted;
	    switch (method) {
	      case 'push':
	        inserted = args;
	        break
	      case 'unshift':
	        inserted = args;
	        break
	      case 'splice':
	        inserted = args.slice(2);
	        break
	    }
	    if (inserted) { ob.observeArray(inserted); }
	    // notify change
	    ob.dep.notify();
	    return result
	  });
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

	/**
	 * By default, when a reactive property is set, the new value is
	 * also converted to become reactive. However when passing down props,
	 * we don't want to force conversion because the value may be a nested value
	 * under a frozen data structure. Converting it would defeat the optimization.
	 */
	var observerState = {
	  shouldConvert: true,
	  isSettingProps: false
	};

	/**
	 * Observer class that are attached to each observed
	 * object. Once attached, the observer converts target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatches updates.
	 */
	var Observer = function Observer (value) {
	  this.value = value;
	  this.dep = new Dep();
	  this.vmCount = 0;
	  def(value, '__ob__', this);
	  if (Array.isArray(value)) {
	    var augment = hasProto
	      ? protoAugment
	      : copyAugment;
	    augment(value, arrayMethods, arrayKeys);
	    this.observeArray(value);
	  } else {
	    this.walk(value);
	  }
	};

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
	  var keys = Object.keys(obj);
	  for (var i = 0; i < keys.length; i++) {
	    defineReactive$$1(obj, keys[i], obj[keys[i]]);
	  }
	};

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
	  for (var i = 0, l = items.length; i < l; i++) {
	    observe(items[i]);
	  }
	};

	// helpers

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src) {
	  /* eslint-disable no-proto */
	  target.__proto__ = src;
	  /* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 *
	 * istanbul ignore next
	 */
	function copyAugment (target, src, keys) {
	  for (var i = 0, l = keys.length; i < l; i++) {
	    var key = keys[i];
	    def(target, key, src[key]);
	  }
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value) {
	  if (!isObject(value)) {
	    return
	  }
	  var ob;
	  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
	    ob = value.__ob__;
	  } else if (
	    observerState.shouldConvert &&
	    !config._isServer &&
	    (Array.isArray(value) || isPlainObject(value)) &&
	    Object.isExtensible(value) &&
	    !value._isVue
	  ) {
	    ob = new Observer(value);
	  }
	  return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive$$1 (
	  obj,
	  key,
	  val,
	  customSetter
	) {
	  var dep = new Dep();

	  var property = Object.getOwnPropertyDescriptor(obj, key);
	  if (property && property.configurable === false) {
	    return
	  }

	  // cater for pre-defined getter/setters
	  var getter = property && property.get;
	  var setter = property && property.set;

	  var childOb = observe(val);
	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function reactiveGetter () {
	      var value = getter ? getter.call(obj) : val;
	      if (Dep.target) {
	        dep.depend();
	        if (childOb) {
	          childOb.dep.depend();
	        }
	        if (Array.isArray(value)) {
	          dependArray(value);
	        }
	      }
	      return value
	    },
	    set: function reactiveSetter (newVal) {
	      var value = getter ? getter.call(obj) : val;
	      if (newVal === value) {
	        return
	      }
	      if ("development" !== 'production' && customSetter) {
	        customSetter();
	      }
	      if (setter) {
	        setter.call(obj, newVal);
	      } else {
	        val = newVal;
	      }
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (obj, key, val) {
	  if (Array.isArray(obj)) {
	    obj.length = Math.max(obj.length, key);
	    obj.splice(key, 1, val);
	    return val
	  }
	  if (hasOwn(obj, key)) {
	    obj[key] = val;
	    return
	  }
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid adding reactive properties to a Vue instance or its root $data ' +
	      'at runtime - declare it upfront in the data option.'
	    );
	    return
	  }
	  if (!ob) {
	    obj[key] = val;
	    return
	  }
	  defineReactive$$1(ob.value, key, val);
	  ob.dep.notify();
	  return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (obj, key) {
	  var ob = obj.__ob__;
	  if (obj._isVue || (ob && ob.vmCount)) {
	    "development" !== 'production' && warn(
	      'Avoid deleting properties on a Vue instance or its root $data ' +
	      '- just set it to null.'
	    );
	    return
	  }
	  if (!hasOwn(obj, key)) {
	    return
	  }
	  delete obj[key];
	  if (!ob) {
	    return
	  }
	  ob.dep.notify();
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
	  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
	    e = value[i];
	    e && e.__ob__ && e.__ob__.dep.depend();
	    if (Array.isArray(e)) {
	      dependArray(e);
	    }
	  }
	}

	/*  */

	function initState (vm) {
	  vm._watchers = [];
	  initProps(vm);
	  initData(vm);
	  initComputed(vm);
	  initMethods(vm);
	  initWatch(vm);
	}

	function initProps (vm) {
	  var props = vm.$options.props;
	  if (props) {
	    var propsData = vm.$options.propsData || {};
	    var keys = vm.$options._propKeys = Object.keys(props);
	    var isRoot = !vm.$parent;
	    // root instance props should be converted
	    observerState.shouldConvert = isRoot;
	    var loop = function ( i ) {
	      var key = keys[i];
	      /* istanbul ignore else */
	      {
	        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
	          if (vm.$parent && !observerState.isSettingProps) {
	            warn(
	              "Avoid mutating a prop directly since the value will be " +
	              "overwritten whenever the parent component re-renders. " +
	              "Instead, use a data or computed property based on the prop's " +
	              "value. Prop being mutated: \"" + key + "\"",
	              vm
	            );
	          }
	        });
	      }
	    };

	    for (var i = 0; i < keys.length; i++) loop( i );
	    observerState.shouldConvert = true;
	  }
	}

	function initData (vm) {
	  var data = vm.$options.data;
	  data = vm._data = typeof data === 'function'
	    ? data.call(vm)
	    : data || {};
	  if (!isPlainObject(data)) {
	    data = {};
	    "development" !== 'production' && warn(
	      'data functions should return an object.',
	      vm
	    );
	  }
	  // proxy data on instance
	  var keys = Object.keys(data);
	  var props = vm.$options.props;
	  var i = keys.length;
	  while (i--) {
	    if (props && hasOwn(props, keys[i])) {
	      "development" !== 'production' && warn(
	        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
	        "Use prop default value instead.",
	        vm
	      );
	    } else {
	      proxy(vm, keys[i]);
	    }
	  }
	  // observe data
	  observe(data);
	  data.__ob__ && data.__ob__.vmCount++;
	}

	var computedSharedDefinition = {
	  enumerable: true,
	  configurable: true,
	  get: noop,
	  set: noop
	};

	function initComputed (vm) {
	  var computed = vm.$options.computed;
	  if (computed) {
	    for (var key in computed) {
	      var userDef = computed[key];
	      if (typeof userDef === 'function') {
	        computedSharedDefinition.get = makeComputedGetter(userDef, vm);
	        computedSharedDefinition.set = noop;
	      } else {
	        computedSharedDefinition.get = userDef.get
	          ? userDef.cache !== false
	            ? makeComputedGetter(userDef.get, vm)
	            : bind$1(userDef.get, vm)
	          : noop;
	        computedSharedDefinition.set = userDef.set
	          ? bind$1(userDef.set, vm)
	          : noop;
	      }
	      Object.defineProperty(vm, key, computedSharedDefinition);
	    }
	  }
	}

	function makeComputedGetter (getter, owner) {
	  var watcher = new Watcher(owner, getter, noop, {
	    lazy: true
	  });
	  return function computedGetter () {
	    if (watcher.dirty) {
	      watcher.evaluate();
	    }
	    if (Dep.target) {
	      watcher.depend();
	    }
	    return watcher.value
	  }
	}

	function initMethods (vm) {
	  var methods = vm.$options.methods;
	  if (methods) {
	    for (var key in methods) {
	      vm[key] = methods[key] == null ? noop : bind$1(methods[key], vm);
	      {
	        methods[key] == null && warn(
	          "method \"" + key + "\" has an undefined value in the component definition. " +
	          "Did you reference the function correctly?",
	          vm
	        );
	        hasOwn(Vue$2.prototype, key) && warn(
	          ("Avoid overriding Vue's internal method \"" + key + "\"."),
	          vm
	        );
	      }
	    }
	  }
	}

	function initWatch (vm) {
	  var watch = vm.$options.watch;
	  if (watch) {
	    for (var key in watch) {
	      var handler = watch[key];
	      if (Array.isArray(handler)) {
	        for (var i = 0; i < handler.length; i++) {
	          createWatcher(vm, key, handler[i]);
	        }
	      } else {
	        createWatcher(vm, key, handler);
	      }
	    }
	  }
	}

	function createWatcher (vm, key, handler) {
	  var options;
	  if (isPlainObject(handler)) {
	    options = handler;
	    handler = handler.handler;
	  }
	  if (typeof handler === 'string') {
	    handler = vm[handler];
	  }
	  vm.$watch(key, handler, options);
	}

	function stateMixin (Vue) {
	  // flow somehow has problems with directly declared definition object
	  // when using Object.defineProperty, so we have to procedurally build up
	  // the object here.
	  var dataDef = {};
	  dataDef.get = function () {
	    return this._data
	  };
	  {
	    dataDef.set = function (newData) {
	      warn(
	        'Avoid replacing instance root $data. ' +
	        'Use nested data properties instead.',
	        this
	      );
	    };
	  }
	  Object.defineProperty(Vue.prototype, '$data', dataDef);

	  Vue.prototype.$set = set;
	  Vue.prototype.$delete = del;

	  Vue.prototype.$watch = function (
	    expOrFn,
	    cb,
	    options
	  ) {
	    var vm = this;
	    options = options || {};
	    options.user = true;
	    var watcher = new Watcher(vm, expOrFn, cb, options);
	    if (options.immediate) {
	      cb.call(vm, watcher.value);
	    }
	    return function unwatchFn () {
	      watcher.teardown();
	    }
	  };
	}

	function proxy (vm, key) {
	  if (!isReserved(key)) {
	    Object.defineProperty(vm, key, {
	      configurable: true,
	      enumerable: true,
	      get: function proxyGetter () {
	        return vm._data[key]
	      },
	      set: function proxySetter (val) {
	        vm._data[key] = val;
	      }
	    });
	  }
	}

	/*  */

	var VNode = function VNode (
	  tag,
	  data,
	  children,
	  text,
	  elm,
	  ns,
	  context,
	  componentOptions
	) {
	  this.tag = tag;
	  this.data = data;
	  this.children = children;
	  this.text = text;
	  this.elm = elm;
	  this.ns = ns;
	  this.context = context;
	  this.functionalContext = undefined;
	  this.key = data && data.key;
	  this.componentOptions = componentOptions;
	  this.child = undefined;
	  this.parent = undefined;
	  this.raw = false;
	  this.isStatic = false;
	  this.isRootInsert = true;
	  this.isComment = false;
	  this.isCloned = false;
	  this.isOnce = false;
	};

	var emptyVNode = function () {
	  var node = new VNode();
	  node.text = '';
	  node.isComment = true;
	  return node
	};

	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
	function cloneVNode (vnode) {
	  var cloned = new VNode(
	    vnode.tag,
	    vnode.data,
	    vnode.children,
	    vnode.text,
	    vnode.elm,
	    vnode.ns,
	    vnode.context,
	    vnode.componentOptions
	  );
	  cloned.isStatic = vnode.isStatic;
	  cloned.key = vnode.key;
	  cloned.isCloned = true;
	  return cloned
	}

	function cloneVNodes (vnodes) {
	  var res = new Array(vnodes.length);
	  for (var i = 0; i < vnodes.length; i++) {
	    res[i] = cloneVNode(vnodes[i]);
	  }
	  return res
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook, key) {
	  key = key + hookKey;
	  var injectedHash = def.__injected || (def.__injected = {});
	  if (!injectedHash[key]) {
	    injectedHash[key] = true;
	    var oldHook = def[hookKey];
	    if (oldHook) {
	      def[hookKey] = function () {
	        oldHook.apply(this, arguments);
	        hook.apply(this, arguments);
	      };
	    } else {
	      def[hookKey] = hook;
	    }
	  }
	}

	/*  */

	function updateListeners (
	  on,
	  oldOn,
	  add,
	  remove$$1,
	  vm
	) {
	  var name, cur, old, fn, event, capture;
	  for (name in on) {
	    cur = on[name];
	    old = oldOn[name];
	    if (!cur) {
	      "development" !== 'production' && warn(
	        "Invalid handler for event \"" + name + "\": got " + String(cur),
	        vm
	      );
	    } else if (!old) {
	      capture = name.charAt(0) === '!';
	      event = capture ? name.slice(1) : name;
	      if (Array.isArray(cur)) {
	        add(event, (cur.invoker = arrInvoker(cur)), capture);
	      } else {
	        if (!cur.invoker) {
	          fn = cur;
	          cur = on[name] = {};
	          cur.fn = fn;
	          cur.invoker = fnInvoker(cur);
	        }
	        add(event, cur.invoker, capture);
	      }
	    } else if (cur !== old) {
	      if (Array.isArray(old)) {
	        old.length = cur.length;
	        for (var i = 0; i < old.length; i++) { old[i] = cur[i]; }
	        on[name] = old;
	      } else {
	        old.fn = cur;
	        on[name] = old;
	      }
	    }
	  }
	  for (name in oldOn) {
	    if (!on[name]) {
	      event = name.charAt(0) === '!' ? name.slice(1) : name;
	      remove$$1(event, oldOn[name].invoker);
	    }
	  }
	}

	function arrInvoker (arr) {
	  return function (ev) {
	    var arguments$1 = arguments;

	    var single = arguments.length === 1;
	    for (var i = 0; i < arr.length; i++) {
	      single ? arr[i](ev) : arr[i].apply(null, arguments$1);
	    }
	  }
	}

	function fnInvoker (o) {
	  return function (ev) {
	    var single = arguments.length === 1;
	    single ? o.fn(ev) : o.fn.apply(null, arguments);
	  }
	}

	/*  */

	function normalizeChildren (
	  children,
	  ns,
	  nestedIndex
	) {
	  if (isPrimitive(children)) {
	    return [createTextVNode(children)]
	  }
	  if (Array.isArray(children)) {
	    var res = [];
	    for (var i = 0, l = children.length; i < l; i++) {
	      var c = children[i];
	      var last = res[res.length - 1];
	      //  nested
	      if (Array.isArray(c)) {
	        res.push.apply(res, normalizeChildren(c, ns, ((nestedIndex || '') + "_" + i)));
	      } else if (isPrimitive(c)) {
	        if (last && last.text) {
	          last.text += String(c);
	        } else if (c !== '') {
	          // convert primitive to vnode
	          res.push(createTextVNode(c));
	        }
	      } else if (c instanceof VNode) {
	        if (c.text && last && last.text) {
	          last.text += c.text;
	        } else {
	          // inherit parent namespace
	          if (ns) {
	            applyNS(c, ns);
	          }
	          // default key for nested array children (likely generated by v-for)
	          if (c.tag && c.key == null && nestedIndex != null) {
	            c.key = "__vlist" + nestedIndex + "_" + i + "__";
	          }
	          res.push(c);
	        }
	      }
	    }
	    return res
	  }
	}

	function createTextVNode (val) {
	  return new VNode(undefined, undefined, undefined, String(val))
	}

	function applyNS (vnode, ns) {
	  if (vnode.tag && !vnode.ns) {
	    vnode.ns = ns;
	    if (vnode.children) {
	      for (var i = 0, l = vnode.children.length; i < l; i++) {
	        applyNS(vnode.children[i], ns);
	      }
	    }
	  }
	}

	/*  */

	function getFirstComponentChild (children) {
	  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
	}

	/*  */

	var activeInstance = null;

	function initLifecycle (vm) {
	  var options = vm.$options;

	  // locate first non-abstract parent
	  var parent = options.parent;
	  if (parent && !options.abstract) {
	    while (parent.$options.abstract && parent.$parent) {
	      parent = parent.$parent;
	    }
	    parent.$children.push(vm);
	  }

	  vm.$parent = parent;
	  vm.$root = parent ? parent.$root : vm;

	  vm.$children = [];
	  vm.$refs = {};

	  vm._watcher = null;
	  vm._inactive = false;
	  vm._isMounted = false;
	  vm._isDestroyed = false;
	  vm._isBeingDestroyed = false;
	}

	function lifecycleMixin (Vue) {
	  Vue.prototype._mount = function (
	    el,
	    hydrating
	  ) {
	    var vm = this;
	    vm.$el = el;
	    if (!vm.$options.render) {
	      vm.$options.render = emptyVNode;
	      {
	        /* istanbul ignore if */
	        if (vm.$options.template) {
	          warn(
	            'You are using the runtime-only build of Vue where the template ' +
	            'option is not available. Either pre-compile the templates into ' +
	            'render functions, or use the compiler-included build.',
	            vm
	          );
	        } else {
	          warn(
	            'Failed to mount component: template or render function not defined.',
	            vm
	          );
	        }
	      }
	    }
	    callHook(vm, 'beforeMount');
	    vm._watcher = new Watcher(vm, function () {
	      vm._update(vm._render(), hydrating);
	    }, noop);
	    hydrating = false;
	    // manually mounted instance, call mounted on self
	    // mounted is called for render-created child components in its inserted hook
	    if (vm.$vnode == null) {
	      vm._isMounted = true;
	      callHook(vm, 'mounted');
	    }
	    return vm
	  };

	  Vue.prototype._update = function (vnode, hydrating) {
	    var vm = this;
	    if (vm._isMounted) {
	      callHook(vm, 'beforeUpdate');
	    }
	    var prevEl = vm.$el;
	    var prevActiveInstance = activeInstance;
	    activeInstance = vm;
	    var prevVnode = vm._vnode;
	    vm._vnode = vnode;
	    if (!prevVnode) {
	      // Vue.prototype.__patch__ is injected in entry points
	      // based on the rendering backend used.
	      vm.$el = vm.__patch__(vm.$el, vnode, hydrating);
	    } else {
	      vm.$el = vm.__patch__(prevVnode, vnode);
	    }
	    activeInstance = prevActiveInstance;
	    // update __vue__ reference
	    if (prevEl) {
	      prevEl.__vue__ = null;
	    }
	    if (vm.$el) {
	      vm.$el.__vue__ = vm;
	    }
	    // if parent is an HOC, update its $el as well
	    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
	      vm.$parent.$el = vm.$el;
	    }
	    if (vm._isMounted) {
	      callHook(vm, 'updated');
	    }
	  };

	  Vue.prototype._updateFromParent = function (
	    propsData,
	    listeners,
	    parentVnode,
	    renderChildren
	  ) {
	    var vm = this;
	    var hasChildren = !!(vm.$options._renderChildren || renderChildren);
	    vm.$options._parentVnode = parentVnode;
	    vm.$options._renderChildren = renderChildren;
	    // update props
	    if (propsData && vm.$options.props) {
	      observerState.shouldConvert = false;
	      {
	        observerState.isSettingProps = true;
	      }
	      var propKeys = vm.$options._propKeys || [];
	      for (var i = 0; i < propKeys.length; i++) {
	        var key = propKeys[i];
	        vm[key] = validateProp(key, vm.$options.props, propsData, vm);
	      }
	      observerState.shouldConvert = true;
	      {
	        observerState.isSettingProps = false;
	      }
	      vm.$options.propsData = propsData;
	    }
	    // update listeners
	    if (listeners) {
	      var oldListeners = vm.$options._parentListeners;
	      vm.$options._parentListeners = listeners;
	      vm._updateListeners(listeners, oldListeners);
	    }
	    // resolve slots + force update if has children
	    if (hasChildren) {
	      vm.$slots = resolveSlots(renderChildren, vm._renderContext);
	      vm.$forceUpdate();
	    }
	  };

	  Vue.prototype.$forceUpdate = function () {
	    var vm = this;
	    if (vm._watcher) {
	      vm._watcher.update();
	    }
	  };

	  Vue.prototype.$destroy = function () {
	    var vm = this;
	    if (vm._isBeingDestroyed) {
	      return
	    }
	    callHook(vm, 'beforeDestroy');
	    vm._isBeingDestroyed = true;
	    // remove self from parent
	    var parent = vm.$parent;
	    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
	      remove$1(parent.$children, vm);
	    }
	    // teardown watchers
	    if (vm._watcher) {
	      vm._watcher.teardown();
	    }
	    var i = vm._watchers.length;
	    while (i--) {
	      vm._watchers[i].teardown();
	    }
	    // remove reference from data ob
	    // frozen object may not have observer.
	    if (vm._data.__ob__) {
	      vm._data.__ob__.vmCount--;
	    }
	    // call the last hook...
	    vm._isDestroyed = true;
	    callHook(vm, 'destroyed');
	    // turn off all instance listeners.
	    vm.$off();
	    // remove __vue__ reference
	    if (vm.$el) {
	      vm.$el.__vue__ = null;
	    }
	    // invoke destroy hooks on current rendered tree
	    vm.__patch__(vm._vnode, null);
	  };
	}

	function callHook (vm, hook) {
	  var handlers = vm.$options[hook];
	  if (handlers) {
	    for (var i = 0, j = handlers.length; i < j; i++) {
	      handlers[i].call(vm);
	    }
	  }
	  vm.$emit('hook:' + hook);
	}

	/*  */

	var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 };
	var hooksToMerge = Object.keys(hooks);

	function createComponent (
	  Ctor,
	  data,
	  context,
	  children,
	  tag
	) {
	  if (!Ctor) {
	    return
	  }

	  if (isObject(Ctor)) {
	    Ctor = Vue$2.extend(Ctor);
	  }

	  if (typeof Ctor !== 'function') {
	    {
	      warn(("Invalid Component definition: " + (String(Ctor))), context);
	    }
	    return
	  }

	  // resolve constructor options in case global mixins are applied after
	  // component constructor creation
	  resolveConstructorOptions(Ctor);

	  // async component
	  if (!Ctor.cid) {
	    if (Ctor.resolved) {
	      Ctor = Ctor.resolved;
	    } else {
	      Ctor = resolveAsyncComponent(Ctor, function () {
	        // it's ok to queue this on every render because
	        // $forceUpdate is buffered by the scheduler.
	        context.$forceUpdate();
	      });
	      if (!Ctor) {
	        // return nothing if this is indeed an async component
	        // wait for the callback to trigger parent update.
	        return
	      }
	    }
	  }

	  data = data || {};

	  // extract props
	  var propsData = extractProps(data, Ctor);

	  // functional component
	  if (Ctor.options.functional) {
	    return createFunctionalComponent(Ctor, propsData, data, context, children)
	  }

	  // extract listeners, since these needs to be treated as
	  // child component listeners instead of DOM listeners
	  var listeners = data.on;
	  // replace with listeners with .native modifier
	  data.on = data.nativeOn;

	  if (Ctor.options.abstract) {
	    // abstract components do not keep anything
	    // other than props & listeners
	    data = {};
	  }

	  // merge component management hooks onto the placeholder node
	  mergeHooks(data);

	  // return a placeholder vnode
	  var name = Ctor.options.name || tag;
	  var vnode = new VNode(
	    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
	    data, undefined, undefined, undefined, undefined, context,
	    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
	  );
	  return vnode
	}

	function createFunctionalComponent (
	  Ctor,
	  propsData,
	  data,
	  context,
	  children
	) {
	  var props = {};
	  var propOptions = Ctor.options.props;
	  if (propOptions) {
	    for (var key in propOptions) {
	      props[key] = validateProp(key, propOptions, propsData);
	    }
	  }
	  var vnode = Ctor.options.render.call(
	    null,
	    // ensure the createElement function in functional components
	    // gets a unique context - this is necessary for correct named slot check
	    bind$1(createElement, { _self: Object.create(context) }),
	    {
	      props: props,
	      data: data,
	      parent: context,
	      children: normalizeChildren(children),
	      slots: function () { return resolveSlots(children, context); }
	    }
	  );
	  if (vnode instanceof VNode) {
	    vnode.functionalContext = context;
	    if (data.slot) {
	      (vnode.data || (vnode.data = {})).slot = data.slot;
	    }
	  }
	  return vnode
	}

	function createComponentInstanceForVnode (
	  vnode, // we know it's MountedComponentVNode but flow doesn't
	  parent // activeInstance in lifecycle state
	) {
	  var vnodeComponentOptions = vnode.componentOptions;
	  var options = {
	    _isComponent: true,
	    parent: parent,
	    propsData: vnodeComponentOptions.propsData,
	    _componentTag: vnodeComponentOptions.tag,
	    _parentVnode: vnode,
	    _parentListeners: vnodeComponentOptions.listeners,
	    _renderChildren: vnodeComponentOptions.children
	  };
	  // check inline-template render functions
	  var inlineTemplate = vnode.data.inlineTemplate;
	  if (inlineTemplate) {
	    options.render = inlineTemplate.render;
	    options.staticRenderFns = inlineTemplate.staticRenderFns;
	  }
	  return new vnodeComponentOptions.Ctor(options)
	}

	function init (vnode, hydrating) {
	  if (!vnode.child || vnode.child._isDestroyed) {
	    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance);
	    child.$mount(hydrating ? vnode.elm : undefined, hydrating);
	  }
	}

	function prepatch (
	  oldVnode,
	  vnode
	) {
	  var options = vnode.componentOptions;
	  var child = vnode.child = oldVnode.child;
	  child._updateFromParent(
	    options.propsData, // updated props
	    options.listeners, // updated listeners
	    vnode, // new parent vnode
	    options.children // new children
	  );
	}

	function insert (vnode) {
	  if (!vnode.child._isMounted) {
	    vnode.child._isMounted = true;
	    callHook(vnode.child, 'mounted');
	  }
	  if (vnode.data.keepAlive) {
	    vnode.child._inactive = false;
	    callHook(vnode.child, 'activated');
	  }
	}

	function destroy$1 (vnode) {
	  if (!vnode.child._isDestroyed) {
	    if (!vnode.data.keepAlive) {
	      vnode.child.$destroy();
	    } else {
	      vnode.child._inactive = true;
	      callHook(vnode.child, 'deactivated');
	    }
	  }
	}

	function resolveAsyncComponent (
	  factory,
	  cb
	) {
	  if (factory.requested) {
	    // pool callbacks
	    factory.pendingCallbacks.push(cb);
	  } else {
	    factory.requested = true;
	    var cbs = factory.pendingCallbacks = [cb];
	    var sync = true;

	    var resolve = function (res) {
	      if (isObject(res)) {
	        res = Vue$2.extend(res);
	      }
	      // cache resolved
	      factory.resolved = res;
	      // invoke callbacks only if this is not a synchronous resolve
	      // (async resolves are shimmed as synchronous during SSR)
	      if (!sync) {
	        for (var i = 0, l = cbs.length; i < l; i++) {
	          cbs[i](res);
	        }
	      }
	    };

	    var reject = function (reason) {
	      "development" !== 'production' && warn(
	        "Failed to resolve async component: " + (String(factory)) +
	        (reason ? ("\nReason: " + reason) : '')
	      );
	    };

	    var res = factory(resolve, reject);

	    // handle promise
	    if (res && typeof res.then === 'function' && !factory.resolved) {
	      res.then(resolve, reject);
	    }

	    sync = false;
	    // return in case resolved synchronously
	    return factory.resolved
	  }
	}

	function extractProps (data, Ctor) {
	  // we are only extracting raw values here.
	  // validation and default values are handled in the child
	  // component itself.
	  var propOptions = Ctor.options.props;
	  if (!propOptions) {
	    return
	  }
	  var res = {};
	  var attrs = data.attrs;
	  var props = data.props;
	  var domProps = data.domProps;
	  if (attrs || props || domProps) {
	    for (var key in propOptions) {
	      var altKey = hyphenate(key);
	      checkProp(res, props, key, altKey, true) ||
	      checkProp(res, attrs, key, altKey) ||
	      checkProp(res, domProps, key, altKey);
	    }
	  }
	  return res
	}

	function checkProp (
	  res,
	  hash,
	  key,
	  altKey,
	  preserve
	) {
	  if (hash) {
	    if (hasOwn(hash, key)) {
	      res[key] = hash[key];
	      if (!preserve) {
	        delete hash[key];
	      }
	      return true
	    } else if (hasOwn(hash, altKey)) {
	      res[key] = hash[altKey];
	      if (!preserve) {
	        delete hash[altKey];
	      }
	      return true
	    }
	  }
	  return false
	}

	function mergeHooks (data) {
	  if (!data.hook) {
	    data.hook = {};
	  }
	  for (var i = 0; i < hooksToMerge.length; i++) {
	    var key = hooksToMerge[i];
	    var fromParent = data.hook[key];
	    var ours = hooks[key];
	    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
	  }
	}

	function mergeHook$1 (a, b) {
	  // since all hooks have at most two args, use fixed args
	  // to avoid having to use fn.apply().
	  return function (_, __) {
	    a(_, __);
	    b(_, __);
	  }
	}

	/*  */

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
	function createElement (
	  tag,
	  data,
	  children
	) {
	  if (data && (Array.isArray(data) || typeof data !== 'object')) {
	    children = data;
	    data = undefined;
	  }
	  // make sure to use real instance instead of proxy as context
	  return _createElement(this._self, tag, data, children)
	}

	function _createElement (
	  context,
	  tag,
	  data,
	  children
	) {
	  if (data && data.__ob__) {
	    "development" !== 'production' && warn(
	      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
	      'Always create fresh vnode data objects in each render!',
	      context
	    );
	    return
	  }
	  if (!tag) {
	    // in case of component :is set to falsy value
	    return emptyVNode()
	  }
	  if (typeof tag === 'string') {
	    var Ctor;
	    var ns = config.getTagNamespace(tag);
	    if (config.isReservedTag(tag)) {
	      // platform built-in elements
	      return new VNode(
	        tag, data, normalizeChildren(children, ns),
	        undefined, undefined, ns, context
	      )
	    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
	      // component
	      return createComponent(Ctor, data, context, children, tag)
	    } else {
	      // unknown or unlisted namespaced elements
	      // check at runtime because it may get assigned a namespace when its
	      // parent normalizes children
	      var childNs = tag === 'foreignObject' ? 'xhtml' : ns;
	      return new VNode(
	        tag, data, normalizeChildren(children, childNs),
	        undefined, undefined, ns, context
	      )
	    }
	  } else {
	    // direct component options / constructor
	    return createComponent(tag, data, context, children)
	  }
	}

	/*  */

	function initRender (vm) {
	  vm.$vnode = null; // the placeholder node in parent tree
	  vm._vnode = null; // the root of the child tree
	  vm._staticTrees = null;
	  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context;
	  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext);
	  // bind the public createElement fn to this instance
	  // so that we get proper render context inside it.
	  vm.$createElement = bind$1(createElement, vm);
	  if (vm.$options.el) {
	    vm.$mount(vm.$options.el);
	  }
	}

	function renderMixin (Vue) {
	  Vue.prototype.$nextTick = function (fn) {
	    nextTick(fn, this);
	  };

	  Vue.prototype._render = function () {
	    var vm = this;
	    var ref = vm.$options;
	    var render = ref.render;
	    var staticRenderFns = ref.staticRenderFns;
	    var _parentVnode = ref._parentVnode;

	    if (vm._isMounted) {
	      // clone slot nodes on re-renders
	      for (var key in vm.$slots) {
	        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
	      }
	    }

	    if (staticRenderFns && !vm._staticTrees) {
	      vm._staticTrees = [];
	    }
	    // set parent vnode. this allows render functions to have access
	    // to the data on the placeholder node.
	    vm.$vnode = _parentVnode;
	    // render self
	    var vnode;
	    try {
	      vnode = render.call(vm._renderProxy, vm.$createElement);
	    } catch (e) {
	      {
	        warn(("Error when rendering " + (formatComponentName(vm)) + ":"));
	      }
	      /* istanbul ignore else */
	      if (config.errorHandler) {
	        config.errorHandler.call(null, e, vm);
	      } else {
	        if (config._isServer) {
	          throw e
	        } else {
	          console.error(e);
	        }
	      }
	      // return previous vnode to prevent render error causing blank component
	      vnode = vm._vnode;
	    }
	    // return empty vnode in case the render function errored out
	    if (!(vnode instanceof VNode)) {
	      if ("development" !== 'production' && Array.isArray(vnode)) {
	        warn(
	          'Multiple root nodes returned from render function. Render function ' +
	          'should return a single root node.',
	          vm
	        );
	      }
	      vnode = emptyVNode();
	    }
	    // set parent
	    vnode.parent = _parentVnode;
	    return vnode
	  };

	  // shorthands used in render functions
	  Vue.prototype._h = createElement;
	  // toString for mustaches
	  Vue.prototype._s = _toString;
	  // number conversion
	  Vue.prototype._n = toNumber;
	  // empty vnode
	  Vue.prototype._e = emptyVNode;
	  // loose equal
	  Vue.prototype._q = looseEqual;
	  // loose indexOf
	  Vue.prototype._i = looseIndexOf;

	  // render static tree by index
	  Vue.prototype._m = function renderStatic (
	    index,
	    isInFor
	  ) {
	    var tree = this._staticTrees[index];
	    // if has already-rendered static tree and not inside v-for,
	    // we can reuse the same tree by doing a shallow clone.
	    if (tree && !isInFor) {
	      return Array.isArray(tree)
	        ? cloneVNodes(tree)
	        : cloneVNode(tree)
	    }
	    // otherwise, render a fresh tree.
	    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy);
	    markStatic(tree, ("__static__" + index), false);
	    return tree
	  };

	  // mark node as static (v-once)
	  Vue.prototype._o = function markOnce (
	    tree,
	    index,
	    key
	  ) {
	    markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
	    return tree
	  };

	  function markStatic (tree, key, isOnce) {
	    if (Array.isArray(tree)) {
	      for (var i = 0; i < tree.length; i++) {
	        if (tree[i] && typeof tree[i] !== 'string') {
	          markStaticNode(tree[i], (key + "_" + i), isOnce);
	        }
	      }
	    } else {
	      markStaticNode(tree, key, isOnce);
	    }
	  }

	  function markStaticNode (node, key, isOnce) {
	    node.isStatic = true;
	    node.key = key;
	    node.isOnce = isOnce;
	  }

	  // filter resolution helper
	  var identity = function (_) { return _; };
	  Vue.prototype._f = function resolveFilter (id) {
	    return resolveAsset(this.$options, 'filters', id, true) || identity
	  };

	  // render v-for
	  Vue.prototype._l = function renderList (
	    val,
	    render
	  ) {
	    var ret, i, l, keys, key;
	    if (Array.isArray(val)) {
	      ret = new Array(val.length);
	      for (i = 0, l = val.length; i < l; i++) {
	        ret[i] = render(val[i], i);
	      }
	    } else if (typeof val === 'number') {
	      ret = new Array(val);
	      for (i = 0; i < val; i++) {
	        ret[i] = render(i + 1, i);
	      }
	    } else if (isObject(val)) {
	      keys = Object.keys(val);
	      ret = new Array(keys.length);
	      for (i = 0, l = keys.length; i < l; i++) {
	        key = keys[i];
	        ret[i] = render(val[key], key, i);
	      }
	    }
	    return ret
	  };

	  // renderSlot
	  Vue.prototype._t = function (
	    name,
	    fallback
	  ) {
	    var slotNodes = this.$slots[name];
	    // warn duplicate slot usage
	    if (slotNodes && "development" !== 'production') {
	      slotNodes._rendered && warn(
	        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
	        "- this will likely cause render errors.",
	        this
	      );
	      slotNodes._rendered = true;
	    }
	    return slotNodes || fallback
	  };

	  // apply v-bind object
	  Vue.prototype._b = function bindProps (
	    data,
	    value,
	    asProp
	  ) {
	    if (value) {
	      if (!isObject(value)) {
	        "development" !== 'production' && warn(
	          'v-bind without argument expects an Object or Array value',
	          this
	        );
	      } else {
	        if (Array.isArray(value)) {
	          value = toObject(value);
	        }
	        for (var key in value) {
	          if (key === 'class' || key === 'style') {
	            data[key] = value[key];
	          } else {
	            var hash = asProp || config.mustUseProp(key)
	              ? data.domProps || (data.domProps = {})
	              : data.attrs || (data.attrs = {});
	            hash[key] = value[key];
	          }
	        }
	      }
	    }
	    return data
	  };

	  // expose v-on keyCodes
	  Vue.prototype._k = function getKeyCodes (key) {
	    return config.keyCodes[key]
	  };
	}

	function resolveSlots (
	  renderChildren,
	  context
	) {
	  var slots = {};
	  if (!renderChildren) {
	    return slots
	  }
	  var children = normalizeChildren(renderChildren) || [];
	  var defaultSlot = [];
	  var name, child;
	  for (var i = 0, l = children.length; i < l; i++) {
	    child = children[i];
	    // named slots should only be respected if the vnode was rendered in the
	    // same context.
	    if ((child.context === context || child.functionalContext === context) &&
	        child.data && (name = child.data.slot)) {
	      var slot = (slots[name] || (slots[name] = []));
	      if (child.tag === 'template') {
	        slot.push.apply(slot, child.children);
	      } else {
	        slot.push(child);
	      }
	    } else {
	      defaultSlot.push(child);
	    }
	  }
	  // ignore single whitespace
	  if (defaultSlot.length && !(
	    defaultSlot.length === 1 &&
	    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
	  )) {
	    slots.default = defaultSlot;
	  }
	  return slots
	}

	/*  */

	function initEvents (vm) {
	  vm._events = Object.create(null);
	  // init parent attached events
	  var listeners = vm.$options._parentListeners;
	  var on = bind$1(vm.$on, vm);
	  var off = bind$1(vm.$off, vm);
	  vm._updateListeners = function (listeners, oldListeners) {
	    updateListeners(listeners, oldListeners || {}, on, off, vm);
	  };
	  if (listeners) {
	    vm._updateListeners(listeners);
	  }
	}

	function eventsMixin (Vue) {
	  Vue.prototype.$on = function (event, fn) {
	    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn);
	    return vm
	  };

	  Vue.prototype.$once = function (event, fn) {
	    var vm = this;
	    function on () {
	      vm.$off(event, on);
	      fn.apply(vm, arguments);
	    }
	    on.fn = fn;
	    vm.$on(event, on);
	    return vm
	  };

	  Vue.prototype.$off = function (event, fn) {
	    var vm = this;
	    // all
	    if (!arguments.length) {
	      vm._events = Object.create(null);
	      return vm
	    }
	    // specific event
	    var cbs = vm._events[event];
	    if (!cbs) {
	      return vm
	    }
	    if (arguments.length === 1) {
	      vm._events[event] = null;
	      return vm
	    }
	    // specific handler
	    var cb;
	    var i = cbs.length;
	    while (i--) {
	      cb = cbs[i];
	      if (cb === fn || cb.fn === fn) {
	        cbs.splice(i, 1);
	        break
	      }
	    }
	    return vm
	  };

	  Vue.prototype.$emit = function (event) {
	    var vm = this;
	    var cbs = vm._events[event];
	    if (cbs) {
	      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
	      var args = toArray(arguments, 1);
	      for (var i = 0, l = cbs.length; i < l; i++) {
	        cbs[i].apply(vm, args);
	      }
	    }
	    return vm
	  };
	}

	/*  */

	var uid = 0;

	function initMixin (Vue) {
	  Vue.prototype._init = function (options) {
	    var vm = this;
	    // a uid
	    vm._uid = uid++;
	    // a flag to avoid this being observed
	    vm._isVue = true;
	    // merge options
	    if (options && options._isComponent) {
	      // optimize internal component instantiation
	      // since dynamic options merging is pretty slow, and none of the
	      // internal component options needs special treatment.
	      initInternalComponent(vm, options);
	    } else {
	      vm.$options = mergeOptions(
	        resolveConstructorOptions(vm.constructor),
	        options || {},
	        vm
	      );
	    }
	    /* istanbul ignore else */
	    {
	      initProxy(vm);
	    }
	    // expose real self
	    vm._self = vm;
	    initLifecycle(vm);
	    initEvents(vm);
	    callHook(vm, 'beforeCreate');
	    initState(vm);
	    callHook(vm, 'created');
	    initRender(vm);
	  };
	}

	function initInternalComponent (vm, options) {
	  var opts = vm.$options = Object.create(vm.constructor.options);
	  // doing this because it's faster than dynamic enumeration.
	  opts.parent = options.parent;
	  opts.propsData = options.propsData;
	  opts._parentVnode = options._parentVnode;
	  opts._parentListeners = options._parentListeners;
	  opts._renderChildren = options._renderChildren;
	  opts._componentTag = options._componentTag;
	  if (options.render) {
	    opts.render = options.render;
	    opts.staticRenderFns = options.staticRenderFns;
	  }
	}

	function resolveConstructorOptions (Ctor) {
	  var options = Ctor.options;
	  if (Ctor.super) {
	    var superOptions = Ctor.super.options;
	    var cachedSuperOptions = Ctor.superOptions;
	    var extendOptions = Ctor.extendOptions;
	    if (superOptions !== cachedSuperOptions) {
	      // super option changed
	      Ctor.superOptions = superOptions;
	      extendOptions.render = options.render;
	      extendOptions.staticRenderFns = options.staticRenderFns;
	      options = Ctor.options = mergeOptions(superOptions, extendOptions);
	      if (options.name) {
	        options.components[options.name] = Ctor;
	      }
	    }
	  }
	  return options
	}

	function Vue$2 (options) {
	  if ("development" !== 'production' &&
	    !(this instanceof Vue$2)) {
	    warn('Vue is a constructor and should be called with the `new` keyword');
	  }
	  this._init(options);
	}

	initMixin(Vue$2);
	stateMixin(Vue$2);
	eventsMixin(Vue$2);
	lifecycleMixin(Vue$2);
	renderMixin(Vue$2);

	var warn = noop;
	var formatComponentName;

	{
	  var hasConsole = typeof console !== 'undefined';

	  warn = function (msg, vm) {
	    if (hasConsole && (!config.silent)) {
	      console.error("[Vue warn]: " + msg + " " + (
	        vm ? formatLocation(formatComponentName(vm)) : ''
	      ));
	    }
	  };

	  formatComponentName = function (vm) {
	    if (vm.$root === vm) {
	      return 'root instance'
	    }
	    var name = vm._isVue
	      ? vm.$options.name || vm.$options._componentTag
	      : vm.name;
	    return (
	      (name ? ("component <" + name + ">") : "anonymous component") +
	      (vm._isVue && vm.$options.__file ? (" at " + (vm.$options.__file)) : '')
	    )
	  };

	  var formatLocation = function (str) {
	    if (str === 'anonymous component') {
	      str += " - use the \"name\" option for better debugging messages.";
	    }
	    return ("\n(found in " + str + ")")
	  };
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
	var strats = config.optionMergeStrategies;

	/**
	 * Options with restrictions
	 */
	{
	  strats.el = strats.propsData = function (parent, child, vm, key) {
	    if (!vm) {
	      warn(
	        "option \"" + key + "\" can only be used during instance " +
	        'creation with the `new` keyword.'
	      );
	    }
	    return defaultStrat(parent, child)
	  };
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
	  var key, toVal, fromVal;
	  for (key in from) {
	    toVal = to[key];
	    fromVal = from[key];
	    if (!hasOwn(to, key)) {
	      set(to, key, fromVal);
	    } else if (isObject(toVal) && isObject(fromVal)) {
	      mergeData(toVal, fromVal);
	    }
	  }
	  return to
	}

	/**
	 * Data
	 */
	strats.data = function (
	  parentVal,
	  childVal,
	  vm
	) {
	  if (!vm) {
	    // in a Vue.extend merge, both should be functions
	    if (!childVal) {
	      return parentVal
	    }
	    if (typeof childVal !== 'function') {
	      "development" !== 'production' && warn(
	        'The "data" option should be a function ' +
	        'that returns a per-instance value in component ' +
	        'definitions.',
	        vm
	      );
	      return parentVal
	    }
	    if (!parentVal) {
	      return childVal
	    }
	    // when parentVal & childVal are both present,
	    // we need to return a function that returns the
	    // merged result of both functions... no need to
	    // check if parentVal is a function here because
	    // it has to be a function to pass previous merges.
	    return function mergedDataFn () {
	      return mergeData(
	        childVal.call(this),
	        parentVal.call(this)
	      )
	    }
	  } else if (parentVal || childVal) {
	    return function mergedInstanceDataFn () {
	      // instance merge
	      var instanceData = typeof childVal === 'function'
	        ? childVal.call(vm)
	        : childVal;
	      var defaultData = typeof parentVal === 'function'
	        ? parentVal.call(vm)
	        : undefined;
	      if (instanceData) {
	        return mergeData(instanceData, defaultData)
	      } else {
	        return defaultData
	      }
	    }
	  }
	};

	/**
	 * Hooks and param attributes are merged as arrays.
	 */
	function mergeHook (
	  parentVal,
	  childVal
	) {
	  return childVal
	    ? parentVal
	      ? parentVal.concat(childVal)
	      : Array.isArray(childVal)
	        ? childVal
	        : [childVal]
	    : parentVal
	}

	config._lifecycleHooks.forEach(function (hook) {
	  strats[hook] = mergeHook;
	});

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (parentVal, childVal) {
	  var res = Object.create(parentVal || null);
	  return childVal
	    ? extend(res, childVal)
	    : res
	}

	config._assetTypes.forEach(function (type) {
	  strats[type + 's'] = mergeAssets;
	});

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (parentVal, childVal) {
	  /* istanbul ignore if */
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = {};
	  extend(ret, parentVal);
	  for (var key in childVal) {
	    var parent = ret[key];
	    var child = childVal[key];
	    if (parent && !Array.isArray(parent)) {
	      parent = [parent];
	    }
	    ret[key] = parent
	      ? parent.concat(child)
	      : [child];
	  }
	  return ret
	};

	/**
	 * Other object hashes.
	 */
	strats.props =
	strats.methods =
	strats.computed = function (parentVal, childVal) {
	  if (!childVal) { return parentVal }
	  if (!parentVal) { return childVal }
	  var ret = Object.create(null);
	  extend(ret, parentVal);
	  extend(ret, childVal);
	  return ret
	};

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
	  return childVal === undefined
	    ? parentVal
	    : childVal
	};

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
	  for (var key in options.components) {
	    var lower = key.toLowerCase();
	    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
	      warn(
	        'Do not use built-in or reserved HTML elements as component ' +
	        'id: ' + key
	      );
	    }
	  }
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options) {
	  var props = options.props;
	  if (!props) { return }
	  var res = {};
	  var i, val, name;
	  if (Array.isArray(props)) {
	    i = props.length;
	    while (i--) {
	      val = props[i];
	      if (typeof val === 'string') {
	        name = camelize(val);
	        res[name] = { type: null };
	      } else {
	        warn('props must be strings when using array syntax.');
	      }
	    }
	  } else if (isPlainObject(props)) {
	    for (var key in props) {
	      val = props[key];
	      name = camelize(key);
	      res[name] = isPlainObject(val)
	        ? val
	        : { type: val };
	    }
	  }
	  options.props = res;
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
	  var dirs = options.directives;
	  if (dirs) {
	    for (var key in dirs) {
	      var def = dirs[key];
	      if (typeof def === 'function') {
	        dirs[key] = { bind: def, update: def };
	      }
	    }
	  }
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
	  parent,
	  child,
	  vm
	) {
	  {
	    checkComponents(child);
	  }
	  normalizeProps(child);
	  normalizeDirectives(child);
	  var extendsFrom = child.extends;
	  if (extendsFrom) {
	    parent = typeof extendsFrom === 'function'
	      ? mergeOptions(parent, extendsFrom.options, vm)
	      : mergeOptions(parent, extendsFrom, vm);
	  }
	  if (child.mixins) {
	    for (var i = 0, l = child.mixins.length; i < l; i++) {
	      var mixin = child.mixins[i];
	      if (mixin.prototype instanceof Vue$2) {
	        mixin = mixin.options;
	      }
	      parent = mergeOptions(parent, mixin, vm);
	    }
	  }
	  var options = {};
	  var key;
	  for (key in parent) {
	    mergeField(key);
	  }
	  for (key in child) {
	    if (!hasOwn(parent, key)) {
	      mergeField(key);
	    }
	  }
	  function mergeField (key) {
	    var strat = strats[key] || defaultStrat;
	    options[key] = strat(parent[key], child[key], vm, key);
	  }
	  return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
	  options,
	  type,
	  id,
	  warnMissing
	) {
	  /* istanbul ignore if */
	  if (typeof id !== 'string') {
	    return
	  }
	  var assets = options[type];
	  var res = assets[id] ||
	    // camelCase ID
	    assets[camelize(id)] ||
	    // Pascal Case ID
	    assets[capitalize(camelize(id))];
	  if ("development" !== 'production' && warnMissing && !res) {
	    warn(
	      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
	      options
	    );
	  }
	  return res
	}

	/*  */

	function validateProp (
	  key,
	  propOptions,
	  propsData,
	  vm
	) {
	  var prop = propOptions[key];
	  var absent = !hasOwn(propsData, key);
	  var value = propsData[key];
	  // handle boolean props
	  if (isBooleanType(prop.type)) {
	    if (absent && !hasOwn(prop, 'default')) {
	      value = false;
	    } else if (value === '' || value === hyphenate(key)) {
	      value = true;
	    }
	  }
	  // check default value
	  if (value === undefined) {
	    value = getPropDefaultValue(vm, prop, key);
	    // since the default value is a fresh copy,
	    // make sure to observe it.
	    var prevShouldConvert = observerState.shouldConvert;
	    observerState.shouldConvert = true;
	    observe(value);
	    observerState.shouldConvert = prevShouldConvert;
	  }
	  {
	    assertProp(prop, key, value, vm, absent);
	  }
	  return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
	  // no default, return undefined
	  if (!hasOwn(prop, 'default')) {
	    return undefined
	  }
	  var def = prop.default;
	  // warn against non-factory defaults for Object & Array
	  if (isObject(def)) {
	    "development" !== 'production' && warn(
	      'Invalid default value for prop "' + key + '": ' +
	      'Props with type Object/Array must use a factory function ' +
	      'to return the default value.',
	      vm
	    );
	  }
	  // the raw prop value was also undefined from previous render,
	  // return previous default value to avoid unnecessary watcher trigger
	  if (vm && vm.$options.propsData &&
	    vm.$options.propsData[key] === undefined &&
	    vm[key] !== undefined) {
	    return vm[key]
	  }
	  // call factory function for non-Function types
	  return typeof def === 'function' && prop.type !== Function
	    ? def.call(vm)
	    : def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
	  prop,
	  name,
	  value,
	  vm,
	  absent
	) {
	  if (prop.required && absent) {
	    warn(
	      'Missing required prop: "' + name + '"',
	      vm
	    );
	    return
	  }
	  if (value == null && !prop.required) {
	    return
	  }
	  var type = prop.type;
	  var valid = !type || type === true;
	  var expectedTypes = [];
	  if (type) {
	    if (!Array.isArray(type)) {
	      type = [type];
	    }
	    for (var i = 0; i < type.length && !valid; i++) {
	      var assertedType = assertType(value, type[i]);
	      expectedTypes.push(assertedType.expectedType);
	      valid = assertedType.valid;
	    }
	  }
	  if (!valid) {
	    warn(
	      'Invalid prop: type check failed for prop "' + name + '".' +
	      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
	      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
	      vm
	    );
	    return
	  }
	  var validator = prop.validator;
	  if (validator) {
	    if (!validator(value)) {
	      warn(
	        'Invalid prop: custom validator check failed for prop "' + name + '".',
	        vm
	      );
	    }
	  }
	}

	/**
	 * Assert the type of a value
	 */
	function assertType (value, type) {
	  var valid;
	  var expectedType = getType(type);
	  if (expectedType === 'String') {
	    valid = typeof value === (expectedType = 'string');
	  } else if (expectedType === 'Number') {
	    valid = typeof value === (expectedType = 'number');
	  } else if (expectedType === 'Boolean') {
	    valid = typeof value === (expectedType = 'boolean');
	  } else if (expectedType === 'Function') {
	    valid = typeof value === (expectedType = 'function');
	  } else if (expectedType === 'Object') {
	    valid = isPlainObject(value);
	  } else if (expectedType === 'Array') {
	    valid = Array.isArray(value);
	  } else {
	    valid = value instanceof type;
	  }
	  return {
	    valid: valid,
	    expectedType: expectedType
	  }
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
	  var match = fn && fn.toString().match(/^\s*function (\w+)/);
	  return match && match[1]
	}

	function isBooleanType (fn) {
	  if (!Array.isArray(fn)) {
	    return getType(fn) === 'Boolean'
	  }
	  for (var i = 0, len = fn.length; i < len; i++) {
	    if (getType(fn[i]) === 'Boolean') {
	      return true
	    }
	  }
	  /* istanbul ignore next */
	  return false
	}



	var util = Object.freeze({
		defineReactive: defineReactive$$1,
		_toString: _toString,
		toNumber: toNumber,
		makeMap: makeMap,
		isBuiltInTag: isBuiltInTag,
		remove: remove$1,
		hasOwn: hasOwn,
		isPrimitive: isPrimitive,
		cached: cached,
		camelize: camelize,
		capitalize: capitalize,
		hyphenate: hyphenate,
		bind: bind$1,
		toArray: toArray,
		extend: extend,
		isObject: isObject,
		isPlainObject: isPlainObject,
		toObject: toObject,
		noop: noop,
		no: no,
		genStaticKeys: genStaticKeys,
		looseEqual: looseEqual,
		looseIndexOf: looseIndexOf,
		isReserved: isReserved,
		def: def,
		parsePath: parsePath,
		hasProto: hasProto,
		inBrowser: inBrowser,
		UA: UA,
		isIE: isIE,
		isIE9: isIE9,
		isEdge: isEdge,
		isAndroid: isAndroid,
		isIOS: isIOS,
		devtools: devtools,
		nextTick: nextTick,
		get _Set () { return _Set; },
		mergeOptions: mergeOptions,
		resolveAsset: resolveAsset,
		get warn () { return warn; },
		get formatComponentName () { return formatComponentName; },
		validateProp: validateProp
	});

	/*  */

	function initUse (Vue) {
	  Vue.use = function (plugin) {
	    /* istanbul ignore if */
	    if (plugin.installed) {
	      return
	    }
	    // additional parameters
	    var args = toArray(arguments, 1);
	    args.unshift(this);
	    if (typeof plugin.install === 'function') {
	      plugin.install.apply(plugin, args);
	    } else {
	      plugin.apply(null, args);
	    }
	    plugin.installed = true;
	    return this
	  };
	}

	/*  */

	function initMixin$1 (Vue) {
	  Vue.mixin = function (mixin) {
	    Vue.options = mergeOptions(Vue.options, mixin);
	  };
	}

	/*  */

	function initExtend (Vue) {
	  /**
	   * Each instance constructor, including Vue, has a unique
	   * cid. This enables us to create wrapped "child
	   * constructors" for prototypal inheritance and cache them.
	   */
	  Vue.cid = 0;
	  var cid = 1;

	  /**
	   * Class inheritance
	   */
	  Vue.extend = function (extendOptions) {
	    extendOptions = extendOptions || {};
	    var Super = this;
	    var isFirstExtend = Super.cid === 0;
	    if (isFirstExtend && extendOptions._Ctor) {
	      return extendOptions._Ctor
	    }
	    var name = extendOptions.name || Super.options.name;
	    {
	      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
	        warn(
	          'Invalid component name: "' + name + '". Component names ' +
	          'can only contain alphanumeric characaters and the hyphen.'
	        );
	      }
	    }
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
	    Sub.prototype.constructor = Sub;
	    Sub.cid = cid++;
	    Sub.options = mergeOptions(
	      Super.options,
	      extendOptions
	    );
	    Sub['super'] = Super;
	    // allow further extension
	    Sub.extend = Super.extend;
	    // create asset registers, so extended classes
	    // can have their private assets too.
	    config._assetTypes.forEach(function (type) {
	      Sub[type] = Super[type];
	    });
	    // enable recursive self-lookup
	    if (name) {
	      Sub.options.components[name] = Sub;
	    }
	    // keep a reference to the super options at extension time.
	    // later at instantiation we can check if Super's options have
	    // been updated.
	    Sub.superOptions = Super.options;
	    Sub.extendOptions = extendOptions;
	    // cache constructor
	    if (isFirstExtend) {
	      extendOptions._Ctor = Sub;
	    }
	    return Sub
	  };
	}

	/*  */

	function initAssetRegisters (Vue) {
	  /**
	   * Create asset registration methods.
	   */
	  config._assetTypes.forEach(function (type) {
	    Vue[type] = function (
	      id,
	      definition
	    ) {
	      if (!definition) {
	        return this.options[type + 's'][id]
	      } else {
	        /* istanbul ignore if */
	        {
	          if (type === 'component' && config.isReservedTag(id)) {
	            warn(
	              'Do not use built-in or reserved HTML elements as component ' +
	              'id: ' + id
	            );
	          }
	        }
	        if (type === 'component' && isPlainObject(definition)) {
	          definition.name = definition.name || id;
	          definition = Vue.extend(definition);
	        }
	        if (type === 'directive' && typeof definition === 'function') {
	          definition = { bind: definition, update: definition };
	        }
	        this.options[type + 's'][id] = definition;
	        return definition
	      }
	    };
	  });
	}

	var KeepAlive = {
	  name: 'keep-alive',
	  abstract: true,
	  created: function created () {
	    this.cache = Object.create(null);
	  },
	  render: function render () {
	    var vnode = getFirstComponentChild(this.$slots.default);
	    if (vnode && vnode.componentOptions) {
	      var opts = vnode.componentOptions;
	      var key = vnode.key == null
	        // same constructor may get registered as different local components
	        // so cid alone is not enough (#3269)
	        ? opts.Ctor.cid + '::' + opts.tag
	        : vnode.key;
	      if (this.cache[key]) {
	        vnode.child = this.cache[key].child;
	      } else {
	        this.cache[key] = vnode;
	      }
	      vnode.data.keepAlive = true;
	    }
	    return vnode
	  },
	  destroyed: function destroyed () {
	    var this$1 = this;

	    for (var key in this.cache) {
	      var vnode = this$1.cache[key];
	      callHook(vnode.child, 'deactivated');
	      vnode.child.$destroy();
	    }
	  }
	};

	var builtInComponents = {
	  KeepAlive: KeepAlive
	};

	/*  */

	function initGlobalAPI (Vue) {
	  // config
	  var configDef = {};
	  configDef.get = function () { return config; };
	  {
	    configDef.set = function () {
	      warn(
	        'Do not replace the Vue.config object, set individual fields instead.'
	      );
	    };
	  }
	  Object.defineProperty(Vue, 'config', configDef);
	  Vue.util = util;
	  Vue.set = set;
	  Vue.delete = del;
	  Vue.nextTick = nextTick;

	  Vue.options = Object.create(null);
	  config._assetTypes.forEach(function (type) {
	    Vue.options[type + 's'] = Object.create(null);
	  });

	  extend(Vue.options.components, builtInComponents);

	  initUse(Vue);
	  initMixin$1(Vue);
	  initExtend(Vue);
	  initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue$2);

	Object.defineProperty(Vue$2.prototype, '$isServer', {
	  get: function () { return config._isServer; }
	});

	Vue$2.version = '2.0.5';

	/*  */

	// attributes that should be using props for binding
	var mustUseProp = makeMap('value,selected,checked,muted');

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
	  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
	  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
	  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
	  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
	  'required,reversed,scoped,seamless,selected,sortable,translate,' +
	  'truespeed,typemustmatch,visible'
	);

	var isAttr = makeMap(
	  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
	  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
	  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
	  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
	  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
	  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
	  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
	  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
	  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
	  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
	  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
	  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
	  'target,title,type,usemap,value,width,wrap'
	);



	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
	  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
	  return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
	  return val == null || val === false
	};

	/*  */

	function genClassForVnode (vnode) {
	  var data = vnode.data;
	  var parentNode = vnode;
	  var childNode = vnode;
	  while (childNode.child) {
	    childNode = childNode.child._vnode;
	    if (childNode.data) {
	      data = mergeClassData(childNode.data, data);
	    }
	  }
	  while ((parentNode = parentNode.parent)) {
	    if (parentNode.data) {
	      data = mergeClassData(data, parentNode.data);
	    }
	  }
	  return genClassFromData(data)
	}

	function mergeClassData (child, parent) {
	  return {
	    staticClass: concat(child.staticClass, parent.staticClass),
	    class: child.class
	      ? [child.class, parent.class]
	      : parent.class
	  }
	}

	function genClassFromData (data) {
	  var dynamicClass = data.class;
	  var staticClass = data.staticClass;
	  if (staticClass || dynamicClass) {
	    return concat(staticClass, stringifyClass(dynamicClass))
	  }
	  /* istanbul ignore next */
	  return ''
	}

	function concat (a, b) {
	  return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
	  var res = '';
	  if (!value) {
	    return res
	  }
	  if (typeof value === 'string') {
	    return value
	  }
	  if (Array.isArray(value)) {
	    var stringified;
	    for (var i = 0, l = value.length; i < l; i++) {
	      if (value[i]) {
	        if ((stringified = stringifyClass(value[i]))) {
	          res += stringified + ' ';
	        }
	      }
	    }
	    return res.slice(0, -1)
	  }
	  if (isObject(value)) {
	    for (var key in value) {
	      if (value[key]) { res += key + ' '; }
	    }
	    return res.slice(0, -1)
	  }
	  /* istanbul ignore next */
	  return res
	}

	/*  */

	var namespaceMap = {
	  svg: 'http://www.w3.org/2000/svg',
	  math: 'http://www.w3.org/1998/Math/MathML',
	  xhtml: 'http://www.w3.org/1999/xhtm'
	};

	var isHTMLTag = makeMap(
	  'html,body,base,head,link,meta,style,title,' +
	  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
	  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
	  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
	  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
	  'embed,object,param,source,canvas,script,noscript,del,ins,' +
	  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
	  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
	  'output,progress,select,textarea,' +
	  'details,dialog,menu,menuitem,summary,' +
	  'content,element,shadow,template'
	);

	var isUnaryTag = makeMap(
	  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
	  'link,meta,param,source,track,wbr',
	  true
	);

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
	  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
	  true
	);

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
	  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
	  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
	  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
	  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
	  'title,tr,track',
	  true
	);

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
	  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
	  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
	  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
	  true
	);

	var isPreTag = function (tag) { return tag === 'pre'; };

	var isReservedTag = function (tag) {
	  return isHTMLTag(tag) || isSVG(tag)
	};

	function getTagNamespace (tag) {
	  if (isSVG(tag)) {
	    return 'svg'
	  }
	  // basic support for MathML
	  // note it doesn't support other MathML elements being component roots
	  if (tag === 'math') {
	    return 'math'
	  }
	}

	var unknownElementCache = Object.create(null);
	function isUnknownElement (tag) {
	  /* istanbul ignore if */
	  if (!inBrowser) {
	    return true
	  }
	  if (isReservedTag(tag)) {
	    return false
	  }
	  tag = tag.toLowerCase();
	  /* istanbul ignore if */
	  if (unknownElementCache[tag] != null) {
	    return unknownElementCache[tag]
	  }
	  var el = document.createElement(tag);
	  if (tag.indexOf('-') > -1) {
	    // http://stackoverflow.com/a/28210364/1070244
	    return (unknownElementCache[tag] = (
	      el.constructor === window.HTMLUnknownElement ||
	      el.constructor === window.HTMLElement
	    ))
	  } else {
	    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
	  }
	}

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
	  if (typeof el === 'string') {
	    var selector = el;
	    el = document.querySelector(el);
	    if (!el) {
	      "development" !== 'production' && warn(
	        'Cannot find element: ' + selector
	      );
	      return document.createElement('div')
	    }
	  }
	  return el
	}

	/*  */

	function createElement$1 (tagName, vnode) {
	  var elm = document.createElement(tagName);
	  if (tagName !== 'select') {
	    return elm
	  }
	  if (vnode.data && vnode.data.attrs && 'multiple' in vnode.data.attrs) {
	    elm.setAttribute('multiple', 'multiple');
	  }
	  return elm
	}

	function createElementNS (namespace, tagName) {
	  return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
	  return document.createTextNode(text)
	}

	function createComment (text) {
	  return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
	  parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
	  node.removeChild(child);
	}

	function appendChild (node, child) {
	  node.appendChild(child);
	}

	function parentNode (node) {
	  return node.parentNode
	}

	function nextSibling (node) {
	  return node.nextSibling
	}

	function tagName (node) {
	  return node.tagName
	}

	function setTextContent (node, text) {
	  node.textContent = text;
	}

	function childNodes (node) {
	  return node.childNodes
	}

	function setAttribute (node, key, val) {
	  node.setAttribute(key, val);
	}


	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		childNodes: childNodes,
		setAttribute: setAttribute
	});

	/*  */

	var ref = {
	  create: function create (_, vnode) {
	    registerRef(vnode);
	  },
	  update: function update (oldVnode, vnode) {
	    if (oldVnode.data.ref !== vnode.data.ref) {
	      registerRef(oldVnode, true);
	      registerRef(vnode);
	    }
	  },
	  destroy: function destroy (vnode) {
	    registerRef(vnode, true);
	  }
	};

	function registerRef (vnode, isRemoval) {
	  var key = vnode.data.ref;
	  if (!key) { return }

	  var vm = vnode.context;
	  var ref = vnode.child || vnode.elm;
	  var refs = vm.$refs;
	  if (isRemoval) {
	    if (Array.isArray(refs[key])) {
	      remove$1(refs[key], ref);
	    } else if (refs[key] === ref) {
	      refs[key] = undefined;
	    }
	  } else {
	    if (vnode.data.refInFor) {
	      if (Array.isArray(refs[key])) {
	        refs[key].push(ref);
	      } else {
	        refs[key] = [ref];
	      }
	    } else {
	      refs[key] = ref;
	    }
	  }
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *

	/*
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

	var emptyNode = new VNode('', {}, []);

	var hooks$1 = ['create', 'update', 'remove', 'destroy'];

	function isUndef (s) {
	  return s == null
	}

	function isDef (s) {
	  return s != null
	}

	function sameVnode (vnode1, vnode2) {
	  return (
	    vnode1.key === vnode2.key &&
	    vnode1.tag === vnode2.tag &&
	    vnode1.isComment === vnode2.isComment &&
	    !vnode1.data === !vnode2.data
	  )
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
	  var i, key;
	  var map = {};
	  for (i = beginIdx; i <= endIdx; ++i) {
	    key = children[i].key;
	    if (isDef(key)) { map[key] = i; }
	  }
	  return map
	}

	function createPatchFunction (backend) {
	  var i, j;
	  var cbs = {};

	  var modules = backend.modules;
	  var nodeOps = backend.nodeOps;

	  for (i = 0; i < hooks$1.length; ++i) {
	    cbs[hooks$1[i]] = [];
	    for (j = 0; j < modules.length; ++j) {
	      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]); }
	    }
	  }

	  function emptyNodeAt (elm) {
	    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
	  }

	  function createRmCb (childElm, listeners) {
	    function remove$$1 () {
	      if (--remove$$1.listeners === 0) {
	        removeElement(childElm);
	      }
	    }
	    remove$$1.listeners = listeners;
	    return remove$$1
	  }

	  function removeElement (el) {
	    var parent = nodeOps.parentNode(el);
	    // element may have already been removed due to v-html
	    if (parent) {
	      nodeOps.removeChild(parent, el);
	    }
	  }

	  function createElm (vnode, insertedVnodeQueue, nested) {
	    var i;
	    var data = vnode.data;
	    vnode.isRootInsert = !nested;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode); }
	      // after calling the init hook, if the vnode is a child component
	      // it should've created a child instance and mounted it. the child
	      // component also has set the placeholder vnode's elm.
	      // in that case we can just return the element and be done.
	      if (isDef(i = vnode.child)) {
	        initComponent(vnode, insertedVnodeQueue);
	        return vnode.elm
	      }
	    }
	    var children = vnode.children;
	    var tag = vnode.tag;
	    if (isDef(tag)) {
	      {
	        if (
	          !vnode.ns &&
	          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
	          config.isUnknownElement(tag)
	        ) {
	          warn(
	            'Unknown custom element: <' + tag + '> - did you ' +
	            'register the component correctly? For recursive components, ' +
	            'make sure to provide the "name" option.',
	            vnode.context
	          );
	        }
	      }
	      vnode.elm = vnode.ns
	        ? nodeOps.createElementNS(vnode.ns, tag)
	        : nodeOps.createElement(tag, vnode);
	      setScope(vnode);
	      createChildren(vnode, children, insertedVnodeQueue);
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    } else if (vnode.isComment) {
	      vnode.elm = nodeOps.createComment(vnode.text);
	    } else {
	      vnode.elm = nodeOps.createTextNode(vnode.text);
	    }
	    return vnode.elm
	  }

	  function createChildren (vnode, children, insertedVnodeQueue) {
	    if (Array.isArray(children)) {
	      for (var i = 0; i < children.length; ++i) {
	        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true));
	      }
	    } else if (isPrimitive(vnode.text)) {
	      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
	    }
	  }

	  function isPatchable (vnode) {
	    while (vnode.child) {
	      vnode = vnode.child._vnode;
	    }
	    return isDef(vnode.tag)
	  }

	  function invokeCreateHooks (vnode, insertedVnodeQueue) {
	    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
	      cbs.create[i$1](emptyNode, vnode);
	    }
	    i = vnode.data.hook; // Reuse variable
	    if (isDef(i)) {
	      if (i.create) { i.create(emptyNode, vnode); }
	      if (i.insert) { insertedVnodeQueue.push(vnode); }
	    }
	  }

	  function initComponent (vnode, insertedVnodeQueue) {
	    if (vnode.data.pendingInsert) {
	      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
	    }
	    vnode.elm = vnode.child.$el;
	    if (isPatchable(vnode)) {
	      invokeCreateHooks(vnode, insertedVnodeQueue);
	      setScope(vnode);
	    } else {
	      // empty component root.
	      // skip all element-related modules except for ref (#3455)
	      registerRef(vnode);
	      // make sure to invoke the insert hook
	      insertedVnodeQueue.push(vnode);
	    }
	  }

	  // set scope id attribute for scoped CSS.
	  // this is implemented as a special case to avoid the overhead
	  // of going through the normal attribute patching process.
	  function setScope (vnode) {
	    var i;
	    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	    if (isDef(i = activeInstance) &&
	        i !== vnode.context &&
	        isDef(i = i.$options._scopeId)) {
	      nodeOps.setAttribute(vnode.elm, i, '');
	    }
	  }

	  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before);
	    }
	  }

	  function invokeDestroyHook (vnode) {
	    var i, j;
	    var data = vnode.data;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
	      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
	    }
	    if (isDef(i = vnode.children)) {
	      for (j = 0; j < vnode.children.length; ++j) {
	        invokeDestroyHook(vnode.children[j]);
	      }
	    }
	  }

	  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
	    for (; startIdx <= endIdx; ++startIdx) {
	      var ch = vnodes[startIdx];
	      if (isDef(ch)) {
	        if (isDef(ch.tag)) {
	          removeAndInvokeRemoveHook(ch);
	          invokeDestroyHook(ch);
	        } else { // Text node
	          nodeOps.removeChild(parentElm, ch.elm);
	        }
	      }
	    }
	  }

	  function removeAndInvokeRemoveHook (vnode, rm) {
	    if (rm || isDef(vnode.data)) {
	      var listeners = cbs.remove.length + 1;
	      if (!rm) {
	        // directly removing
	        rm = createRmCb(vnode.elm, listeners);
	      } else {
	        // we have a recursively passed down rm callback
	        // increase the listeners count
	        rm.listeners += listeners;
	      }
	      // recursively invoke hooks on child component root node
	      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
	        removeAndInvokeRemoveHook(i, rm);
	      }
	      for (i = 0; i < cbs.remove.length; ++i) {
	        cbs.remove[i](vnode, rm);
	      }
	      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
	        i(vnode, rm);
	      } else {
	        rm();
	      }
	    } else {
	      removeElement(vnode.elm);
	    }
	  }

	  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
	    var oldStartIdx = 0;
	    var newStartIdx = 0;
	    var oldEndIdx = oldCh.length - 1;
	    var oldStartVnode = oldCh[0];
	    var oldEndVnode = oldCh[oldEndIdx];
	    var newEndIdx = newCh.length - 1;
	    var newStartVnode = newCh[0];
	    var newEndVnode = newCh[newEndIdx];
	    var oldKeyToIdx, idxInOld, elmToMove, before;

	    // removeOnly is a special flag used only by <transition-group>
	    // to ensure removed elements stay in correct relative positions
	    // during leaving transitions
	    var canMove = !removeOnly;

	    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
	      if (isUndef(oldStartVnode)) {
	        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
	      } else if (isUndef(oldEndVnode)) {
	        oldEndVnode = oldCh[--oldEndIdx];
	      } else if (sameVnode(oldStartVnode, newStartVnode)) {
	        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
	        oldStartVnode = oldCh[++oldStartIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else if (sameVnode(oldEndVnode, newEndVnode)) {
	        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
	        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
	        oldStartVnode = oldCh[++oldStartIdx];
	        newEndVnode = newCh[--newEndIdx];
	      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
	        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
	        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
	        oldEndVnode = oldCh[--oldEndIdx];
	        newStartVnode = newCh[++newStartIdx];
	      } else {
	        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
	        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
	        if (isUndef(idxInOld)) { // New element
	          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	          newStartVnode = newCh[++newStartIdx];
	        } else {
	          elmToMove = oldCh[idxInOld];
	          /* istanbul ignore if */
	          if ("development" !== 'production' && !elmToMove) {
	            warn(
	              'It seems there are duplicate keys that is causing an update error. ' +
	              'Make sure each v-for item has a unique key.'
	            );
	          }
	          if (elmToMove.tag !== newStartVnode.tag) {
	            // same key but different element. treat as new element
	            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          } else {
	            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
	            oldCh[idxInOld] = undefined;
	            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
	            newStartVnode = newCh[++newStartIdx];
	          }
	        }
	      }
	    }
	    if (oldStartIdx > oldEndIdx) {
	      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
	      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
	    } else if (newStartIdx > newEndIdx) {
	      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
	    }
	  }

	  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
	    if (oldVnode === vnode) {
	      return
	    }
	    // reuse element for static trees.
	    // note we only do this if the vnode is cloned -
	    // if the new node is not cloned it means the render functions have been
	    // reset by the hot-reload-api and we need to do a proper re-render.
	    if (vnode.isStatic &&
	        oldVnode.isStatic &&
	        vnode.key === oldVnode.key &&
	        (vnode.isCloned || vnode.isOnce)) {
	      vnode.elm = oldVnode.elm;
	      return
	    }
	    var i;
	    var data = vnode.data;
	    var hasData = isDef(data);
	    if (hasData && isDef(i = data.hook) && isDef(i = i.prepatch)) {
	      i(oldVnode, vnode);
	    }
	    var elm = vnode.elm = oldVnode.elm;
	    var oldCh = oldVnode.children;
	    var ch = vnode.children;
	    if (hasData && isPatchable(vnode)) {
	      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
	      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
	    }
	    if (isUndef(vnode.text)) {
	      if (isDef(oldCh) && isDef(ch)) {
	        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
	      } else if (isDef(ch)) {
	        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
	        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
	      } else if (isDef(oldCh)) {
	        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
	      } else if (isDef(oldVnode.text)) {
	        nodeOps.setTextContent(elm, '');
	      }
	    } else if (oldVnode.text !== vnode.text) {
	      nodeOps.setTextContent(elm, vnode.text);
	    }
	    if (hasData) {
	      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
	    }
	  }

	  function invokeInsertHook (vnode, queue, initial) {
	    // delay insert hooks for component root nodes, invoke them after the
	    // element is really inserted
	    if (initial && vnode.parent) {
	      vnode.parent.data.pendingInsert = queue;
	    } else {
	      for (var i = 0; i < queue.length; ++i) {
	        queue[i].data.hook.insert(queue[i]);
	      }
	    }
	  }

	  var bailed = false;
	  function hydrate (elm, vnode, insertedVnodeQueue) {
	    {
	      if (!assertNodeMatch(elm, vnode)) {
	        return false
	      }
	    }
	    vnode.elm = elm;
	    var tag = vnode.tag;
	    var data = vnode.data;
	    var children = vnode.children;
	    if (isDef(data)) {
	      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
	      if (isDef(i = vnode.child)) {
	        // child component. it should have hydrated its own tree.
	        initComponent(vnode, insertedVnodeQueue);
	        return true
	      }
	    }
	    if (isDef(tag)) {
	      if (isDef(children)) {
	        var childNodes = nodeOps.childNodes(elm);
	        // empty element, allow client to pick up and populate children
	        if (!childNodes.length) {
	          createChildren(vnode, children, insertedVnodeQueue);
	        } else {
	          var childrenMatch = true;
	          if (childNodes.length !== children.length) {
	            childrenMatch = false;
	          } else {
	            for (var i$1 = 0; i$1 < children.length; i$1++) {
	              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
	                childrenMatch = false;
	                break
	              }
	            }
	          }
	          if (!childrenMatch) {
	            if ("development" !== 'production' &&
	                typeof console !== 'undefined' &&
	                !bailed) {
	              bailed = true;
	              console.warn('Parent: ', elm);
	              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children);
	            }
	            return false
	          }
	        }
	      }
	      if (isDef(data)) {
	        invokeCreateHooks(vnode, insertedVnodeQueue);
	      }
	    }
	    return true
	  }

	  function assertNodeMatch (node, vnode) {
	    if (vnode.tag) {
	      return (
	        vnode.tag.indexOf('vue-component') === 0 ||
	        vnode.tag === nodeOps.tagName(node).toLowerCase()
	      )
	    } else {
	      return _toString(vnode.text) === node.data
	    }
	  }

	  return function patch (oldVnode, vnode, hydrating, removeOnly) {
	    if (!vnode) {
	      if (oldVnode) { invokeDestroyHook(oldVnode); }
	      return
	    }

	    var elm, parent;
	    var isInitialPatch = false;
	    var insertedVnodeQueue = [];

	    if (!oldVnode) {
	      // empty mount, create new root element
	      isInitialPatch = true;
	      createElm(vnode, insertedVnodeQueue);
	    } else {
	      var isRealElement = isDef(oldVnode.nodeType);
	      if (!isRealElement && sameVnode(oldVnode, vnode)) {
	        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
	      } else {
	        if (isRealElement) {
	          // mounting to a real element
	          // check if this is server-rendered content and if we can perform
	          // a successful hydration.
	          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
	            oldVnode.removeAttribute('server-rendered');
	            hydrating = true;
	          }
	          if (hydrating) {
	            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
	              invokeInsertHook(vnode, insertedVnodeQueue, true);
	              return oldVnode
	            } else {
	              warn(
	                'The client-side rendered virtual DOM tree is not matching ' +
	                'server-rendered content. This is likely caused by incorrect ' +
	                'HTML markup, for example nesting block-level elements inside ' +
	                '<p>, or missing <tbody>. Bailing hydration and performing ' +
	                'full client-side render.'
	              );
	            }
	          }
	          // either not server-rendered, or hydration failed.
	          // create an empty node and replace it
	          oldVnode = emptyNodeAt(oldVnode);
	        }
	        elm = oldVnode.elm;
	        parent = nodeOps.parentNode(elm);

	        createElm(vnode, insertedVnodeQueue);

	        // component root element replaced.
	        // update parent placeholder node element.
	        if (vnode.parent) {
	          vnode.parent.elm = vnode.elm;
	          if (isPatchable(vnode)) {
	            for (var i = 0; i < cbs.create.length; ++i) {
	              cbs.create[i](emptyNode, vnode.parent);
	            }
	          }
	        }

	        if (parent !== null) {
	          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm));
	          removeVnodes(parent, [oldVnode], 0, 0);
	        } else if (isDef(oldVnode.tag)) {
	          invokeDestroyHook(oldVnode);
	        }
	      }
	    }

	    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
	    return vnode.elm
	  }
	}

	/*  */

	var directives = {
	  create: updateDirectives,
	  update: updateDirectives,
	  destroy: function unbindDirectives (vnode) {
	    updateDirectives(vnode, emptyNode);
	  }
	};

	function updateDirectives (
	  oldVnode,
	  vnode
	) {
	  if (!oldVnode.data.directives && !vnode.data.directives) {
	    return
	  }
	  var isCreate = oldVnode === emptyNode;
	  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
	  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

	  var dirsWithInsert = [];
	  var dirsWithPostpatch = [];

	  var key, oldDir, dir;
	  for (key in newDirs) {
	    oldDir = oldDirs[key];
	    dir = newDirs[key];
	    if (!oldDir) {
	      // new directive, bind
	      callHook$1(dir, 'bind', vnode, oldVnode);
	      if (dir.def && dir.def.inserted) {
	        dirsWithInsert.push(dir);
	      }
	    } else {
	      // existing directive, update
	      dir.oldValue = oldDir.value;
	      callHook$1(dir, 'update', vnode, oldVnode);
	      if (dir.def && dir.def.componentUpdated) {
	        dirsWithPostpatch.push(dir);
	      }
	    }
	  }

	  if (dirsWithInsert.length) {
	    var callInsert = function () {
	      dirsWithInsert.forEach(function (dir) {
	        callHook$1(dir, 'inserted', vnode, oldVnode);
	      });
	    };
	    if (isCreate) {
	      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert, 'dir-insert');
	    } else {
	      callInsert();
	    }
	  }

	  if (dirsWithPostpatch.length) {
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
	      dirsWithPostpatch.forEach(function (dir) {
	        callHook$1(dir, 'componentUpdated', vnode, oldVnode);
	      });
	    }, 'dir-postpatch');
	  }

	  if (!isCreate) {
	    for (key in oldDirs) {
	      if (!newDirs[key]) {
	        // no longer present, unbind
	        callHook$1(oldDirs[key], 'unbind', oldVnode);
	      }
	    }
	  }
	}

	var emptyModifiers = Object.create(null);

	function normalizeDirectives$1 (
	  dirs,
	  vm
	) {
	  var res = Object.create(null);
	  if (!dirs) {
	    return res
	  }
	  var i, dir;
	  for (i = 0; i < dirs.length; i++) {
	    dir = dirs[i];
	    if (!dir.modifiers) {
	      dir.modifiers = emptyModifiers;
	    }
	    res[getRawDirName(dir)] = dir;
	    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
	  }
	  return res
	}

	function getRawDirName (dir) {
	  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode) {
	  var fn = dir.def && dir.def[hook];
	  if (fn) {
	    fn(vnode.elm, dir, vnode, oldVnode);
	  }
	}

	var baseModules = [
	  ref,
	  directives
	];

	/*  */

	function updateAttrs (oldVnode, vnode) {
	  if (!oldVnode.data.attrs && !vnode.data.attrs) {
	    return
	  }
	  var key, cur, old;
	  var elm = vnode.elm;
	  var oldAttrs = oldVnode.data.attrs || {};
	  var attrs = vnode.data.attrs || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (attrs.__ob__) {
	    attrs = vnode.data.attrs = extend({}, attrs);
	  }

	  for (key in attrs) {
	    cur = attrs[key];
	    old = oldAttrs[key];
	    if (old !== cur) {
	      setAttr(elm, key, cur);
	    }
	  }
	  for (key in oldAttrs) {
	    if (attrs[key] == null) {
	      if (isXlink(key)) {
	        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
	      } else if (!isEnumeratedAttr(key)) {
	        elm.removeAttribute(key);
	      }
	    }
	  }
	}

	function setAttr (el, key, value) {
	  if (isBooleanAttr(key)) {
	    // set attribute for blank value
	    // e.g. <option disabled>Select one</option>
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, key);
	    }
	  } else if (isEnumeratedAttr(key)) {
	    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
	  } else if (isXlink(key)) {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
	    } else {
	      el.setAttributeNS(xlinkNS, key, value);
	    }
	  } else {
	    if (isFalsyAttrValue(value)) {
	      el.removeAttribute(key);
	    } else {
	      el.setAttribute(key, value);
	    }
	  }
	}

	var attrs = {
	  create: updateAttrs,
	  update: updateAttrs
	};

	/*  */

	function updateClass (oldVnode, vnode) {
	  var el = vnode.elm;
	  var data = vnode.data;
	  var oldData = oldVnode.data;
	  if (!data.staticClass && !data.class &&
	      (!oldData || (!oldData.staticClass && !oldData.class))) {
	    return
	  }

	  var cls = genClassForVnode(vnode);

	  // handle transition classes
	  var transitionClass = el._transitionClasses;
	  if (transitionClass) {
	    cls = concat(cls, stringifyClass(transitionClass));
	  }

	  // set the class
	  if (cls !== el._prevClass) {
	    el.setAttribute('class', cls);
	    el._prevClass = cls;
	  }
	}

	var klass = {
	  create: updateClass,
	  update: updateClass
	};

	// skip type checking this file because we need to attach private properties
	// to elements

	function updateDOMListeners (oldVnode, vnode) {
	  if (!oldVnode.data.on && !vnode.data.on) {
	    return
	  }
	  var on = vnode.data.on || {};
	  var oldOn = oldVnode.data.on || {};
	  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
	    vnode.elm.addEventListener(event, handler, capture);
	  });
	  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
	    vnode.elm.removeEventListener(event, handler);
	  });
	  updateListeners(on, oldOn, add, remove, vnode.context);
	}

	var events = {
	  create: updateDOMListeners,
	  update: updateDOMListeners
	};

	/*  */

	function updateDOMProps (oldVnode, vnode) {
	  if (!oldVnode.data.domProps && !vnode.data.domProps) {
	    return
	  }
	  var key, cur;
	  var elm = vnode.elm;
	  var oldProps = oldVnode.data.domProps || {};
	  var props = vnode.data.domProps || {};
	  // clone observed objects, as the user probably wants to mutate it
	  if (props.__ob__) {
	    props = vnode.data.domProps = extend({}, props);
	  }

	  for (key in oldProps) {
	    if (props[key] == null) {
	      elm[key] = '';
	    }
	  }
	  for (key in props) {
	    // ignore children if the node has textContent or innerHTML,
	    // as these will throw away existing DOM nodes and cause removal errors
	    // on subsequent patches (#3360)
	    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
	      vnode.children.length = 0;
	    }
	    cur = props[key];
	    if (key === 'value') {
	      // store value as _value as well since
	      // non-string values will be stringified
	      elm._value = cur;
	      // avoid resetting cursor position when value is the same
	      var strCur = cur == null ? '' : String(cur);
	      if (elm.value !== strCur && !elm.composing) {
	        elm.value = strCur;
	      }
	    } else {
	      elm[key] = cur;
	    }
	  }
	}

	var domProps = {
	  create: updateDOMProps,
	  update: updateDOMProps
	};

	/*  */

	var cssVarRE = /^--/;
	var setProp = function (el, name, val) {
	  /* istanbul ignore if */
	  if (cssVarRE.test(name)) {
	    el.style.setProperty(name, val);
	  } else {
	    el.style[normalize(name)] = val;
	  }
	};

	var prefixes = ['Webkit', 'Moz', 'ms'];

	var testEl;
	var normalize = cached(function (prop) {
	  testEl = testEl || document.createElement('div');
	  prop = camelize(prop);
	  if (prop !== 'filter' && (prop in testEl.style)) {
	    return prop
	  }
	  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefixed = prefixes[i] + upper;
	    if (prefixed in testEl.style) {
	      return prefixed
	    }
	  }
	});

	function updateStyle (oldVnode, vnode) {
	  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
	    return
	  }
	  var cur, name;
	  var el = vnode.elm;
	  var oldStyle = oldVnode.data.style || {};
	  var style = vnode.data.style || {};

	  // handle string
	  if (typeof style === 'string') {
	    el.style.cssText = style;
	    return
	  }

	  var needClone = style.__ob__;

	  // handle array syntax
	  if (Array.isArray(style)) {
	    style = vnode.data.style = toObject(style);
	  }

	  // clone the style for future updates,
	  // in case the user mutates the style object in-place.
	  if (needClone) {
	    style = vnode.data.style = extend({}, style);
	  }

	  for (name in oldStyle) {
	    if (style[name] == null) {
	      setProp(el, name, '');
	    }
	  }
	  for (name in style) {
	    cur = style[name];
	    if (cur !== oldStyle[name]) {
	      // ie9 setting to null has no effect, must use empty string
	      setProp(el, name, cur == null ? '' : cur);
	    }
	  }
	}

	var style = {
	  create: updateStyle,
	  update: updateStyle
	};

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
	    } else {
	      el.classList.add(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    if (cur.indexOf(' ' + cls + ' ') < 0) {
	      el.setAttribute('class', (cur + cls).trim());
	    }
	  }
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
	  /* istanbul ignore if */
	  if (!cls || !cls.trim()) {
	    return
	  }

	  /* istanbul ignore else */
	  if (el.classList) {
	    if (cls.indexOf(' ') > -1) {
	      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
	    } else {
	      el.classList.remove(cls);
	    }
	  } else {
	    var cur = ' ' + el.getAttribute('class') + ' ';
	    var tar = ' ' + cls + ' ';
	    while (cur.indexOf(tar) >= 0) {
	      cur = cur.replace(tar, ' ');
	    }
	    el.setAttribute('class', cur.trim());
	  }
	}

	/*  */

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

	// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
	if (hasTransition) {
	  /* istanbul ignore if */
	  if (window.ontransitionend === undefined &&
	    window.onwebkittransitionend !== undefined) {
	    transitionProp = 'WebkitTransition';
	    transitionEndEvent = 'webkitTransitionEnd';
	  }
	  if (window.onanimationend === undefined &&
	    window.onwebkitanimationend !== undefined) {
	    animationProp = 'WebkitAnimation';
	    animationEndEvent = 'webkitAnimationEnd';
	  }
	}

	var raf = (inBrowser && window.requestAnimationFrame) || setTimeout;
	function nextFrame (fn) {
	  raf(function () {
	    raf(fn);
	  });
	}

	function addTransitionClass (el, cls) {
	  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
	  addClass(el, cls);
	}

	function removeTransitionClass (el, cls) {
	  if (el._transitionClasses) {
	    remove$1(el._transitionClasses, cls);
	  }
	  removeClass(el, cls);
	}

	function whenTransitionEnds (
	  el,
	  expectedType,
	  cb
	) {
	  var ref = getTransitionInfo(el, expectedType);
	  var type = ref.type;
	  var timeout = ref.timeout;
	  var propCount = ref.propCount;
	  if (!type) { return cb() }
	  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
	  var ended = 0;
	  var end = function () {
	    el.removeEventListener(event, onEnd);
	    cb();
	  };
	  var onEnd = function (e) {
	    if (e.target === el) {
	      if (++ended >= propCount) {
	        end();
	      }
	    }
	  };
	  setTimeout(function () {
	    if (ended < propCount) {
	      end();
	    }
	  }, timeout + 1);
	  el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
	  var styles = window.getComputedStyle(el);
	  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ');
	  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
	  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations);
	  var animationDelays = styles[animationProp + 'Delay'].split(', ');
	  var animationDurations = styles[animationProp + 'Duration'].split(', ');
	  var animationTimeout = getTimeout(animationDelays, animationDurations);

	  var type;
	  var timeout = 0;
	  var propCount = 0;
	  /* istanbul ignore if */
	  if (expectedType === TRANSITION) {
	    if (transitionTimeout > 0) {
	      type = TRANSITION;
	      timeout = transitionTimeout;
	      propCount = transitionDurations.length;
	    }
	  } else if (expectedType === ANIMATION) {
	    if (animationTimeout > 0) {
	      type = ANIMATION;
	      timeout = animationTimeout;
	      propCount = animationDurations.length;
	    }
	  } else {
	    timeout = Math.max(transitionTimeout, animationTimeout);
	    type = timeout > 0
	      ? transitionTimeout > animationTimeout
	        ? TRANSITION
	        : ANIMATION
	      : null;
	    propCount = type
	      ? type === TRANSITION
	        ? transitionDurations.length
	        : animationDurations.length
	      : 0;
	  }
	  var hasTransform =
	    type === TRANSITION &&
	    transformRE.test(styles[transitionProp + 'Property']);
	  return {
	    type: type,
	    timeout: timeout,
	    propCount: propCount,
	    hasTransform: hasTransform
	  }
	}

	function getTimeout (delays, durations) {
	  /* istanbul ignore next */
	  while (delays.length < durations.length) {
	    delays = delays.concat(delays);
	  }

	  return Math.max.apply(null, durations.map(function (d, i) {
	    return toMs(d) + toMs(delays[i])
	  }))
	}

	function toMs (s) {
	  return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode) {
	  var el = vnode.elm;

	  // call leave callback now
	  if (el._leaveCb) {
	    el._leaveCb.cancelled = true;
	    el._leaveCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return
	  }

	  /* istanbul ignore if */
	  if (el._enterCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var enterClass = data.enterClass;
	  var enterActiveClass = data.enterActiveClass;
	  var appearClass = data.appearClass;
	  var appearActiveClass = data.appearActiveClass;
	  var beforeEnter = data.beforeEnter;
	  var enter = data.enter;
	  var afterEnter = data.afterEnter;
	  var enterCancelled = data.enterCancelled;
	  var beforeAppear = data.beforeAppear;
	  var appear = data.appear;
	  var afterAppear = data.afterAppear;
	  var appearCancelled = data.appearCancelled;

	  // activeInstance will always be the <transition> component managing this
	  // transition. One edge case to check is when the <transition> is placed
	  // as the root node of a child component. In that case we need to check
	  // <transition>'s parent for appear check.
	  var transitionNode = activeInstance.$vnode;
	  var context = transitionNode && transitionNode.parent
	    ? transitionNode.parent.context
	    : activeInstance;

	  var isAppear = !context._isMounted || !vnode.isRootInsert;

	  if (isAppear && !appear && appear !== '') {
	    return
	  }

	  var startClass = isAppear ? appearClass : enterClass;
	  var activeClass = isAppear ? appearActiveClass : enterActiveClass;
	  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter;
	  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter;
	  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter;
	  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    enterHook &&
	    // enterHook may be a bound method which exposes
	    // the length of original fn as _length
	    (enterHook._length || enterHook.length) > 1;

	  var cb = el._enterCb = once(function () {
	    if (expectsCSS) {
	      removeTransitionClass(el, activeClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, startClass);
	      }
	      enterCancelledHook && enterCancelledHook(el);
	    } else {
	      afterEnterHook && afterEnterHook(el);
	    }
	    el._enterCb = null;
	  });

	  if (!vnode.data.show) {
	    // remove pending leave element on enter by injecting an insert hook
	    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
	      var parent = el.parentNode;
	      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
	      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
	        pendingNode.elm._leaveCb();
	      }
	      enterHook && enterHook(el, cb);
	    }, 'transition-insert');
	  }

	  // start enter transition
	  beforeEnterHook && beforeEnterHook(el);
	  if (expectsCSS) {
	    addTransitionClass(el, startClass);
	    addTransitionClass(el, activeClass);
	    nextFrame(function () {
	      removeTransitionClass(el, startClass);
	      if (!cb.cancelled && !userWantsControl) {
	        whenTransitionEnds(el, type, cb);
	      }
	    });
	  }

	  if (vnode.data.show) {
	    enterHook && enterHook(el, cb);
	  }

	  if (!expectsCSS && !userWantsControl) {
	    cb();
	  }
	}

	function leave (vnode, rm) {
	  var el = vnode.elm;

	  // call enter callback now
	  if (el._enterCb) {
	    el._enterCb.cancelled = true;
	    el._enterCb();
	  }

	  var data = resolveTransition(vnode.data.transition);
	  if (!data) {
	    return rm()
	  }

	  /* istanbul ignore if */
	  if (el._leaveCb || el.nodeType !== 1) {
	    return
	  }

	  var css = data.css;
	  var type = data.type;
	  var leaveClass = data.leaveClass;
	  var leaveActiveClass = data.leaveActiveClass;
	  var beforeLeave = data.beforeLeave;
	  var leave = data.leave;
	  var afterLeave = data.afterLeave;
	  var leaveCancelled = data.leaveCancelled;
	  var delayLeave = data.delayLeave;

	  var expectsCSS = css !== false && !isIE9;
	  var userWantsControl =
	    leave &&
	    // leave hook may be a bound method which exposes
	    // the length of original fn as _length
	    (leave._length || leave.length) > 1;

	  var cb = el._leaveCb = once(function () {
	    if (el.parentNode && el.parentNode._pending) {
	      el.parentNode._pending[vnode.key] = null;
	    }
	    if (expectsCSS) {
	      removeTransitionClass(el, leaveActiveClass);
	    }
	    if (cb.cancelled) {
	      if (expectsCSS) {
	        removeTransitionClass(el, leaveClass);
	      }
	      leaveCancelled && leaveCancelled(el);
	    } else {
	      rm();
	      afterLeave && afterLeave(el);
	    }
	    el._leaveCb = null;
	  });

	  if (delayLeave) {
	    delayLeave(performLeave);
	  } else {
	    performLeave();
	  }

	  function performLeave () {
	    // the delayed leave may have already been cancelled
	    if (cb.cancelled) {
	      return
	    }
	    // record leaving element
	    if (!vnode.data.show) {
	      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
	    }
	    beforeLeave && beforeLeave(el);
	    if (expectsCSS) {
	      addTransitionClass(el, leaveClass);
	      addTransitionClass(el, leaveActiveClass);
	      nextFrame(function () {
	        removeTransitionClass(el, leaveClass);
	        if (!cb.cancelled && !userWantsControl) {
	          whenTransitionEnds(el, type, cb);
	        }
	      });
	    }
	    leave && leave(el, cb);
	    if (!expectsCSS && !userWantsControl) {
	      cb();
	    }
	  }
	}

	function resolveTransition (def$$1) {
	  if (!def$$1) {
	    return
	  }
	  /* istanbul ignore else */
	  if (typeof def$$1 === 'object') {
	    var res = {};
	    if (def$$1.css !== false) {
	      extend(res, autoCssTransition(def$$1.name || 'v'));
	    }
	    extend(res, def$$1);
	    return res
	  } else if (typeof def$$1 === 'string') {
	    return autoCssTransition(def$$1)
	  }
	}

	var autoCssTransition = cached(function (name) {
	  return {
	    enterClass: (name + "-enter"),
	    leaveClass: (name + "-leave"),
	    appearClass: (name + "-enter"),
	    enterActiveClass: (name + "-enter-active"),
	    leaveActiveClass: (name + "-leave-active"),
	    appearActiveClass: (name + "-enter-active")
	  }
	});

	function once (fn) {
	  var called = false;
	  return function () {
	    if (!called) {
	      called = true;
	      fn();
	    }
	  }
	}

	var transition = inBrowser ? {
	  create: function create (_, vnode) {
	    if (!vnode.data.show) {
	      enter(vnode);
	    }
	  },
	  remove: function remove (vnode, rm) {
	    /* istanbul ignore else */
	    if (!vnode.data.show) {
	      leave(vnode, rm);
	    } else {
	      rm();
	    }
	  }
	} : {};

	var platformModules = [
	  attrs,
	  klass,
	  events,
	  domProps,
	  style,
	  transition
	];

	/*  */

	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules });

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_-]*)?$/;

	/* istanbul ignore if */
	if (isIE9) {
	  // http://www.matts411.com/post/internet-explorer-9-oninput/
	  document.addEventListener('selectionchange', function () {
	    var el = document.activeElement;
	    if (el && el.vmodel) {
	      trigger(el, 'input');
	    }
	  });
	}

	var model = {
	  inserted: function inserted (el, binding, vnode) {
	    {
	      if (!modelableTagRE.test(vnode.tag)) {
	        warn(
	          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
	          'If you are working with contenteditable, it\'s recommended to ' +
	          'wrap a library dedicated for that purpose inside a custom component.',
	          vnode.context
	        );
	      }
	    }
	    if (vnode.tag === 'select') {
	      var cb = function () {
	        setSelected(el, binding, vnode.context);
	      };
	      cb();
	      /* istanbul ignore if */
	      if (isIE || isEdge) {
	        setTimeout(cb, 0);
	      }
	    } else if (
	      (vnode.tag === 'textarea' || el.type === 'text') &&
	      !binding.modifiers.lazy
	    ) {
	      if (!isAndroid) {
	        el.addEventListener('compositionstart', onCompositionStart);
	        el.addEventListener('compositionend', onCompositionEnd);
	      }
	      /* istanbul ignore if */
	      if (isIE9) {
	        el.vmodel = true;
	      }
	    }
	  },
	  componentUpdated: function componentUpdated (el, binding, vnode) {
	    if (vnode.tag === 'select') {
	      setSelected(el, binding, vnode.context);
	      // in case the options rendered by v-for have changed,
	      // it's possible that the value is out-of-sync with the rendered options.
	      // detect such cases and filter out values that no longer has a matching
	      // option in the DOM.
	      var needReset = el.multiple
	        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
	        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
	      if (needReset) {
	        trigger(el, 'change');
	      }
	    }
	  }
	};

	function setSelected (el, binding, vm) {
	  var value = binding.value;
	  var isMultiple = el.multiple;
	  if (isMultiple && !Array.isArray(value)) {
	    "development" !== 'production' && warn(
	      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
	      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
	      vm
	    );
	    return
	  }
	  var selected, option;
	  for (var i = 0, l = el.options.length; i < l; i++) {
	    option = el.options[i];
	    if (isMultiple) {
	      selected = looseIndexOf(value, getValue(option)) > -1;
	      if (option.selected !== selected) {
	        option.selected = selected;
	      }
	    } else {
	      if (looseEqual(getValue(option), value)) {
	        if (el.selectedIndex !== i) {
	          el.selectedIndex = i;
	        }
	        return
	      }
	    }
	  }
	  if (!isMultiple) {
	    el.selectedIndex = -1;
	  }
	}

	function hasNoMatchingOption (value, options) {
	  for (var i = 0, l = options.length; i < l; i++) {
	    if (looseEqual(getValue(options[i]), value)) {
	      return false
	    }
	  }
	  return true
	}

	function getValue (option) {
	  return '_value' in option
	    ? option._value
	    : option.value
	}

	function onCompositionStart (e) {
	  e.target.composing = true;
	}

	function onCompositionEnd (e) {
	  e.target.composing = false;
	  trigger(e.target, 'input');
	}

	function trigger (el, type) {
	  var e = document.createEvent('HTMLEvents');
	  e.initEvent(type, true, true);
	  el.dispatchEvent(e);
	}

	/*  */

	// recursively search for possible transition defined inside the component root
	function locateNode (vnode) {
	  return vnode.child && (!vnode.data || !vnode.data.transition)
	    ? locateNode(vnode.child._vnode)
	    : vnode
	}

	var show = {
	  bind: function bind (el, ref, vnode) {
	    var value = ref.value;

	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (value && transition && !isIE9) {
	      enter(vnode);
	    }
	    var originalDisplay = el.style.display === 'none' ? '' : el.style.display;
	    el.style.display = value ? originalDisplay : 'none';
	    el.__vOriginalDisplay = originalDisplay;
	  },
	  update: function update (el, ref, vnode) {
	    var value = ref.value;
	    var oldValue = ref.oldValue;

	    /* istanbul ignore if */
	    if (value === oldValue) { return }
	    vnode = locateNode(vnode);
	    var transition = vnode.data && vnode.data.transition;
	    if (transition && !isIE9) {
	      if (value) {
	        enter(vnode);
	        el.style.display = el.__vOriginalDisplay;
	      } else {
	        leave(vnode, function () {
	          el.style.display = 'none';
	        });
	      }
	    } else {
	      el.style.display = value ? el.__vOriginalDisplay : 'none';
	    }
	  }
	};

	var platformDirectives = {
	  model: model,
	  show: show
	};

	/*  */

	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)

	var transitionProps = {
	  name: String,
	  appear: Boolean,
	  css: Boolean,
	  mode: String,
	  type: String,
	  enterClass: String,
	  leaveClass: String,
	  enterActiveClass: String,
	  leaveActiveClass: String,
	  appearClass: String,
	  appearActiveClass: String
	};

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
	  var compOptions = vnode && vnode.componentOptions;
	  if (compOptions && compOptions.Ctor.options.abstract) {
	    return getRealChild(getFirstComponentChild(compOptions.children))
	  } else {
	    return vnode
	  }
	}

	function extractTransitionData (comp) {
	  var data = {};
	  var options = comp.$options;
	  // props
	  for (var key in options.propsData) {
	    data[key] = comp[key];
	  }
	  // events.
	  // extract listeners and pass them directly to the transition methods
	  var listeners = options._parentListeners;
	  for (var key$1 in listeners) {
	    data[camelize(key$1)] = listeners[key$1].fn;
	  }
	  return data
	}

	function placeholder (h, rawChild) {
	  return /\d-keep-alive$/.test(rawChild.tag)
	    ? h('keep-alive')
	    : null
	}

	function hasParentTransition (vnode) {
	  while ((vnode = vnode.parent)) {
	    if (vnode.data.transition) {
	      return true
	    }
	  }
	}

	var Transition = {
	  name: 'transition',
	  props: transitionProps,
	  abstract: true,
	  render: function render (h) {
	    var this$1 = this;

	    var children = this.$slots.default;
	    if (!children) {
	      return
	    }

	    // filter out text nodes (possible whitespaces)
	    children = children.filter(function (c) { return c.tag; });
	    /* istanbul ignore if */
	    if (!children.length) {
	      return
	    }

	    // warn multiple elements
	    if ("development" !== 'production' && children.length > 1) {
	      warn(
	        '<transition> can only be used on a single element. Use ' +
	        '<transition-group> for lists.',
	        this.$parent
	      );
	    }

	    var mode = this.mode;

	    // warn invalid mode
	    if ("development" !== 'production' &&
	        mode && mode !== 'in-out' && mode !== 'out-in') {
	      warn(
	        'invalid <transition> mode: ' + mode,
	        this.$parent
	      );
	    }

	    var rawChild = children[0];

	    // if this is a component root node and the component's
	    // parent container node also has transition, skip.
	    if (hasParentTransition(this.$vnode)) {
	      return rawChild
	    }

	    // apply transition data to child
	    // use getRealChild() to ignore abstract components e.g. keep-alive
	    var child = getRealChild(rawChild);
	    /* istanbul ignore if */
	    if (!child) {
	      return rawChild
	    }

	    if (this._leaving) {
	      return placeholder(h, rawChild)
	    }

	    var key = child.key = child.key == null || child.isStatic
	      ? ("__v" + (child.tag + this._uid) + "__")
	      : child.key;
	    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
	    var oldRawChild = this._vnode;
	    var oldChild = getRealChild(oldRawChild);

	    // mark v-show
	    // so that the transition module can hand over the control to the directive
	    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
	      child.data.show = true;
	    }

	    if (oldChild && oldChild.data && oldChild.key !== key) {
	      // replace old child transition data with fresh one
	      // important for dynamic transitions!
	      var oldData = oldChild.data.transition = extend({}, data);

	      // handle transition mode
	      if (mode === 'out-in') {
	        // return placeholder node and queue update when leave finishes
	        this._leaving = true;
	        mergeVNodeHook(oldData, 'afterLeave', function () {
	          this$1._leaving = false;
	          this$1.$forceUpdate();
	        }, key);
	        return placeholder(h, rawChild)
	      } else if (mode === 'in-out') {
	        var delayedLeave;
	        var performLeave = function () { delayedLeave(); };
	        mergeVNodeHook(data, 'afterEnter', performLeave, key);
	        mergeVNodeHook(data, 'enterCancelled', performLeave, key);
	        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
	          delayedLeave = leave;
	        }, key);
	      }
	    }

	    return rawChild
	  }
	};

	/*  */

	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final disired state. This way in the second pass removed
	// nodes will remain where they should be.

	var props = extend({
	  tag: String,
	  moveClass: String
	}, transitionProps);

	delete props.mode;

	var TransitionGroup = {
	  props: props,

	  render: function render (h) {
	    var tag = this.tag || this.$vnode.data.tag || 'span';
	    var map = Object.create(null);
	    var prevChildren = this.prevChildren = this.children;
	    var rawChildren = this.$slots.default || [];
	    var children = this.children = [];
	    var transitionData = extractTransitionData(this);

	    for (var i = 0; i < rawChildren.length; i++) {
	      var c = rawChildren[i];
	      if (c.tag) {
	        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
	          children.push(c);
	          map[c.key] = c
	          ;(c.data || (c.data = {})).transition = transitionData;
	        } else {
	          var opts = c.componentOptions;
	          var name = opts
	            ? (opts.Ctor.options.name || opts.tag)
	            : c.tag;
	          warn(("<transition-group> children must be keyed: <" + name + ">"));
	        }
	      }
	    }

	    if (prevChildren) {
	      var kept = [];
	      var removed = [];
	      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
	        var c$1 = prevChildren[i$1];
	        c$1.data.transition = transitionData;
	        c$1.data.pos = c$1.elm.getBoundingClientRect();
	        if (map[c$1.key]) {
	          kept.push(c$1);
	        } else {
	          removed.push(c$1);
	        }
	      }
	      this.kept = h(tag, null, kept);
	      this.removed = removed;
	    }

	    return h(tag, null, children)
	  },

	  beforeUpdate: function beforeUpdate () {
	    // force removing pass
	    this.__patch__(
	      this._vnode,
	      this.kept,
	      false, // hydrating
	      true // removeOnly (!important, avoids unnecessary moves)
	    );
	    this._vnode = this.kept;
	  },

	  updated: function updated () {
	    var children = this.prevChildren;
	    var moveClass = this.moveClass || (this.name + '-move');
	    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
	      return
	    }

	    // we divide the work into three loops to avoid mixing DOM reads and writes
	    // in each iteration - which helps prevent layout thrashing.
	    children.forEach(callPendingCbs);
	    children.forEach(recordPosition);
	    children.forEach(applyTranslation);

	    // force reflow to put everything in position
	    var f = document.body.offsetHeight; // eslint-disable-line

	    children.forEach(function (c) {
	      if (c.data.moved) {
	        var el = c.elm;
	        var s = el.style;
	        addTransitionClass(el, moveClass);
	        s.transform = s.WebkitTransform = s.transitionDuration = '';
	        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
	          if (!e || /transform$/.test(e.propertyName)) {
	            el.removeEventListener(transitionEndEvent, cb);
	            el._moveCb = null;
	            removeTransitionClass(el, moveClass);
	          }
	        });
	      }
	    });
	  },

	  methods: {
	    hasMove: function hasMove (el, moveClass) {
	      /* istanbul ignore if */
	      if (!hasTransition) {
	        return false
	      }
	      if (this._hasMove != null) {
	        return this._hasMove
	      }
	      addTransitionClass(el, moveClass);
	      var info = getTransitionInfo(el);
	      removeTransitionClass(el, moveClass);
	      return (this._hasMove = info.hasTransform)
	    }
	  }
	};

	function callPendingCbs (c) {
	  /* istanbul ignore if */
	  if (c.elm._moveCb) {
	    c.elm._moveCb();
	  }
	  /* istanbul ignore if */
	  if (c.elm._enterCb) {
	    c.elm._enterCb();
	  }
	}

	function recordPosition (c) {
	  c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
	  var oldPos = c.data.pos;
	  var newPos = c.data.newPos;
	  var dx = oldPos.left - newPos.left;
	  var dy = oldPos.top - newPos.top;
	  if (dx || dy) {
	    c.data.moved = true;
	    var s = c.elm.style;
	    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
	    s.transitionDuration = '0s';
	  }
	}

	var platformComponents = {
	  Transition: Transition,
	  TransitionGroup: TransitionGroup
	};

	/*  */

	// install platform specific utils
	Vue$2.config.isUnknownElement = isUnknownElement;
	Vue$2.config.isReservedTag = isReservedTag;
	Vue$2.config.getTagNamespace = getTagNamespace;
	Vue$2.config.mustUseProp = mustUseProp;

	// install platform runtime directives & components
	extend(Vue$2.options.directives, platformDirectives);
	extend(Vue$2.options.components, platformComponents);

	// install platform patch function
	Vue$2.prototype.__patch__ = config._isServer ? noop : patch$1;

	// wrap mount
	Vue$2.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && !config._isServer ? query(el) : undefined;
	  return this._mount(el, hydrating)
	};

	// devtools global hook
	/* istanbul ignore next */
	setTimeout(function () {
	  if (config.devtools) {
	    if (devtools) {
	      devtools.emit('init', Vue$2);
	    } else if (
	      "development" !== 'production' &&
	      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
	    ) {
	      console.log(
	        'Download the Vue Devtools for a better development experience:\n' +
	        'https://github.com/vuejs/vue-devtools'
	      );
	    }
	  }
	}, 0);

	/*  */

	// check whether current browser encodes a char inside attribute values
	function shouldDecode (content, encoded) {
	  var div = document.createElement('div');
	  div.innerHTML = "<div a=\"" + content + "\">";
	  return div.innerHTML.indexOf(encoded) > 0
	}

	// #3663
	// IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

	/*  */

	var decoder = document.createElement('div');

	function decode (html) {
	  decoder.innerHTML = html;
	  return decoder.textContent
	}

	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */

	/*!
	 * HTML Parser By John Resig (ejohn.org)
	 * Modified by Juriy "kangax" Zaytsev
	 * Original code by Erik Arvidsson, Mozilla Public License
	 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
	 */

	// Regular Expressions for parsing tags and attributes
	var singleAttrIdentifier = /([^\s"'<>/=]+)/;
	var singleAttrAssign = /(?:=)/;
	var singleAttrValues = [
	  // attr value double quotes
	  /"([^"]*)"+/.source,
	  // attr value, single quotes
	  /'([^']*)'+/.source,
	  // attr value, no quotes
	  /([^\s"'=<>`]+)/.source
	];
	var attribute = new RegExp(
	  '^\\s*' + singleAttrIdentifier.source +
	  '(?:\\s*(' + singleAttrAssign.source + ')' +
	  '\\s*(?:' + singleAttrValues.join('|') + '))?'
	);

	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')';
	var startTagOpen = new RegExp('^<' + qnameCapture);
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>');
	var doctype = /^<!DOCTYPE [^>]+>/i;
	var comment = /^<!--/;
	var conditionalComment = /^<!\[/;

	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
	  IS_REGEX_CAPTURING_BROKEN = g === '';
	});

	// Special Elements (can contain anything)
	var isScriptOrStyle = makeMap('script,style', true);
	var hasLang = function (attr) { return attr.name === 'lang' && attr.value !== 'html'; };
	var isSpecialTag = function (tag, isSFC, stack) {
	  if (isScriptOrStyle(tag)) {
	    return true
	  }
	  // top-level template that has a pre-processor
	  if (
	    isSFC &&
	    tag === 'template' &&
	    stack.length === 1 &&
	    stack[0].attrs.some(hasLang)
	  ) {
	    return true
	  }
	  return false
	};

	var reCache = {};

	var ltRE = /&lt;/g;
	var gtRE = /&gt;/g;
	var nlRE = /&#10;/g;
	var ampRE = /&amp;/g;
	var quoteRE = /&quot;/g;

	function decodeAttr (value, shouldDecodeNewlines) {
	  if (shouldDecodeNewlines) {
	    value = value.replace(nlRE, '\n');
	  }
	  return value
	    .replace(ltRE, '<')
	    .replace(gtRE, '>')
	    .replace(ampRE, '&')
	    .replace(quoteRE, '"')
	}

	function parseHTML (html, options) {
	  var stack = [];
	  var expectHTML = options.expectHTML;
	  var isUnaryTag$$1 = options.isUnaryTag || no;
	  var index = 0;
	  var last, lastTag;
	  while (html) {
	    last = html;
	    // Make sure we're not in a script or style element
	    if (!lastTag || !isSpecialTag(lastTag, options.sfc, stack)) {
	      var textEnd = html.indexOf('<');
	      if (textEnd === 0) {
	        // Comment:
	        if (comment.test(html)) {
	          var commentEnd = html.indexOf('-->');

	          if (commentEnd >= 0) {
	            advance(commentEnd + 3);
	            continue
	          }
	        }

	        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
	        if (conditionalComment.test(html)) {
	          var conditionalEnd = html.indexOf(']>');

	          if (conditionalEnd >= 0) {
	            advance(conditionalEnd + 2);
	            continue
	          }
	        }

	        // Doctype:
	        var doctypeMatch = html.match(doctype);
	        if (doctypeMatch) {
	          advance(doctypeMatch[0].length);
	          continue
	        }

	        // End tag:
	        var endTagMatch = html.match(endTag);
	        if (endTagMatch) {
	          var curIndex = index;
	          advance(endTagMatch[0].length);
	          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index);
	          continue
	        }

	        // Start tag:
	        var startTagMatch = parseStartTag();
	        if (startTagMatch) {
	          handleStartTag(startTagMatch);
	          continue
	        }
	      }

	      var text = void 0, rest$1 = void 0, next = void 0;
	      if (textEnd > 0) {
	        rest$1 = html.slice(textEnd);
	        while (
	          !endTag.test(rest$1) &&
	          !startTagOpen.test(rest$1) &&
	          !comment.test(rest$1) &&
	          !conditionalComment.test(rest$1)
	        ) {
	          // < in plain text, be forgiving and treat it as text
	          next = rest$1.indexOf('<', 1);
	          if (next < 0) { break }
	          textEnd += next;
	          rest$1 = html.slice(textEnd);
	        }
	        text = html.substring(0, textEnd);
	        advance(textEnd);
	      }

	      if (textEnd < 0) {
	        text = html;
	        html = '';
	      }

	      if (options.chars && text) {
	        options.chars(text);
	      }
	    } else {
	      var stackedTag = lastTag.toLowerCase();
	      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
	      var endTagLength = 0;
	      var rest = html.replace(reStackedTag, function (all, text, endTag) {
	        endTagLength = endTag.length;
	        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
	          text = text
	            .replace(/<!--([\s\S]*?)-->/g, '$1')
	            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
	        }
	        if (options.chars) {
	          options.chars(text);
	        }
	        return ''
	      });
	      index += html.length - rest.length;
	      html = rest;
	      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index);
	    }

	    if (html === last && options.chars) {
	      options.chars(html);
	      break
	    }
	  }

	  // Clean up any remaining tags
	  parseEndTag();

	  function advance (n) {
	    index += n;
	    html = html.substring(n);
	  }

	  function parseStartTag () {
	    var start = html.match(startTagOpen);
	    if (start) {
	      var match = {
	        tagName: start[1],
	        attrs: [],
	        start: index
	      };
	      advance(start[0].length);
	      var end, attr;
	      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
	        advance(attr[0].length);
	        match.attrs.push(attr);
	      }
	      if (end) {
	        match.unarySlash = end[1];
	        advance(end[0].length);
	        match.end = index;
	        return match
	      }
	    }
	  }

	  function handleStartTag (match) {
	    var tagName = match.tagName;
	    var unarySlash = match.unarySlash;

	    if (expectHTML) {
	      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
	        parseEndTag('', lastTag);
	      }
	      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
	        parseEndTag('', tagName);
	      }
	    }

	    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

	    var l = match.attrs.length;
	    var attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      var args = match.attrs[i];
	      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
	      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
	        if (args[3] === '') { delete args[3]; }
	        if (args[4] === '') { delete args[4]; }
	        if (args[5] === '') { delete args[5]; }
	      }
	      var value = args[3] || args[4] || args[5] || '';
	      attrs[i] = {
	        name: args[1],
	        value: decodeAttr(
	          value,
	          options.shouldDecodeNewlines
	        )
	      };
	    }

	    if (!unary) {
	      stack.push({ tag: tagName, attrs: attrs });
	      lastTag = tagName;
	      unarySlash = '';
	    }

	    if (options.start) {
	      options.start(tagName, attrs, unary, match.start, match.end);
	    }
	  }

	  function parseEndTag (tag, tagName, start, end) {
	    var pos;
	    if (start == null) { start = index; }
	    if (end == null) { end = index; }

	    // Find the closest opened tag of the same type
	    if (tagName) {
	      var needle = tagName.toLowerCase();
	      for (pos = stack.length - 1; pos >= 0; pos--) {
	        if (stack[pos].tag.toLowerCase() === needle) {
	          break
	        }
	      }
	    } else {
	      // If no tag name is provided, clean shop
	      pos = 0;
	    }

	    if (pos >= 0) {
	      // Close all the open elements, up the stack
	      for (var i = stack.length - 1; i >= pos; i--) {
	        if (options.end) {
	          options.end(stack[i].tag, start, end);
	        }
	      }

	      // Remove the open elements from the stack
	      stack.length = pos;
	      lastTag = pos && stack[pos - 1].tag;
	    } else if (tagName.toLowerCase() === 'br') {
	      if (options.start) {
	        options.start(tagName, [], true, start, end);
	      }
	    } else if (tagName.toLowerCase() === 'p') {
	      if (options.start) {
	        options.start(tagName, [], false, start, end);
	      }
	      if (options.end) {
	        options.end(tagName, start, end);
	      }
	    }
	  }
	}

	/*  */

	function parseFilters (exp) {
	  var inSingle = false;
	  var inDouble = false;
	  var curly = 0;
	  var square = 0;
	  var paren = 0;
	  var lastFilterIndex = 0;
	  var c, prev, i, expression, filters;

	  for (i = 0; i < exp.length; i++) {
	    prev = c;
	    c = exp.charCodeAt(i);
	    if (inSingle) {
	      // check single quote
	      if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle; }
	    } else if (inDouble) {
	      // check double quote
	      if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble; }
	    } else if (
	      c === 0x7C && // pipe
	      exp.charCodeAt(i + 1) !== 0x7C &&
	      exp.charCodeAt(i - 1) !== 0x7C &&
	      !curly && !square && !paren
	    ) {
	      if (expression === undefined) {
	        // first filter, end of expression
	        lastFilterIndex = i + 1;
	        expression = exp.slice(0, i).trim();
	      } else {
	        pushFilter();
	      }
	    } else {
	      switch (c) {
	        case 0x22: inDouble = true; break // "
	        case 0x27: inSingle = true; break // '
	        case 0x28: paren++; break         // (
	        case 0x29: paren--; break         // )
	        case 0x5B: square++; break        // [
	        case 0x5D: square--; break        // ]
	        case 0x7B: curly++; break         // {
	        case 0x7D: curly--; break         // }
	      }
	    }
	  }

	  if (expression === undefined) {
	    expression = exp.slice(0, i).trim();
	  } else if (lastFilterIndex !== 0) {
	    pushFilter();
	  }

	  function pushFilter () {
	    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
	    lastFilterIndex = i + 1;
	  }

	  if (filters) {
	    for (i = 0; i < filters.length; i++) {
	      expression = wrapFilter(expression, filters[i]);
	    }
	  }

	  return expression
	}

	function wrapFilter (exp, filter) {
	  var i = filter.indexOf('(');
	  if (i < 0) {
	    // _f: resolveFilter
	    return ("_f(\"" + filter + "\")(" + exp + ")")
	  } else {
	    var name = filter.slice(0, i);
	    var args = filter.slice(i + 1);
	    return ("_f(\"" + name + "\")(" + exp + "," + args)
	  }
	}

	/*  */

	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]/\\]/g;

	var buildRegex = cached(function (delimiters) {
	  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
	  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
	  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});

	function parseText (
	  text,
	  delimiters
	) {
	  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
	  if (!tagRE.test(text)) {
	    return
	  }
	  var tokens = [];
	  var lastIndex = tagRE.lastIndex = 0;
	  var match, index;
	  while ((match = tagRE.exec(text))) {
	    index = match.index;
	    // push text token
	    if (index > lastIndex) {
	      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
	    }
	    // tag token
	    var exp = parseFilters(match[1].trim());
	    tokens.push(("_s(" + exp + ")"));
	    lastIndex = index + match[0].length;
	  }
	  if (lastIndex < text.length) {
	    tokens.push(JSON.stringify(text.slice(lastIndex)));
	  }
	  return tokens.join('+')
	}

	/*  */

	function baseWarn (msg) {
	  console.error(("[Vue parser]: " + msg));
	}

	function pluckModuleFunction (
	  modules,
	  key
	) {
	  return modules
	    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
	    : []
	}

	function addProp (el, name, value) {
	  (el.props || (el.props = [])).push({ name: name, value: value });
	}

	function addAttr (el, name, value) {
	  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
	}

	function addDirective (
	  el,
	  name,
	  rawName,
	  value,
	  arg,
	  modifiers
	) {
	  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
	}

	function addHandler (
	  el,
	  name,
	  value,
	  modifiers,
	  important
	) {
	  // check capture modifier
	  if (modifiers && modifiers.capture) {
	    delete modifiers.capture;
	    name = '!' + name; // mark the event as captured
	  }
	  var events;
	  if (modifiers && modifiers.native) {
	    delete modifiers.native;
	    events = el.nativeEvents || (el.nativeEvents = {});
	  } else {
	    events = el.events || (el.events = {});
	  }
	  var newHandler = { value: value, modifiers: modifiers };
	  var handlers = events[name];
	  /* istanbul ignore if */
	  if (Array.isArray(handlers)) {
	    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
	  } else if (handlers) {
	    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
	  } else {
	    events[name] = newHandler;
	  }
	}

	function getBindingAttr (
	  el,
	  name,
	  getStatic
	) {
	  var dynamicValue =
	    getAndRemoveAttr(el, ':' + name) ||
	    getAndRemoveAttr(el, 'v-bind:' + name);
	  if (dynamicValue != null) {
	    return dynamicValue
	  } else if (getStatic !== false) {
	    var staticValue = getAndRemoveAttr(el, name);
	    if (staticValue != null) {
	      return JSON.stringify(staticValue)
	    }
	  }
	}

	function getAndRemoveAttr (el, name) {
	  var val;
	  if ((val = el.attrsMap[name]) != null) {
	    var list = el.attrsList;
	    for (var i = 0, l = list.length; i < l; i++) {
	      if (list[i].name === name) {
	        list.splice(i, 1);
	        break
	      }
	    }
	  }
	  return val
	}

	/*  */

	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
	var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/;
	var bindRE = /^:|^v-bind:/;
	var onRE = /^@|^v-on:/;
	var argRE = /:(.*)$/;
	var modifierRE = /\.[^.]+/g;
	var specialNewlineRE = /\u2028|\u2029/g;

	var decodeHTMLCached = cached(decode);

	// configurable state
	var warn$1;
	var platformGetTagNamespace;
	var platformMustUseProp;
	var platformIsPreTag;
	var preTransforms;
	var transforms;
	var postTransforms;
	var delimiters;

	/**
	 * Convert HTML string to AST.
	 */
	function parse (
	  template,
	  options
	) {
	  warn$1 = options.warn || baseWarn;
	  platformGetTagNamespace = options.getTagNamespace || no;
	  platformMustUseProp = options.mustUseProp || no;
	  platformIsPreTag = options.isPreTag || no;
	  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
	  transforms = pluckModuleFunction(options.modules, 'transformNode');
	  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');
	  delimiters = options.delimiters;
	  var stack = [];
	  var preserveWhitespace = options.preserveWhitespace !== false;
	  var root;
	  var currentParent;
	  var inVPre = false;
	  var inPre = false;
	  var warned = false;
	  parseHTML(template, {
	    expectHTML: options.expectHTML,
	    isUnaryTag: options.isUnaryTag,
	    shouldDecodeNewlines: options.shouldDecodeNewlines,
	    start: function start (tag, attrs, unary) {
	      // check namespace.
	      // inherit parent ns if there is one
	      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

	      // handle IE svg bug
	      /* istanbul ignore if */
	      if (options.isIE && ns === 'svg') {
	        attrs = guardIESVGBug(attrs);
	      }

	      var element = {
	        type: 1,
	        tag: tag,
	        attrsList: attrs,
	        attrsMap: makeAttrsMap(attrs, options.isIE),
	        parent: currentParent,
	        children: []
	      };
	      if (ns) {
	        element.ns = ns;
	      }

	      if ("client" !== 'server' && isForbiddenTag(element)) {
	        element.forbidden = true;
	        "development" !== 'production' && warn$1(
	          'Templates should only be responsible for mapping the state to the ' +
	          'UI. Avoid placing tags with side-effects in your templates, such as ' +
	          "<" + tag + ">."
	        );
	      }

	      // apply pre-transforms
	      for (var i = 0; i < preTransforms.length; i++) {
	        preTransforms[i](element, options);
	      }

	      if (!inVPre) {
	        processPre(element);
	        if (element.pre) {
	          inVPre = true;
	        }
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = true;
	      }
	      if (inVPre) {
	        processRawAttrs(element);
	      } else {
	        processFor(element);
	        processIf(element);
	        processOnce(element);
	        processKey(element);

	        // determine whether this is a plain element after
	        // removing structural attributes
	        element.plain = !element.key && !attrs.length;

	        processRef(element);
	        processSlot(element);
	        processComponent(element);
	        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
	          transforms[i$1](element, options);
	        }
	        processAttrs(element);
	      }

	      function checkRootConstraints (el) {
	        if ("development" !== 'production' && !warned) {
	          if (el.tag === 'slot' || el.tag === 'template') {
	            warned = true;
	            warn$1(
	              "Cannot use <" + (el.tag) + "> as component root element because it may " +
	              'contain multiple nodes:\n' + template
	            );
	          }
	          if (el.attrsMap.hasOwnProperty('v-for')) {
	            warned = true;
	            warn$1(
	              'Cannot use v-for on stateful component root element because ' +
	              'it renders multiple elements:\n' + template
	            );
	          }
	        }
	      }

	      // tree management
	      if (!root) {
	        root = element;
	        checkRootConstraints(root);
	      } else if (!stack.length) {
	        // allow 2 root elements with v-if and v-else
	        if (root.if && element.else) {
	          checkRootConstraints(element);
	          root.elseBlock = element;
	        } else if ("development" !== 'production' && !warned) {
	          warned = true;
	          warn$1(
	            ("Component template should contain exactly one root element:\n\n" + template)
	          );
	        }
	      }
	      if (currentParent && !element.forbidden) {
	        if (element.else) {
	          processElse(element, currentParent);
	        } else {
	          currentParent.children.push(element);
	          element.parent = currentParent;
	        }
	      }
	      if (!unary) {
	        currentParent = element;
	        stack.push(element);
	      }
	      // apply post-transforms
	      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
	        postTransforms[i$2](element, options);
	      }
	    },

	    end: function end () {
	      // remove trailing whitespace
	      var element = stack[stack.length - 1];
	      var lastNode = element.children[element.children.length - 1];
	      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
	        element.children.pop();
	      }
	      // pop stack
	      stack.length -= 1;
	      currentParent = stack[stack.length - 1];
	      // check pre state
	      if (element.pre) {
	        inVPre = false;
	      }
	      if (platformIsPreTag(element.tag)) {
	        inPre = false;
	      }
	    },

	    chars: function chars (text) {
	      if (!currentParent) {
	        if ("development" !== 'production' && !warned && text === template) {
	          warned = true;
	          warn$1(
	            'Component template requires a root element, rather than just text:\n\n' + template
	          );
	        }
	        return
	      }
	      text = inPre || text.trim()
	        ? decodeHTMLCached(text)
	        // only preserve whitespace if its not right after a starting tag
	        : preserveWhitespace && currentParent.children.length ? ' ' : '';
	      if (text) {
	        var expression;
	        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
	          currentParent.children.push({
	            type: 2,
	            expression: expression,
	            text: text
	          });
	        } else {
	          // #3895 special character
	          text = text.replace(specialNewlineRE, '');
	          currentParent.children.push({
	            type: 3,
	            text: text
	          });
	        }
	      }
	    }
	  });
	  return root
	}

	function processPre (el) {
	  if (getAndRemoveAttr(el, 'v-pre') != null) {
	    el.pre = true;
	  }
	}

	function processRawAttrs (el) {
	  var l = el.attrsList.length;
	  if (l) {
	    var attrs = el.attrs = new Array(l);
	    for (var i = 0; i < l; i++) {
	      attrs[i] = {
	        name: el.attrsList[i].name,
	        value: JSON.stringify(el.attrsList[i].value)
	      };
	    }
	  } else if (!el.pre) {
	    // non root node in pre blocks with no attributes
	    el.plain = true;
	  }
	}

	function processKey (el) {
	  var exp = getBindingAttr(el, 'key');
	  if (exp) {
	    if ("development" !== 'production' && el.tag === 'template') {
	      warn$1("<template> cannot be keyed. Place the key on real elements instead.");
	    }
	    el.key = exp;
	  }
	}

	function processRef (el) {
	  var ref = getBindingAttr(el, 'ref');
	  if (ref) {
	    el.ref = ref;
	    el.refInFor = checkInFor(el);
	  }
	}

	function processFor (el) {
	  var exp;
	  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
	    var inMatch = exp.match(forAliasRE);
	    if (!inMatch) {
	      "development" !== 'production' && warn$1(
	        ("Invalid v-for expression: " + exp)
	      );
	      return
	    }
	    el.for = inMatch[2].trim();
	    var alias = inMatch[1].trim();
	    var iteratorMatch = alias.match(forIteratorRE);
	    if (iteratorMatch) {
	      el.alias = iteratorMatch[1].trim();
	      el.iterator1 = iteratorMatch[2].trim();
	      if (iteratorMatch[3]) {
	        el.iterator2 = iteratorMatch[3].trim();
	      }
	    } else {
	      el.alias = alias;
	    }
	  }
	}

	function processIf (el) {
	  var exp = getAndRemoveAttr(el, 'v-if');
	  if (exp) {
	    el.if = exp;
	  }
	  if (getAndRemoveAttr(el, 'v-else') != null) {
	    el.else = true;
	  }
	}

	function processElse (el, parent) {
	  var prev = findPrevElement(parent.children);
	  if (prev && prev.if) {
	    prev.elseBlock = el;
	  } else {
	    warn$1(
	      ("v-else used on element <" + (el.tag) + "> without corresponding v-if.")
	    );
	  }
	}

	function processOnce (el) {
	  var once = getAndRemoveAttr(el, 'v-once');
	  if (once != null) {
	    el.once = true;
	  }
	}

	function processSlot (el) {
	  if (el.tag === 'slot') {
	    el.slotName = getBindingAttr(el, 'name');
	  } else {
	    var slotTarget = getBindingAttr(el, 'slot');
	    if (slotTarget) {
	      el.slotTarget = slotTarget;
	    }
	  }
	}

	function processComponent (el) {
	  var binding;
	  if ((binding = getBindingAttr(el, 'is'))) {
	    el.component = binding;
	  }
	  if (getAndRemoveAttr(el, 'inline-template') != null) {
	    el.inlineTemplate = true;
	  }
	}

	function processAttrs (el) {
	  var list = el.attrsList;
	  var i, l, name, rawName, value, arg, modifiers, isProp;
	  for (i = 0, l = list.length; i < l; i++) {
	    name = rawName = list[i].name;
	    value = list[i].value;
	    if (dirRE.test(name)) {
	      // mark element as dynamic
	      el.hasBindings = true;
	      // modifiers
	      modifiers = parseModifiers(name);
	      if (modifiers) {
	        name = name.replace(modifierRE, '');
	      }
	      if (bindRE.test(name)) { // v-bind
	        name = name.replace(bindRE, '');
	        if (modifiers && modifiers.prop) {
	          isProp = true;
	          name = camelize(name);
	          if (name === 'innerHtml') { name = 'innerHTML'; }
	        }
	        if (isProp || platformMustUseProp(name)) {
	          addProp(el, name, value);
	        } else {
	          addAttr(el, name, value);
	        }
	      } else if (onRE.test(name)) { // v-on
	        name = name.replace(onRE, '');
	        addHandler(el, name, value, modifiers);
	      } else { // normal directives
	        name = name.replace(dirRE, '');
	        // parse arg
	        var argMatch = name.match(argRE);
	        if (argMatch && (arg = argMatch[1])) {
	          name = name.slice(0, -(arg.length + 1));
	        }
	        addDirective(el, name, rawName, value, arg, modifiers);
	        if ("development" !== 'production' && name === 'model') {
	          checkForAliasModel(el, value);
	        }
	      }
	    } else {
	      // literal attribute
	      {
	        var expression = parseText(value, delimiters);
	        if (expression) {
	          warn$1(
	            name + "=\"" + value + "\": " +
	            'Interpolation inside attributes has been removed. ' +
	            'Use v-bind or the colon shorthand instead. For example, ' +
	            'instead of <div id="{{ val }}">, use <div :id="val">.'
	          );
	        }
	      }
	      addAttr(el, name, JSON.stringify(value));
	    }
	  }
	}

	function checkInFor (el) {
	  var parent = el;
	  while (parent) {
	    if (parent.for !== undefined) {
	      return true
	    }
	    parent = parent.parent;
	  }
	  return false
	}

	function parseModifiers (name) {
	  var match = name.match(modifierRE);
	  if (match) {
	    var ret = {};
	    match.forEach(function (m) { ret[m.slice(1)] = true; });
	    return ret
	  }
	}

	function makeAttrsMap (attrs, isIE) {
	  var map = {};
	  for (var i = 0, l = attrs.length; i < l; i++) {
	    if ("development" !== 'production' && map[attrs[i].name] && !isIE) {
	      warn$1('duplicate attribute: ' + attrs[i].name);
	    }
	    map[attrs[i].name] = attrs[i].value;
	  }
	  return map
	}

	function findPrevElement (children) {
	  var i = children.length;
	  while (i--) {
	    if (children[i].tag) { return children[i] }
	  }
	}

	function isForbiddenTag (el) {
	  return (
	    el.tag === 'style' ||
	    (el.tag === 'script' && (
	      !el.attrsMap.type ||
	      el.attrsMap.type === 'text/javascript'
	    ))
	  )
	}

	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;

	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
	  var res = [];
	  for (var i = 0; i < attrs.length; i++) {
	    var attr = attrs[i];
	    if (!ieNSBug.test(attr.name)) {
	      attr.name = attr.name.replace(ieNSPrefix, '');
	      res.push(attr);
	    }
	  }
	  return res
	}

	function checkForAliasModel (el, value) {
	  var _el = el;
	  while (_el) {
	    if (_el.for && _el.alias === value) {
	      warn$1(
	        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
	        "You are binding v-model directly to a v-for iteration alias. " +
	        "This will not be able to modify the v-for source array because " +
	        "writing to the alias is like modifying a function local variable. " +
	        "Consider using an array of objects and use v-model on an object property instead."
	      );
	    }
	    _el = _el.parent;
	  }
	}

	/*  */

	var isStaticKey;
	var isPlatformReservedTag;

	var genStaticKeysCached = cached(genStaticKeys$1);

	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
	  if (!root) { return }
	  isStaticKey = genStaticKeysCached(options.staticKeys || '');
	  isPlatformReservedTag = options.isReservedTag || (function () { return false; });
	  // first pass: mark all non-static nodes.
	  markStatic(root);
	  // second pass: mark static roots.
	  markStaticRoots(root, false);
	}

	function genStaticKeys$1 (keys) {
	  return makeMap(
	    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
	    (keys ? ',' + keys : '')
	  )
	}

	function markStatic (node) {
	  node.static = isStatic(node);
	  if (node.type === 1) {
	    for (var i = 0, l = node.children.length; i < l; i++) {
	      var child = node.children[i];
	      markStatic(child);
	      if (!child.static) {
	        node.static = false;
	      }
	    }
	  }
	}

	function markStaticRoots (node, isInFor) {
	  if (node.type === 1) {
	    if (node.static || node.once) {
	      node.staticInFor = isInFor;
	    }
	    if (node.static) {
	      node.staticRoot = true;
	      return
	    }
	    if (node.children) {
	      for (var i = 0, l = node.children.length; i < l; i++) {
	        markStaticRoots(node.children[i], isInFor || !!node.for);
	      }
	    }
	  }
	}

	function isStatic (node) {
	  if (node.type === 2) { // expression
	    return false
	  }
	  if (node.type === 3) { // text
	    return true
	  }
	  return !!(node.pre || (
	    !node.hasBindings && // no dynamic bindings
	    !node.if && !node.for && // not v-if or v-for or v-else
	    !isBuiltInTag(node.tag) && // not a built-in
	    isPlatformReservedTag(node.tag) && // not a component
	    !isDirectChildOfTemplateFor(node) &&
	    Object.keys(node).every(isStaticKey)
	  ))
	}

	function isDirectChildOfTemplateFor (node) {
	  while (node.parent) {
	    node = node.parent;
	    if (node.tag !== 'template') {
	      return false
	    }
	    if (node.for) {
	      return true
	    }
	  }
	  return false
	}

	/*  */

	var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

	// keyCode aliases
	var keyCodes = {
	  esc: 27,
	  tab: 9,
	  enter: 13,
	  space: 32,
	  up: 38,
	  left: 37,
	  right: 39,
	  down: 40,
	  'delete': [8, 46]
	};

	var modifierCode = {
	  stop: '$event.stopPropagation();',
	  prevent: '$event.preventDefault();',
	  self: 'if($event.target !== $event.currentTarget)return;'
	};

	function genHandlers (events, native) {
	  var res = native ? 'nativeOn:{' : 'on:{';
	  for (var name in events) {
	    res += "\"" + name + "\":" + (genHandler(events[name])) + ",";
	  }
	  return res.slice(0, -1) + '}'
	}

	function genHandler (
	  handler
	) {
	  if (!handler) {
	    return 'function(){}'
	  } else if (Array.isArray(handler)) {
	    return ("[" + (handler.map(genHandler).join(',')) + "]")
	  } else if (!handler.modifiers) {
	    return simplePathRE.test(handler.value)
	      ? handler.value
	      : ("function($event){" + (handler.value) + "}")
	  } else {
	    var code = '';
	    var keys = [];
	    for (var key in handler.modifiers) {
	      if (modifierCode[key]) {
	        code += modifierCode[key];
	      } else {
	        keys.push(key);
	      }
	    }
	    if (keys.length) {
	      code = genKeyFilter(keys) + code;
	    }
	    var handlerCode = simplePathRE.test(handler.value)
	      ? handler.value + '($event)'
	      : handler.value;
	    return 'function($event){' + code + handlerCode + '}'
	  }
	}

	function genKeyFilter (keys) {
	  var code = keys.length === 1
	    ? normalizeKeyCode(keys[0])
	    : Array.prototype.concat.apply([], keys.map(normalizeKeyCode));
	  if (Array.isArray(code)) {
	    return ("if(" + (code.map(function (c) { return ("$event.keyCode!==" + c); }).join('&&')) + ")return;")
	  } else {
	    return ("if($event.keyCode!==" + code + ")return;")
	  }
	}

	function normalizeKeyCode (key) {
	  return (
	    parseInt(key, 10) || // number keyCode
	    keyCodes[key] || // built-in alias
	    ("_k(" + (JSON.stringify(key)) + ")") // custom alias
	  )
	}

	/*  */

	function bind$2 (el, dir) {
	  el.wrapData = function (code) {
	    return ("_b(" + code + "," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
	  };
	}

	var baseDirectives = {
	  bind: bind$2,
	  cloak: noop
	};

	/*  */

	// configurable state
	var warn$2;
	var transforms$1;
	var dataGenFns;
	var platformDirectives$1;
	var staticRenderFns;
	var onceCount;
	var currentOptions;

	function generate (
	  ast,
	  options
	) {
	  // save previous staticRenderFns so generate calls can be nested
	  var prevStaticRenderFns = staticRenderFns;
	  var currentStaticRenderFns = staticRenderFns = [];
	  var prevOnceCount = onceCount;
	  onceCount = 0;
	  currentOptions = options;
	  warn$2 = options.warn || baseWarn;
	  transforms$1 = pluckModuleFunction(options.modules, 'transformCode');
	  dataGenFns = pluckModuleFunction(options.modules, 'genData');
	  platformDirectives$1 = options.directives || {};
	  var code = ast ? genElement(ast) : '_h("div")';
	  staticRenderFns = prevStaticRenderFns;
	  onceCount = prevOnceCount;
	  return {
	    render: ("with(this){return " + code + "}"),
	    staticRenderFns: currentStaticRenderFns
	  }
	}

	function genElement (el) {
	  if (el.staticRoot && !el.staticProcessed) {
	    return genStatic(el)
	  } else if (el.once && !el.onceProcessed) {
	    return genOnce(el)
	  } else if (el.for && !el.forProcessed) {
	    return genFor(el)
	  } else if (el.if && !el.ifProcessed) {
	    return genIf(el)
	  } else if (el.tag === 'template' && !el.slotTarget) {
	    return genChildren(el) || 'void 0'
	  } else if (el.tag === 'slot') {
	    return genSlot(el)
	  } else {
	    // component or element
	    var code;
	    if (el.component) {
	      code = genComponent(el.component, el);
	    } else {
	      var data = el.plain ? undefined : genData(el);

	      var children = el.inlineTemplate ? null : genChildren(el);
	      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
	    }
	    // module transforms
	    for (var i = 0; i < transforms$1.length; i++) {
	      code = transforms$1[i](el, code);
	    }
	    return code
	  }
	}

	// hoist static sub-trees out
	function genStatic (el) {
	  el.staticProcessed = true;
	  staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"));
	  return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}

	// v-once
	function genOnce (el) {
	  el.onceProcessed = true;
	  if (el.staticInFor) {
	    var key = '';
	    var parent = el.parent;
	    while (parent) {
	      if (parent.for) {
	        key = parent.key;
	        break
	      }
	      parent = parent.parent;
	    }
	    if (!key) {
	      "development" !== 'production' && warn$2(
	        "v-once can only be used inside v-for that is keyed. "
	      );
	      return genElement(el)
	    }
	    return ("_o(" + (genElement(el)) + "," + (onceCount++) + (key ? ("," + key) : "") + ")")
	  } else {
	    return genStatic(el)
	  }
	}

	function genIf (el) {
	  var exp = el.if;
	  el.ifProcessed = true; // avoid recursion
	  return ("(" + exp + ")?" + (genElement(el)) + ":" + (genElse(el)))
	}

	function genElse (el) {
	  return el.elseBlock
	    ? genElement(el.elseBlock)
	    : '_e()'
	}

	function genFor (el) {
	  var exp = el.for;
	  var alias = el.alias;
	  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
	  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
	  el.forProcessed = true; // avoid recursion
	  return "_l((" + exp + ")," +
	    "function(" + alias + iterator1 + iterator2 + "){" +
	      "return " + (genElement(el)) +
	    '})'
	}

	function genData (el) {
	  var data = '{';

	  // directives first.
	  // directives may mutate the el's other properties before they are generated.
	  var dirs = genDirectives(el);
	  if (dirs) { data += dirs + ','; }

	  // key
	  if (el.key) {
	    data += "key:" + (el.key) + ",";
	  }
	  // ref
	  if (el.ref) {
	    data += "ref:" + (el.ref) + ",";
	  }
	  if (el.refInFor) {
	    data += "refInFor:true,";
	  }
	  // record original tag name for components using "is" attribute
	  if (el.component) {
	    data += "tag:\"" + (el.tag) + "\",";
	  }
	  // slot target
	  if (el.slotTarget) {
	    data += "slot:" + (el.slotTarget) + ",";
	  }
	  // module data generation functions
	  for (var i = 0; i < dataGenFns.length; i++) {
	    data += dataGenFns[i](el);
	  }
	  // attributes
	  if (el.attrs) {
	    data += "attrs:{" + (genProps(el.attrs)) + "},";
	  }
	  // DOM props
	  if (el.props) {
	    data += "domProps:{" + (genProps(el.props)) + "},";
	  }
	  // event handlers
	  if (el.events) {
	    data += (genHandlers(el.events)) + ",";
	  }
	  if (el.nativeEvents) {
	    data += (genHandlers(el.nativeEvents, true)) + ",";
	  }
	  // inline-template
	  if (el.inlineTemplate) {
	    var ast = el.children[0];
	    if ("development" !== 'production' && (
	      el.children.length > 1 || ast.type !== 1
	    )) {
	      warn$2('Inline-template components must have exactly one child element.');
	    }
	    if (ast.type === 1) {
	      var inlineRenderFns = generate(ast, currentOptions);
	      data += "inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}";
	    }
	  }
	  data = data.replace(/,$/, '') + '}';
	  // v-bind data wrap
	  if (el.wrapData) {
	    data = el.wrapData(data);
	  }
	  return data
	}

	function genDirectives (el) {
	  var dirs = el.directives;
	  if (!dirs) { return }
	  var res = 'directives:[';
	  var hasRuntime = false;
	  var i, l, dir, needRuntime;
	  for (i = 0, l = dirs.length; i < l; i++) {
	    dir = dirs[i];
	    needRuntime = true;
	    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name];
	    if (gen) {
	      // compile-time directive that manipulates AST.
	      // returns true if it also needs a runtime counterpart.
	      needRuntime = !!gen(el, dir, warn$2);
	    }
	    if (needRuntime) {
	      hasRuntime = true;
	      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
	    }
	  }
	  if (hasRuntime) {
	    return res.slice(0, -1) + ']'
	  }
	}

	function genChildren (el) {
	  if (el.children.length) {
	    return '[' + el.children.map(genNode).join(',') + ']'
	  }
	}

	function genNode (node) {
	  if (node.type === 1) {
	    return genElement(node)
	  } else {
	    return genText(node)
	  }
	}

	function genText (text) {
	  return text.type === 2
	    ? text.expression // no need for () because already wrapped in _s()
	    : JSON.stringify(text.text)
	}

	function genSlot (el) {
	  var slotName = el.slotName || '"default"';
	  var children = genChildren(el);
	  return ("_t(" + slotName + (children ? ("," + children) : '') + ")")
	}

	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
	function genComponent (componentName, el) {
	  var children = el.inlineTemplate ? null : genChildren(el);
	  return ("_h(" + componentName + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
	}

	function genProps (props) {
	  var res = '';
	  for (var i = 0; i < props.length; i++) {
	    var prop = props[i];
	    res += "\"" + (prop.name) + "\":" + (prop.value) + ",";
	  }
	  return res.slice(0, -1)
	}

	/*  */

	/**
	 * Compile a template.
	 */
	function compile$1 (
	  template,
	  options
	) {
	  var ast = parse(template.trim(), options);
	  optimize(ast, options);
	  var code = generate(ast, options);
	  return {
	    ast: ast,
	    render: code.render,
	    staticRenderFns: code.staticRenderFns
	  }
	}

	/*  */

	// operators like typeof, instanceof and in are allowed
	var prohibitedKeywordRE = new RegExp('\\b' + (
	  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
	  'super,throw,while,yield,delete,export,import,return,switch,default,' +
	  'extends,finally,continue,debugger,function,arguments'
	).split(',').join('\\b|\\b') + '\\b');
	// check valid identifier for v-for
	var identRE = /[A-Za-z_$][\w$]*/;
	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

	// detect problematic expressions in a template
	function detectErrors (ast) {
	  var errors = [];
	  if (ast) {
	    checkNode(ast, errors);
	  }
	  return errors
	}

	function checkNode (node, errors) {
	  if (node.type === 1) {
	    for (var name in node.attrsMap) {
	      if (dirRE.test(name)) {
	        var value = node.attrsMap[name];
	        if (value) {
	          if (name === 'v-for') {
	            checkFor(node, ("v-for=\"" + value + "\""), errors);
	          } else {
	            checkExpression(value, (name + "=\"" + value + "\""), errors);
	          }
	        }
	      }
	    }
	    if (node.children) {
	      for (var i = 0; i < node.children.length; i++) {
	        checkNode(node.children[i], errors);
	      }
	    }
	  } else if (node.type === 2) {
	    checkExpression(node.expression, node.text, errors);
	  }
	}

	function checkFor (node, text, errors) {
	  checkExpression(node.for || '', text, errors);
	  checkIdentifier(node.alias, 'v-for alias', text, errors);
	  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
	  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
	}

	function checkIdentifier (ident, type, text, errors) {
	  if (typeof ident === 'string' && !identRE.test(ident)) {
	    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text));
	  }
	}

	function checkExpression (exp, text, errors) {
	  try {
	    new Function(("return " + exp));
	  } catch (e) {
	    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
	    if (keywordMatch) {
	      errors.push(
	        "- avoid using JavaScript keyword as property name: " +
	        "\"" + (keywordMatch[0]) + "\" in expression " + text
	      );
	    } else {
	      errors.push(("- invalid expression: " + text));
	    }
	  }
	}

	/*  */

	function transformNode (el, options) {
	  var warn = options.warn || baseWarn;
	  var staticClass = getAndRemoveAttr(el, 'class');
	  if ("development" !== 'production' && staticClass) {
	    var expression = parseText(staticClass, options.delimiters);
	    if (expression) {
	      warn(
	        "class=\"" + staticClass + "\": " +
	        'Interpolation inside attributes has been removed. ' +
	        'Use v-bind or the colon shorthand instead. For example, ' +
	        'instead of <div class="{{ val }}">, use <div :class="val">.'
	      );
	    }
	  }
	  if (staticClass) {
	    el.staticClass = JSON.stringify(staticClass);
	  }
	  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
	  if (classBinding) {
	    el.classBinding = classBinding;
	  }
	}

	function genData$1 (el) {
	  var data = '';
	  if (el.staticClass) {
	    data += "staticClass:" + (el.staticClass) + ",";
	  }
	  if (el.classBinding) {
	    data += "class:" + (el.classBinding) + ",";
	  }
	  return data
	}

	var klass$1 = {
	  staticKeys: ['staticClass'],
	  transformNode: transformNode,
	  genData: genData$1
	};

	/*  */

	function transformNode$1 (el) {
	  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
	  if (styleBinding) {
	    el.styleBinding = styleBinding;
	  }
	}

	function genData$2 (el) {
	  return el.styleBinding
	    ? ("style:(" + (el.styleBinding) + "),")
	    : ''
	}

	var style$1 = {
	  transformNode: transformNode$1,
	  genData: genData$2
	};

	var modules$1 = [
	  klass$1,
	  style$1
	];

	/*  */

	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;

	/**
	 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
	 *
	 * for loop possible cases:
	 *
	 * - test
	 * - test[idx]
	 * - test[test1[idx]]
	 * - test["a"][idx]
	 * - xxx.test[a[a].test1[idx]]
	 * - test.xxx.a["asa"][test1[idx]]
	 *
	 */

	function parseModel (val) {
	  str = val;
	  len = str.length;
	  index$1 = expressionPos = expressionEndPos = 0;

	  if (val.indexOf('[') < 0) {
	    return {
	      exp: val,
	      idx: null
	    }
	  }

	  while (!eof()) {
	    chr = next();
	    /* istanbul ignore if */
	    if (isStringStart(chr)) {
	      parseString(chr);
	    } else if (chr === 0x5B) {
	      parseBracket(chr);
	    }
	  }

	  return {
	    exp: val.substring(0, expressionPos),
	    idx: val.substring(expressionPos + 1, expressionEndPos)
	  }
	}

	function next () {
	  return str.charCodeAt(++index$1)
	}

	function eof () {
	  return index$1 >= len
	}

	function isStringStart (chr) {
	  return chr === 0x22 || chr === 0x27
	}

	function parseBracket (chr) {
	  var inBracket = 1;
	  expressionPos = index$1;
	  while (!eof()) {
	    chr = next();
	    if (isStringStart(chr)) {
	      parseString(chr);
	      continue
	    }
	    if (chr === 0x5B) { inBracket++; }
	    if (chr === 0x5D) { inBracket--; }
	    if (inBracket === 0) {
	      expressionEndPos = index$1;
	      break
	    }
	  }
	}

	function parseString (chr) {
	  var stringQuote = chr;
	  while (!eof()) {
	    chr = next();
	    if (chr === stringQuote) {
	      break
	    }
	  }
	}

	/*  */

	var warn$3;

	function model$1 (
	  el,
	  dir,
	  _warn
	) {
	  warn$3 = _warn;
	  var value = dir.value;
	  var modifiers = dir.modifiers;
	  var tag = el.tag;
	  var type = el.attrsMap.type;
	  {
	    var dynamicType = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
	    if (tag === 'input' && dynamicType) {
	      warn$3(
	        "<input :type=\"" + dynamicType + "\" v-model=\"" + value + "\">:\n" +
	        "v-model does not support dynamic input types. Use v-if branches instead."
	      );
	    }
	  }
	  if (tag === 'select') {
	    genSelect(el, value, modifiers);
	  } else if (tag === 'input' && type === 'checkbox') {
	    genCheckboxModel(el, value, modifiers);
	  } else if (tag === 'input' && type === 'radio') {
	    genRadioModel(el, value, modifiers);
	  } else {
	    genDefaultModel(el, value, modifiers);
	  }
	  // ensure runtime directive metadata
	  return true
	}

	function genCheckboxModel (
	  el,
	  value,
	  modifiers
	) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
	  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
	  addProp(el, 'checked',
	    "Array.isArray(" + value + ")" +
	      "?_i(" + value + "," + valueBinding + ")>-1" +
	      ":_q(" + value + "," + trueValueBinding + ")"
	  );
	  addHandler(el, 'change',
	    "var $$a=" + value + "," +
	        '$$el=$event.target,' +
	        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
	    'if(Array.isArray($$a)){' +
	      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
	          '$$i=_i($$a,$$v);' +
	      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
	      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
	    "}else{" + value + "=$$c}",
	    null, true
	  );
	}

	function genRadioModel (
	    el,
	    value,
	    modifiers
	) {
	  if ("development" !== 'production' &&
	    el.attrsMap.checked != null) {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
	      "inline checked attributes will be ignored when using v-model. " +
	      'Declare initial values in the component\'s data option instead.'
	    );
	  }
	  var number = modifiers && modifiers.number;
	  var valueBinding = getBindingAttr(el, 'value') || 'null';
	  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
	  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
	  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
	}

	function genDefaultModel (
	  el,
	  value,
	  modifiers
	) {
	  {
	    if (el.tag === 'input' && el.attrsMap.value) {
	      warn$3(
	        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
	        'inline value attributes will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	    if (el.tag === 'textarea' && el.children.length) {
	      warn$3(
	        "<textarea v-model=\"" + value + "\">:\n" +
	        'inline content inside <textarea> will be ignored when using v-model. ' +
	        'Declare initial values in the component\'s data option instead.'
	      );
	    }
	  }

	  var type = el.attrsMap.type;
	  var ref = modifiers || {};
	  var lazy = ref.lazy;
	  var number = ref.number;
	  var trim = ref.trim;
	  var event = lazy || (isIE && type === 'range') ? 'change' : 'input';
	  var needCompositionGuard = !lazy && type !== 'range';
	  var isNative = el.tag === 'input' || el.tag === 'textarea';

	  var valueExpression = isNative
	    ? ("$event.target.value" + (trim ? '.trim()' : ''))
	    : "$event";
	  valueExpression = number || type === 'number'
	    ? ("_n(" + valueExpression + ")")
	    : valueExpression;
	  var code = genAssignmentCode(value, valueExpression);
	  if (isNative && needCompositionGuard) {
	    code = "if($event.target.composing)return;" + code;
	  }
	  // inputs with type="file" are read only and setting the input's
	  // value will throw an error.
	  if ("development" !== 'production' &&
	      type === 'file') {
	    warn$3(
	      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
	      "File inputs are read only. Use a v-on:change listener instead."
	    );
	  }
	  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"));
	  addHandler(el, event, code, null, true);
	}

	function genSelect (
	    el,
	    value,
	    modifiers
	) {
	  {
	    el.children.some(checkOptionWarning);
	  }

	  var number = modifiers && modifiers.number;
	  var assignment = "Array.prototype.filter" +
	    ".call($event.target.options,function(o){return o.selected})" +
	    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
	    "return " + (number ? '_n(val)' : 'val') + "})" +
	    (el.attrsMap.multiple == null ? '[0]' : '');

	  var code = genAssignmentCode(value, assignment);
	  addHandler(el, 'change', code, null, true);
	}

	function checkOptionWarning (option) {
	  if (option.type === 1 &&
	    option.tag === 'option' &&
	    option.attrsMap.selected != null) {
	    warn$3(
	      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
	      'inline selected attributes on <option> will be ignored when using v-model. ' +
	      'Declare initial values in the component\'s data option instead.'
	    );
	    return true
	  }
	  return false
	}

	function genAssignmentCode (value, assignment) {
	  var modelRs = parseModel(value);
	  if (modelRs.idx === null) {
	    return (value + "=" + assignment)
	  } else {
	    return "var $$exp = " + (modelRs.exp) + ", $$idx = " + (modelRs.idx) + ";" +
	      "if (!Array.isArray($$exp)){" +
	        value + "=" + assignment + "}" +
	      "else{$$exp.splice($$idx, 1, " + assignment + ")}"
	  }
	}

	/*  */

	function text (el, dir) {
	  if (dir.value) {
	    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
	  }
	}

	/*  */

	function html (el, dir) {
	  if (dir.value) {
	    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
	  }
	}

	var directives$1 = {
	  model: model$1,
	  text: text,
	  html: html
	};

	/*  */

	var cache = Object.create(null);

	var baseOptions = {
	  isIE: isIE,
	  expectHTML: true,
	  modules: modules$1,
	  staticKeys: genStaticKeys(modules$1),
	  directives: directives$1,
	  isReservedTag: isReservedTag,
	  isUnaryTag: isUnaryTag,
	  mustUseProp: mustUseProp,
	  getTagNamespace: getTagNamespace,
	  isPreTag: isPreTag
	};

	function compile$$1 (
	  template,
	  options
	) {
	  options = options
	    ? extend(extend({}, baseOptions), options)
	    : baseOptions;
	  return compile$1(template, options)
	}

	function compileToFunctions (
	  template,
	  options,
	  vm
	) {
	  var _warn = (options && options.warn) || warn;
	  // detect possible CSP restriction
	  /* istanbul ignore if */
	  {
	    try {
	      new Function('return 1');
	    } catch (e) {
	      if (e.toString().match(/unsafe-eval|CSP/)) {
	        _warn(
	          'It seems you are using the standalone build of Vue.js in an ' +
	          'environment with Content Security Policy that prohibits unsafe-eval. ' +
	          'The template compiler cannot work in this environment. Consider ' +
	          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
	          'templates into render functions.'
	        );
	      }
	    }
	  }
	  var key = options && options.delimiters
	    ? String(options.delimiters) + template
	    : template;
	  if (cache[key]) {
	    return cache[key]
	  }
	  var res = {};
	  var compiled = compile$$1(template, options);
	  res.render = makeFunction(compiled.render);
	  var l = compiled.staticRenderFns.length;
	  res.staticRenderFns = new Array(l);
	  for (var i = 0; i < l; i++) {
	    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i]);
	  }
	  {
	    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
	      _warn(
	        "failed to compile template:\n\n" + template + "\n\n" +
	        detectErrors(compiled.ast).join('\n') +
	        '\n\n',
	        vm
	      );
	    }
	  }
	  return (cache[key] = res)
	}

	function makeFunction (code) {
	  try {
	    return new Function(code)
	  } catch (e) {
	    return noop
	  }
	}

	/*  */

	var idToTemplate = cached(function (id) {
	  var el = query(id);
	  return el && el.innerHTML
	});

	var mount = Vue$2.prototype.$mount;
	Vue$2.prototype.$mount = function (
	  el,
	  hydrating
	) {
	  el = el && query(el);

	  /* istanbul ignore if */
	  if (el === document.body || el === document.documentElement) {
	    "development" !== 'production' && warn(
	      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
	    );
	    return this
	  }

	  var options = this.$options;
	  // resolve template/el and convert to render function
	  if (!options.render) {
	    var template = options.template;
	    if (template) {
	      if (typeof template === 'string') {
	        if (template.charAt(0) === '#') {
	          template = idToTemplate(template);
	        }
	      } else if (template.nodeType) {
	        template = template.innerHTML;
	      } else {
	        {
	          warn('invalid template option:' + template, this);
	        }
	        return this
	      }
	    } else if (el) {
	      template = getOuterHTML(el);
	    }
	    if (template) {
	      var ref = compileToFunctions(template, {
	        warn: warn,
	        shouldDecodeNewlines: shouldDecodeNewlines,
	        delimiters: options.delimiters
	      }, this);
	      var render = ref.render;
	      var staticRenderFns = ref.staticRenderFns;
	      options.render = render;
	      options.staticRenderFns = staticRenderFns;
	    }
	  }
	  return mount.call(this, el, hydrating)
	};

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
	  if (el.outerHTML) {
	    return el.outerHTML
	  } else {
	    var container = document.createElement('div');
	    container.appendChild(el.cloneNode(true));
	    return container.innerHTML
	  }
	}

	Vue$2.compile = compileToFunctions;

	return Vue$2;

	})));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(10)
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lanou/Desktop/国星/route/myHead.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-05ab8ad8&file=myHead.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./myHead.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-05ab8ad8&file=myHead.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./myHead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "[v-cloak][_v-05ab8ad8] {\n  display: none; }\n\n.myHead .top[_v-05ab8ad8] {\n  height: 105px;\n  background: url(http://www.ahgxny.com/Templates/xl2015/images/HEAD1.jpg) no-repeat center; }\n\n.myHead .nav[_v-05ab8ad8] {\n  width: 100%;\n  height: 47px;\n  background: #000;\n  position: relative;\n  z-index: 1; }\n  .myHead .nav .nav_list[_v-05ab8ad8] {\n    width: 1160px;\n    margin: 0 auto; }\n    .myHead .nav .nav_list li[_v-05ab8ad8] {\n      padding-left: 7px;\n      padding-right: 5px;\n      float: left; }\n      .myHead .nav .nav_list li a[_v-05ab8ad8] {\n        color: white;\n        display: block;\n        width: 132px;\n        height: 54px;\n        text-align: center;\n        line-height: 54px;\n        font-weight: bold; }\n        .myHead .nav .nav_list li a[_v-05ab8ad8]:hover {\n          background: url(" + __webpack_require__(6) + "); }\n\n.myHead .lunbo[_v-05ab8ad8] {\n  position: relative;\n  width: 1960px;\n  height: 615px;\n  left: 50%;\n  margin-left: -980px; }\n  .myHead .lunbo a[_v-05ab8ad8] {\n    display: block;\n    height: 615px;\n    position: absolute;\n    opacity: 0;\n    filter: alpha(opacity=0); }\n    .myHead .lunbo a img[_v-05ab8ad8] {\n      width: 100%;\n      height: 100%; }\n  .myHead .lunbo .first a[_v-05ab8ad8] {\n    opacity: 1;\n    filter: alpha(opacity=100); }\n  .myHead .lunbo ol[_v-05ab8ad8] {\n    position: absolute;\n    bottom: 32px;\n    left: 960px;\n    overflow: hidden; }\n    .myHead .lunbo ol li[_v-05ab8ad8] {\n      width: 14px;\n      height: 14px;\n      border-radius: 50%;\n      margin: 0 7px;\n      background: #d9d9d9;\n      float: left; }\n      .myHead .lunbo ol li[_v-05ab8ad8]:hover {\n        background: #3a7d18; }\n    .myHead .lunbo ol .active[_v-05ab8ad8] {\n      background: #3a7d18; }\n\n.myHead .pre[_v-05ab8ad8], .myHead .next[_v-05ab8ad8] {\n  position: absolute;\n  top: 40%;\n  left: 330px;\n  width: 54px;\n  height: 94px;\n  cursor: pointer;\n  background: url(" + __webpack_require__(7) + ") no-repeat; }\n\n.myHead .next[_v-05ab8ad8] {\n  left: auto;\n  right: 330px;\n  background: url(" + __webpack_require__(8) + ") no-repeat; }\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <script>
	exports.default = {
		data: function data() {
			return {};
		},

		props: [],
		methods: {
			toHome: function (_toHome) {
				function toHome() {
					return _toHome.apply(this, arguments);
				}

				toHome.toString = function () {
					return _toHome.toString();
				};

				return toHome;
			}(function () {
				this.$emit(toHome);
			}),
			toOther: function (_toOther) {
				function toOther() {
					return _toOther.apply(this, arguments);
				}

				toOther.toString = function () {
					return _toOther.toString();
				};

				return toOther;
			}(function () {
				this.$emit(toOther);
			})
		}
	};


	$(function () {
		var opTimer = null;
		var timer = null;
		var n = 0;
		var length = $('.lunbo ol li').length;
		$('.lunbo .pre').click(pre);
		$('.lunbo .next').click(next);

		$('.dot li').click(function () {
			n = $(this).index();
			opChange();
		});
		clearInterval(opTimer);
		timer = setInterval(function () {
			next();
		}, 3000);

		function pre() {
			n--;
			if (n < 0) {
				n = length - 1;
			}
			opChange();
		}

		function next() {
			n++;
			if (n == length) {
				n = 0;
			}
			opChange();
		}
		function opChange() {
			$('.pic a').css({
				opacity: 0,
				filter: 'alpha(opacity=0)'
			});
			$('.dot li').removeClass('active');
			clearInterval(opTimer);
			opTimer = setInterval(function () {
				$('.pic a').eq(n).css({
					opacity: '+=0.05',
					filter: 'alpha(opacity=' + '+=0.5' + ')'
				});
				if ($('.pic a').eq(n).css('opacity') >= 1) {
					clearInterval(opTimer);
				}
			}, 50);
			$('.dot li').eq(n).addClass('active');
		}
	});
	// </script>
	//
	// <template>
	// 	<div class="myHead">
	// 		<!-- webpack压缩js后有的背景图片以tools开头失效,改为网络图片后OK，不然就用img代替 -->
	//         <div class="top"></div>
	//         <div class="nav" v-cloak>
	//             <ul class="nav_list">
	//             <li><a href="index.html">网站首页</a></li>
	//             <li><a href='manor.html'>庄园简介</a></li>
	//             <li><a href='news.html'>新闻资讯</a></li>
	//             <li><a href='product.html'>产品展示</a></li>
	//             <li><a href='grape.html'>葡萄园风光</a></li>
	//             <li><a href='technology.html'>科技知识</a></li>
	//             <li><a href='message.html'>在线留言</a></li>
	//             <li><a href='concat.html'>联系我们</a></li>
	//         </ul>
	//         </div>
	//         <div class="lunbo">
	//             <ul class="pic">
	//                 <li class="first">
	//                     <a href="" target="_blank">
	//                         <img src="http://www.ahgxny.com/Templates/xl2015/images/G_08.jpg" alt="">
	//                     </a>
	//                 </li>
	//                 <li>
	//                     <a href="" target="_blank">
	//                         <img src="http://www.ahgxny.com/upLoad/slide/month_1509/201509220813119479.jpg" alt="">
	//                     </a>
	//                 </li>
	//                 <li>
	//                     <a href="" target="_blank">
	//                         <img src="http://www.ahgxny.com/upLoad/slide/month_1510/201510191533078701.jpg" alt="">
	//                     </a>
	//                 </li>
	//             </ul>
	//             <ol class="dot">
	//                 <li class="active"></li>
	//                 <li></li>
	//                 <li></li>
	//             </ol>
	//             <div class="pre"></div>
	//             <div class="next"></div>
	//         </div>
	//     </div>
	// </template>
	//
	// <style lang="sass" scoped>
	// 	$themColor:#558f1a;
	// 	[v-cloak]{
	// 		display: none;
	// 	}
	// 	.myHead{
	// 		.top{
	// 			height: 105px;
	// 			background:url(http://www.ahgxny.com/Templates/xl2015/images/HEAD1.jpg) no-repeat center; 
	// 		} 
	// 		.nav{
	// 			width:100%;
	// 			height:47px;
	// 			background: #000;
	// 			position:relative;
	// 			z-index: 1;
	// 			.nav_list{
	// 				width:1160px;
	// 				margin:0 auto;
	// 				li{
	// 					padding-left: 7px;
	// 					padding-right: 5px;
	// 					float: left;
	// 					a{
	// 						color:white;
	// 						display: block;
	// 						width:132px;
	// 						height:54px;
	// 						text-align: center;
	// 						line-height: 54px;
	// 						font-weight: bold;
	// 						&:hover{
	// 							background: url(../dest/img/LI.png);
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	//
	// 		.lunbo{
	// 			position:relative;
	// 			width:1960px;
	// 			height:615px;
	// 			left:50%;
	// 			margin-left: -980px;
	// 			a{
	// 				display:block;
	// 				height:615px;	
	// 				position: absolute;
	// 				opacity:0;
	// 				filter:alpha(opacity=0);
	// 				img{
	// 					width:100%;
	// 					height:100%;
	// 				}
	// 			}
	// 			.first a{
	// 				opacity:1;
	// 				filter:alpha(opacity=100);
	// 			}
	// 			ol{
	// 				position:absolute;
	// 				bottom: 32px;
	// 				left:960px;
	// 				overflow: hidden;
	// 				li{
	// 					width:14px;
	// 					height:14px;
	// 					border-radius: 50%;
	// 					margin: 0 7px;
	// 					background:rgb(217,217,217);
	// 					float:left;
	// 					&:hover{
	// 						background: #3a7d18;
	// 					}
	// 				}
	// 				.active{
	// 					background: #3a7d18;
	// 				}
	// 			}
	// 		}
	// 		.pre,.next{
	// 			position:absolute;
	// 			top:40%;
	// 			left:330px;
	// 			width:54px;
	// 			height:94px;
	// 			cursor: pointer;
	// 			background: url(../dest/img/lr1.png) no-repeat;
	// 		}
	// 		.next{
	// 			left:auto;
	// 			right: 330px;
	// 			background: url(../dest/img/lr2.png) no-repeat;
	// 		}
	// 	}
	// </style>

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"myHead\" _v-05ab8ad8=\"\">\n\t\t<!-- webpack压缩js后有的背景图片以tools开头失效,改为网络图片后OK，不然就用img代替 -->\n        <div class=\"top\" _v-05ab8ad8=\"\"></div>\n        <div class=\"nav\" v-cloak=\"\" _v-05ab8ad8=\"\">\n            <ul class=\"nav_list\" _v-05ab8ad8=\"\">\n            <li _v-05ab8ad8=\"\"><a href=\"index.html\" _v-05ab8ad8=\"\">网站首页</a></li>\n            <li _v-05ab8ad8=\"\"><a href=\"manor.html\" _v-05ab8ad8=\"\">庄园简介</a></li>\n            <li _v-05ab8ad8=\"\"><a href=\"news.html\" _v-05ab8ad8=\"\">新闻资讯</a></li>\n            <li _v-05ab8ad8=\"\"><a href=\"product.html\" _v-05ab8ad8=\"\">产品展示</a></li>\n            <li _v-05ab8ad8=\"\"><a href=\"grape.html\" _v-05ab8ad8=\"\">葡萄园风光</a></li>\n            <li _v-05ab8ad8=\"\"><a href=\"technology.html\" _v-05ab8ad8=\"\">科技知识</a></li>\n            <li _v-05ab8ad8=\"\"><a href=\"message.html\" _v-05ab8ad8=\"\">在线留言</a></li>\n            <li _v-05ab8ad8=\"\"><a href=\"concat.html\" _v-05ab8ad8=\"\">联系我们</a></li>\n        </ul>\n        </div>\n        <div class=\"lunbo\" _v-05ab8ad8=\"\">\n            <ul class=\"pic\" _v-05ab8ad8=\"\">\n                <li class=\"first\" _v-05ab8ad8=\"\">\n                    <a href=\"\" target=\"_blank\" _v-05ab8ad8=\"\">\n                        <img src=\"http://www.ahgxny.com/Templates/xl2015/images/G_08.jpg\" alt=\"\" _v-05ab8ad8=\"\">\n                    </a>\n                </li>\n                <li _v-05ab8ad8=\"\">\n                    <a href=\"\" target=\"_blank\" _v-05ab8ad8=\"\">\n                        <img src=\"http://www.ahgxny.com/upLoad/slide/month_1509/201509220813119479.jpg\" alt=\"\" _v-05ab8ad8=\"\">\n                    </a>\n                </li>\n                <li _v-05ab8ad8=\"\">\n                    <a href=\"\" target=\"_blank\" _v-05ab8ad8=\"\">\n                        <img src=\"http://www.ahgxny.com/upLoad/slide/month_1510/201510191533078701.jpg\" alt=\"\" _v-05ab8ad8=\"\">\n                    </a>\n                </li>\n            </ul>\n            <ol class=\"dot\" _v-05ab8ad8=\"\">\n                <li class=\"active\" _v-05ab8ad8=\"\"></li>\n                <li _v-05ab8ad8=\"\"></li>\n                <li _v-05ab8ad8=\"\"></li>\n            </ol>\n            <div class=\"pre\" _v-05ab8ad8=\"\"></div>\n            <div class=\"next\" _v-05ab8ad8=\"\"></div>\n        </div>\n    </div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(18)
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lanou/Desktop/国星/route/left.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-351d6f6f&file=left.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./left.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-351d6f6f&file=left.vue&scoped=true!./../node_modules/sass-loader/index.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./left.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.left[_v-351d6f6f] {\n  width: 295px;\n  float: left; }\n  .left h1[_v-351d6f6f] {\n    height: 113px;\n    background: url(" + __webpack_require__(15) + ") no-repeat;\n    font-size: 30px;\n    font-family: '\\5FAE\\8F6F\\7B80\\7C97\\9ED1';\n    color: white;\n    text-align: center;\n    line-height: 113px; }\n  .left .left_top[_v-351d6f6f] {\n    width: 295px;\n    height: 482px;\n    padding-bottom: 30px; }\n    .left .left_top ul[_v-351d6f6f] {\n      padding: 0 15px 15px;\n      background: #468b00;\n      overflow: hidden; }\n      .left .left_top ul li[_v-351d6f6f] {\n        margin-top: 15px;\n        padding-left: 30px;\n        line-height: 44px;\n        font-size: 18px;\n        color: #333;\n        background: url(" + __webpack_require__(16) + ");\n        cursor: pointer; }\n        .left .left_top ul li[_v-351d6f6f]:hover {\n          background: url(" + __webpack_require__(17) + ") no-repeat; }\n        .left .left_top ul li a[_v-351d6f6f] {\n          display: block; }\n  .left .left_bottom .box[_v-351d6f6f] {\n    padding: 0 15px 15px;\n    background: #468b00;\n    height: 264px;\n    overflow: hidden; }\n    .left .left_bottom .box a[_v-351d6f6f] {\n      overflow: hidden;\n      display: block;\n      margin-bottom: 10px; }\n    .left .left_bottom .box dt[_v-351d6f6f] {\n      line-height: 28px;\n      text-align: center;\n      color: white;\n      font-size: 14px; }\n    .left .left_bottom .box dd[_v-351d6f6f] {\n      height: 44px;\n      line-height: 20px;\n      color: #b7d29c;\n      font-size: 12px;\n      border-bottom: 1px dashed white;\n      padding-bottom: 10px; }\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAQwAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABQMDAwMDBQMDBQcEBAQHCAYFBQYICQcHCAcHCQsJCgoKCgkLCwwMDAwMCw4ODg4ODhQUFBQUFhYWFhYWFhYWFgEFBQUJCAkRCwsRFA8ODxQWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYW/8AAEQgALAEIAwERAAIRAQMRAf/EAE8AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQEBAAAAAAAAAAAAAAAAAAIFCBABAAAAAAAAAAAAAAAAAAAAABEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1Ny+3gFQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFrAVCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWsBUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARawFQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFrAVCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWsBUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAQwAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABQMDAwMDBQMDBQcEBAQHCAYFBQYICQcHCAcHCQsJCgoKCgkLCwwMDAwMCw4ODg4ODhQUFBQUFhYWFhYWFhYWFgEFBQUJCAkRCwsRFA8ODxQWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYW/8AAEQgALAEIAwERAAIRAQMRAf/EAFkAAQEBAAMAAAAAAAAAAAAAAAADBAECBwEBAQEBAQEBAAAAAAAAAAAAAAMCAQcFCBABAQEBAAAAAAAAAAAAAAAAAAIDAREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/APVH5cfbAAAAAAAAAAABx1p2OVKm4zUrbjFRtuMVC1IxULUidZ9FYnWfRSJ1n0VidZ9FInWfRWJVm0UidQ0VidZ9FInULUjFRtSMVG24xUqbjFT60y4B7685egAAAAAAAAAAAA4607HKlTcZqVtxio23GKhakYqGikTrPorE6z6KROs+isTrPopE6z6KxKs2ikTqGisTrPopE6hakYqNqRio23GKlTcYqfWmXAPfXnL0AAAAAAAAAAAAHHWnY5UqbjNStuMVG24xULUjFQ0UidZ9FYnWfRSJ1n0VidZ9FInWfRWJVm0UidQ0VidZ9FInULUjFRtSMVG24xUqbjFT60y4B7685egAAAAAAAAAAAA4607HKlTcZqVtxio23GKhakYqGikTrPorE6z6KROs+isTrPopE6z6KxKs+ikTrPorE6z6KROoWpGKhakYqVtxipU3GKn1plwD315y9AAAAAAAAAAAABx1p2OVKm4zUrbjFRtuMVC1IxUNFInWfRWJ1n0UidZ9FYnWfRSJ1n0ViVZtFInUNFYnWfRSJ1C1IxULUjFStuMVKm4xU+tMuAe+vOXoAAAAAAAAAAAAOOtOxypU3GalbcYqNtxioWpGKhakTrPorE6z6KROs+isTrPopEqz6KxOs2ikTqGisTrPopE6hakYqNqRio03GKlTcYqfWmXAP//Z"

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	// <template>
	// 	<div class="left">
	// 		<div class="left_top">
	// 			<h1>产品展示</h1>
	// 			<ul>
	// 				<li><a href="product.html?_hutai">户太8号</a></li>
	// 				<li><a href="product.html?_jisi">吉斯玛早</a></li>
	// 				<li><a href="product.html?_dongfang">东方之星</a></li>
	// 				<li><a href="product.html?_chaokang">超康早</a></li>
	// 				<li><a href="product.html?_hanxiang">寒香蜜</a></li>
	// 				<li><a href="product.html?_putao">葡萄酒</a></li>
	// 			</ul>
	// 		</div>
	// 		<div class="left_bottom">
	// 			<h1>科技知识</h1>
	// 			<div class="box">
	// 			<dl class="bottom_list" id="_list">
	// 				<!-- 挑战后用？号刷新，再取值判断，用#不行 -->
	// 				<a href='technology.html?_tec5'>
	// 					<dt>葡萄种植过程中树体的管理</dt>
	// 					<dd>　　1、抹芽——4月初到中旬末，发芽后对双芽枝保留1个，每株苗留2个芽做为主蔓培养。如...</dd>
	// 				</a>
	// 				<a href='technology.html?_tec4'>
	// 					<dt>葡萄保护地栽培的几项关键技术</dt>
	// 					<dd>  保护地栽培能有效地控制葡萄生长发育所需的生态环境因子，满足葡萄生育期间的最佳条件，...</dd>
	// 				</a>
	// 				<a href='technology.html?_tec3'>
	// 					<dt>种葡萄，不懂技术风险大</dt>
	// 					<dd>  近年来，阜阳市葡萄种植面积逐年递增，目前全市已达2万余亩，在取得良好经济效益的同时...</dd>
	// 				</a>
	// 				<a href='technology.html?_tec2'>
	// 					<dt>有机葡萄幼龄树种植技术措施</dt>
	// 					<dd>  眼下，北方有机葡萄正陆续成熟上市，而有机葡萄果实采收期正值高温季节，采后贮藏过程中...</dd>	
	// 				</a>
	// 				<a href='technology.html?_tec1'>
	// 					<dt>葡萄生理性病害简介</dt>
	// 					<dd>  葡萄的生理性病害主要有：日灼病、水罐子病、酸腐病、生理性裂果病、落花落果病、缺素症...</dd>
	// 				</a>
	// 				<a href='technology.html?_tec5'>
	// 					<dt>葡萄种植过程中树体的管理</dt>
	// 					<dd>　　1、抹芽——4月初到中旬末，发芽后对双芽枝保留1个，每株苗留2个芽做为主蔓培养。如...</dd>
	// 				</a>
	// 				<a href='technology.html?_tec4'>
	// 					<dt>葡萄保护地栽培的几项关键技术</dt>
	// 					<dd>  保护地栽培能有效地控制葡萄生长发育所需的生态环境因子，满足葡萄生育期间的最佳条件，...</dd>
	// 				</a>
	// 				<a href='technology.html?_tec3'>
	// 					<dt>种葡萄，不懂技术风险大</dt>
	// 					<dd>  近年来，阜阳市葡萄种植面积逐年递增，目前全市已达2万余亩，在取得良好经济效益的同时...</dd>
	// 				</a>
	// 				<a href='technology.html?_tec2'>
	// 					<dt>有机葡萄幼龄树种植技术措施</dt>
	// 					<dd>  眼下，北方有机葡萄正陆续成熟上市，而有机葡萄果实采收期正值高温季节，采后贮藏过程中...</dd>
	// 				</a>
	// 				<a href='technology.html?_tec1'>
	// 					<dt>葡萄生理性病害简介</dt>
	// 					<dd>  葡萄的生理性病害主要有：日灼病、水罐子病、酸腐病、生理性裂果病、落花落果病、缺素症...</dd>
	// 				</a>
	// 			</dl>
	// 			</div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style lang='sass' scoped>
	// 	.left{
	// 		width: 295px;
	// 		float: left;
	// 		h1{
	// 			height: 113px;
	// 			background: url(../dest/img/pn_03.jpg) no-repeat;
	// 			font-size: 30px;
	// 			font-family:'微软简粗黑';
	// 			color:white;
	// 			text-align: center;
	// 			line-height: 113px;
	// 		}
	// 		.left_top{
	// 			width: 295px;
	// 			height: 482px;
	// 			padding-bottom: 30px;
	// 			ul{
	// 				padding: 0 15px 15px;
	// 				background: #468b00;
	// 				overflow: hidden;
	// 				li{
	// 					margin-top: 15px;
	// 					padding-left: 30px;
	// 					line-height: 44px;
	// 					font-size: 18px;
	// 					color:#333;
	// 					background: url(../dest/img/pn_10.jpg);
	// 					cursor: pointer;
	// 					&:hover{
	// 						background: url(../dest/img/pn_07.jpg) no-repeat;
	// 					};
	// 					a{
	// 						display: block;
	// 					}
	// 				}
	// 			}
	// 		}
	// 		.left_bottom{
	// 			.box{
	// 				padding:0 15px 15px;
	// 				background: #468b00;
	// 				height: 264px;
	// 				overflow:hidden;
	// 				a{
	// 					overflow: hidden;
	// 					display: block;
	// 					margin-bottom:10px;
	// 				}
	// 				dt{
	// 					line-height: 28px;
	// 					text-align: center;
	// 					color: white;
	// 					font-size: 14px;
	// 				}
	// 				dd{  
	// 					height: 44px;
	// 					line-height: 20px;
	// 					color:#b7d29c;
	// 					font-size:12px;
	// 					border-bottom: 1px dashed white;
	// 					padding-bottom:10px;
	//
	// 				}
	// 			}
	// 		}
	// 	}
	// </style>
	//
	//
	// <script>

	exports.default = {
		data: function data() {
			return {};
		},

		props: [],
		mounted: function mounted() {
			//轮播
			var length = $('.bottom_list').children().length;
			var timer = null,
			    timer1 = null;
			var n = 0;
			var i = 16;
			clearInterval(timer1);
			timer1 = setInterval(function () {
				clearInterval(timer);
				timer = setInterval(function () {
					i--;
					n += 93 * i / 120;
					if (i < 1) {
						i = 16;
						clearInterval(timer);
					}
					if (n >= 930) {
						n = 0;
					}
					$('.bottom_list').css('margin-top', -n + 'px');
				}, 25);
			}, 3000);
		}
	};
	// </script>

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"left\" _v-351d6f6f=\"\">\n\t\t<div class=\"left_top\" _v-351d6f6f=\"\">\n\t\t\t<h1 _v-351d6f6f=\"\">产品展示</h1>\n\t\t\t<ul _v-351d6f6f=\"\">\n\t\t\t\t<li _v-351d6f6f=\"\"><a href=\"product.html?_hutai\" _v-351d6f6f=\"\">户太8号</a></li>\n\t\t\t\t<li _v-351d6f6f=\"\"><a href=\"product.html?_jisi\" _v-351d6f6f=\"\">吉斯玛早</a></li>\n\t\t\t\t<li _v-351d6f6f=\"\"><a href=\"product.html?_dongfang\" _v-351d6f6f=\"\">东方之星</a></li>\n\t\t\t\t<li _v-351d6f6f=\"\"><a href=\"product.html?_chaokang\" _v-351d6f6f=\"\">超康早</a></li>\n\t\t\t\t<li _v-351d6f6f=\"\"><a href=\"product.html?_hanxiang\" _v-351d6f6f=\"\">寒香蜜</a></li>\n\t\t\t\t<li _v-351d6f6f=\"\"><a href=\"product.html?_putao\" _v-351d6f6f=\"\">葡萄酒</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class=\"left_bottom\" _v-351d6f6f=\"\">\n\t\t\t<h1 _v-351d6f6f=\"\">科技知识</h1>\n\t\t\t<div class=\"box\" _v-351d6f6f=\"\">\n\t\t\t<dl class=\"bottom_list\" id=\"_list\" _v-351d6f6f=\"\">\n\t\t\t\t<!-- 挑战后用？号刷新，再取值判断，用#不行 -->\n\t\t\t\t<a href=\"technology.html?_tec5\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">葡萄种植过程中树体的管理</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">　　1、抹芽——4月初到中旬末，发芽后对双芽枝保留1个，每株苗留2个芽做为主蔓培养。如...</dd>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec4\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">葡萄保护地栽培的几项关键技术</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">  保护地栽培能有效地控制葡萄生长发育所需的生态环境因子，满足葡萄生育期间的最佳条件，...</dd>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec3\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">种葡萄，不懂技术风险大</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">  近年来，阜阳市葡萄种植面积逐年递增，目前全市已达2万余亩，在取得良好经济效益的同时...</dd>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec2\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">有机葡萄幼龄树种植技术措施</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">  眼下，北方有机葡萄正陆续成熟上市，而有机葡萄果实采收期正值高温季节，采后贮藏过程中...</dd>\t\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec1\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">葡萄生理性病害简介</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">  葡萄的生理性病害主要有：日灼病、水罐子病、酸腐病、生理性裂果病、落花落果病、缺素症...</dd>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec5\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">葡萄种植过程中树体的管理</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">　　1、抹芽——4月初到中旬末，发芽后对双芽枝保留1个，每株苗留2个芽做为主蔓培养。如...</dd>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec4\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">葡萄保护地栽培的几项关键技术</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">  保护地栽培能有效地控制葡萄生长发育所需的生态环境因子，满足葡萄生育期间的最佳条件，...</dd>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec3\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">种葡萄，不懂技术风险大</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">  近年来，阜阳市葡萄种植面积逐年递增，目前全市已达2万余亩，在取得良好经济效益的同时...</dd>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec2\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">有机葡萄幼龄树种植技术措施</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">  眼下，北方有机葡萄正陆续成熟上市，而有机葡萄果实采收期正值高温季节，采后贮藏过程中...</dd>\n\t\t\t\t</a>\n\t\t\t\t<a href=\"technology.html?_tec1\" _v-351d6f6f=\"\">\n\t\t\t\t\t<dt _v-351d6f6f=\"\">葡萄生理性病害简介</dt>\n\t\t\t\t\t<dd _v-351d6f6f=\"\">  葡萄的生理性病害主要有：日灼病、水罐子病、酸腐病、生理性裂果病、落花落果病、缺素症...</dd>\n\t\t\t\t</a>\n\t\t\t</dl>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports) {

	module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(36)
	__vue_script__ = __webpack_require__(38)
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lanou/Desktop/国星/route/component/pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2ea390d4&file=pagination.vue&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagination.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2ea390d4&file=pagination.vue&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./pagination.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".pagination[_v-2ea390d4] {\n  color: #333;\n  font-size: 12px;\n  line-height: normal;\n  padding: 10px 0;\n  overflow: hidden;\n  height: 21px; }\n  .pagination span[_v-2ea390d4], .pagination li[_v-2ea390d4] {\n    margin: 2px;\n    padding: 1px 5px;\n    background: #f6f6f6;\n    border: 1px solid #ccc;\n    float: left;\n    cursor: pointer; }\n  .pagination select[_v-2ea390d4] {\n    margin: 2px;\n    float: left; }\n  .pagination .active[_v-2ea390d4] {\n    background: #f8b253;\n    border: 1px solid #e0600a;\n    color: white; }\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="pagination">
	// 		<span class="total">共页 {{pdata.pageNum}}页次:{{nowPage}}/{{pdata.pageNum}}</span>
	// 		<span class="first">首页</span>
	// 		<span class="pre">上一页</span>
	// 		<ul>
	// 			<li v-for="n in pdata.pageNum">{{n}}</li>
	// 		</ul>
	// 		<span class="next">下一页</span>
	// 		<span class="last">尾页</span>
	// 		<select name="" id="">
	// 			<option value="" v-for="n in pdata.pageNum">{{n}}</option>
	// 		</select>	
	// 	</div>
	// </template>
	//
	// <style lang='sass' scoped>
	// 	.pagination{
	// 		color:#333;
	// 		font-size: 12px;
	// 		line-height: normal;
	// 		padding: 10px 0;
	// 		overflow: hidden;
	// 		height: 21px;
	// 		span,li{
	// 			margin:2px;
	// 			padding: 1px 5px;
	// 			background: #f6f6f6;
	// 			border: 1px solid #ccc;
	// 			float:left;
	// 			cursor: pointer;
	// 		}
	// 		select{
	// 			margin:2px;
	// 			float: left;
	// 		}
	// 		.active{
	// 			background:#f8b253;
	// 			border: 1px solid #e0600a;
	// 			color: white;
	// 		}
	// 	}
	//
	// </style>
	//
	// <script>

	exports.default = {
		data: function data() {
			return {
				nowPage: 1
			};
		},

		props: {
			pdata: {
				type: Object,
				default: function _default() {
					return { pageNum: 1 };
				}
			}
		},
		methods: {},
		watch: {
			nowPage: function nowPage() {
				this.$emit('page-change', this.nowPage);
				var li = $('.pagination li');
				var option = $('.pagination option');
				li.css('color', '');
				li.eq(this.nowPage - 1).css('color', 'red');
				option.removeAttr('selected');
				option.eq(this.nowPage - 1).attr('selected', 1);
			}
		},
		//create组件刚被挂在，mounted 内部元素已加载完毕
		mounted: function mounted() {
			var li = $('.pagination li');
			var span = $('.pagination span');
			var option = $('.pagination option');
			var select = $('.pagination select');
			//初始显示当前页红色 select也是当前页
			li.eq(this.nowPage - 1).css('color', 'red');
			option.eq(this.nowPage - 1).attr('selected', 1);
			if (this.pdata.pageNum == 1) {
				return;
			}
			//定义that给内部函数使用
			var that = this;
			//hover效果
			span.not('.total').mouseenter(function () {
				span.removeClass("active");
				$(this).addClass("active");
			});
			span.not('.total').mouseleave(function () {
				$(this).removeClass("active");
			});
			li.not('.total').hover(function () {
				li.removeClass("active");
				$(this).addClass("active");
			}, function () {
				$(this).removeClass("active");
			});
			//首页和第一页初始默认没有效果
			$('.pre').mouseenter(function () {
				$(this).removeClass("active");
			});
			$('.first').mouseenter(function () {
				$(this).removeClass("active");
			});
			//页码点击
			li.click(function () {
				that.nowPage = $(this).text();
				active();
			});
			//下拉选择
			select.change(function () {
				that.nowPage = $('option:selected').text();
				active();
			});
			//上一页
			$('.pre').click(function () {
				that.nowPage--;
				if (that.nowPage <= 1) {
					that.nowPage = 1;
				}
				active();
			});
			//上一页
			$('.next').click(function () {
				that.nowPage++;
				if (that.nowPage >= that.pdata.pageNum) {
					that.nowPage = that.pdata.pageNum;
				}
				active();
			});
			//首页
			$('.first').click(function () {
				that.nowPage = 1;
				active();
			});
			//尾页
			$('.last').click(function () {
				that.nowPage = that.pdata.pageNum;
				active();
			});
			// 按钮活动状态
			function active() {
				if (that.nowPage == 1) {
					$('.pre').mouseenter(function () {
						$(this).removeClass("active");
					});
					$('.first').mouseenter(function () {
						$(this).removeClass("active");
					});
				} else {
					$('.pre').mouseenter(function () {
						span.removeClass("active");
						$(this).addClass("active");
					});
					$('.first').mouseenter(function () {
						span.removeClass("active");
						$(this).addClass("active");
					});
				}

				if (that.nowPage == that.pdata.pageNum) {
					$('.next').mouseenter(function () {
						$(this).removeClass("active");
					});
					$('.last').mouseenter(function () {
						$(this).removeClass("active");
					});
				} else {
					$('.next').mouseenter(function () {
						span.removeClass("active");
						$(this).addClass("active");
					});
					$('.last').mouseenter(function () {
						span.removeClass("active");
						$(this).addClass("active");
					});
				}
			}
		}
	};

	// </script>

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"pagination\" _v-2ea390d4=\"\">\n\t\t<span class=\"total\" _v-2ea390d4=\"\">共页 {{pdata.pageNum}}页次:{{nowPage}}/{{pdata.pageNum}}</span>\n\t\t<span class=\"first\" _v-2ea390d4=\"\">首页</span>\n\t\t<span class=\"pre\" _v-2ea390d4=\"\">上一页</span>\n\t\t<ul _v-2ea390d4=\"\">\n\t\t\t<li v-for=\"n in pdata.pageNum\" _v-2ea390d4=\"\">{{n}}</li>\n\t\t</ul>\n\t\t<span class=\"next\" _v-2ea390d4=\"\">下一页</span>\n\t\t<span class=\"last\" _v-2ea390d4=\"\">尾页</span>\n\t\t<select name=\"\" id=\"\" _v-2ea390d4=\"\">\n\t\t\t<option value=\"\" v-for=\"n in pdata.pageNum\" _v-2ea390d4=\"\">{{n}}</option>\n\t\t</select>\t\n\t</div>\n";

/***/ },
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(79)
	__vue_script__ = __webpack_require__(81)
	__vue_template__ = __webpack_require__(82)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/lanou/Desktop/国星/route/component/message.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0e74c6bd&file=message.vue&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./message.vue", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0e74c6bd&file=message.vue&scoped=true!./../../node_modules/sass-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./message.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".right[_v-0e74c6bd] {\n  width: 808px;\n  float: right;\n  overflow: hidden; }\n  .right .head h2[_v-0e74c6bd] {\n    background: url(" + __webpack_require__(23) + ") no-repeat;\n    padding: 21px 0 0 55px;\n    height: 45px;\n    line-height: 45px;\n    color: white; }\n    .right .head h2 span[_v-0e74c6bd] {\n      float: right;\n      font-size: 12px;\n      margin-right: 6px; }\n      .right .head h2 span a[_v-0e74c6bd] {\n        color: white; }\n        .right .head h2 span a[_v-0e74c6bd]:hover {\n          text-decoration: underline; }\n  .right .body[_v-0e74c6bd] {\n    padding: 10px;\n    border: 1px solid #558f1a;\n    line-height: 21.6px; }\n    .right .body .message_list[_v-0e74c6bd] {\n      padding: 15px; }\n      .right .body .message_list ul[_v-0e74c6bd] {\n        padding: 5px;\n        border: 6px solid #65c108;\n        margin-bottom: 10px;\n        font-size: 12px; }\n        .right .body .message_list ul li dt[_v-0e74c6bd] {\n          padding: 4px 0 4px 20px;\n          border-bottom: 1px dotted #dedede;\n          margin-bottom: 5px;\n          color: #2c7199; }\n          .right .body .message_list ul li dt span[_v-0e74c6bd] {\n            color: #999;\n            padding-left: 8px; }\n        .right .body .message_list ul li dd[_v-0e74c6bd] {\n          padding: 8px 5px; }\n    .right .body h3[_v-0e74c6bd] {\n      font-size: 14px;\n      margin: 14px 0;\n      font-weight: bold; }\n    .right .body table[_v-0e74c6bd] {\n      font-size: 12px; }\n      .right .body table .pre[_v-0e74c6bd] {\n        width: 135px;\n        height: 40px;\n        text-align: right; }\n", ""]);

	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _pagination = __webpack_require__(35);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				ve: [5146, 9048, 2402, 6937, 8807, 9656, 2770, 3037, 2248, 6368],
				count: 1
			};
		},

		props: ['pdata'],
		components: {
			Pagination: _pagination2.default
		},
		computed: {
			verify: function verify() {
				var count = Math.ceil(Math.random() * 10);
				this.count = count;
				return count;
			}
		},
		methods: {
			submit: function submit() {
				var that = this;
				var name = $('.msg .name').val();
				var title = $('.msg .title').val();
				var content = $('.msg textarea').val();
				var obj = $('.message_list li:first');
				if (!$('.msg .title').val()) {
					alert('请输入留言标题');
				} else if (!$('.msg .name').val()) {
					alert('请输入姓名');
				} else if (!isTel($('.msg .phone').val())) {
					alert('请输入正确的手机号码');
				} else if ($('.msg .verify').val() != this.ve[this.count - 1]) {
					alert('验证码不正确');
				} else {
					alert('在线留言成功');
					insert(name, title, content, obj);
					setCookie('c_name', name, 1);
					setCookie('c_title', title, 1);
					setCookie('c_content', content, 1);
				}
			}
		},
		mounted: function mounted() {
			var name = getCookie('c_name');
			var title = getCookie('c_title');
			var content = getCookie('c_content');
			var obj = $('.message_list li:first');
			if (name) {
				insert(name, title, content, obj);
			}
		}
	};
	// 共有函数
	//验证电话号码
	// <template>
	// 	<div class="right">
	// 		<div class="head">
	//             <h2>在线留言
	// 				 <span>您当前的位置：<a href="index.html">首页</a> > <a href="#">在线留言</a></span>
	//             </h2>
	//         </div>
	//         <div class="body">
	//         	<div class="message">
	// 				<div class="message_list">
	// 					<ul>
	// 						<li>
	// 							<dl>
	// 								<dt class="info">【王先生】  你们家葡萄酒怎么样<span> 2015-09-22</span></dt>
	// 								<dd>我准备中秋订购葡萄酒送亲朋，你能给我介绍一下你们家的葡萄酒吗？</dd>
	// 								<dt class="reinfo">管理员回复</dt>
	// 								<dd>感谢您对我们的关注，请保持手机的畅通，我们将尽快与您取得联系 </dd>
	// 							</dl>
	// 						</li>
	// 					</ul>
	// 				</div>
	// 				<Pagination></Pagination>
	// 				<h3>留言反馈</h3>
	// 				<table class="msg">
	// 					<tr>
	// 						<td class="pre">留言标题：</td>
	// 						<td><input type="text" class="title"> *</td>
	// 					</tr>
	// 					<tr>
	// 						<td class="pre">姓名：</td>
	// 						<td><input type="text" class="name"> *</td>
	// 					</tr>
	// 					<tr>
	// 						<td class="pre">电话：</td>
	// 						<td><input type="text" class="phone"></td>
	// 					</tr>
	// 					<tr>
	// 						<td class="pre">QQ：</td>
	// 						<td><input type="number"></td>
	// 					</tr>
	// 					<tr>
	// 						<td class="pre">家庭地址：</td>
	// 						<td><input type="text"></td>
	// 					</tr>
	// 					<tr>
	// 						<td class="pre">反馈意见：</td>
	// 						<td><textarea name="" id="" cols="50" rows="6"></textarea> *</td>
	// 					</tr>
	// 					<tr >
	// 						<td class="pre">验证码：</td>
	// 						<td>
	// 							<input type="text" class="verify"/>
	// 							<img v-bind:src=`../../dest/img/verify${verify}.bmp`  alt=""/>
	// 						</td>
	// 					</tr>
	// 					<tr>
	// 						<td class="pre"></td>
	// 						<td><input type="button" value='在线提交' @click='submit' ></td>
	// 					</tr>
	// 				</table>
	// 			</div>
	//         </div>
	// 	</div>
	//
	// </template>
	//
	//
	// <script>

	function isTel(tel) {
		var phone = /^((\+?[0-9]{1,4})|(\(\+86\)))?(13[0-9]|14[57]|15[012356789]|17[0678]|18[0-9])\d{8}$/;
		if (phone.test(tel)) {
			return true;
		} else {
			return false;
		}
	}
	//返回年月日
	function getDate() {
		var date = new Date();
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		return year + '-' + month + '-' + day;
	}
	//设置cookie
	function setCookie(c_name, value, expiredays) {
		var exdate = new Date();
		exdate.setDate(exdate.getDate() + expiredays);
		document.cookie = c_name + "=" + value + ";expires=" + exdate.toGMTString();
	}
	//得到cookie
	function getCookie(c_name) {
		if (document.cookie.length > 0) {
			var c_start = document.cookie.indexOf(c_name + "=");
			if (c_start != -1) {
				c_start = c_start + c_name.length + 1;
				var c_end = document.cookie.indexOf(";", c_start);
				if (c_end == -1) {
					c_end = document.cookie.length;
				}
				return document.cookie.substring(c_start, c_end);
			}
		}
		return "";
	}

	//插入留言内容到标签标签
	function insert(name, title, content, obj) {
		//动态添加的标签没有样式，需要自己在内联自己再写---！
		var time = getDate();
		var html = '<li>\n                    <dl>\n                        <dt class="info" style=\'padding: 4px 0 4px 20px;border-bottom: 1px dotted #dedede;margin-bottom: 5px;color: #2c7199;\'>\u3010' + name + '\u3011  ' + title + '\n                            <span style=\'color: #999;padding-left: 8px;\'> ' + time + '</span>\n                        </dt>\n                        <dd style=\'padding: 8px 5px;\'>' + content + '</dd>\n                    </dl>\n                </li>';
		obj.before(html);
	}

	// </script>
	//
	// <style lang='sass' scoped rel="stylesheet/scss" >
	// 	.right{
	// 		width: 808px;
	// 		float: right;
	// 		overflow: hidden;
	// 		.head{
	// 			h2{
	// 				background: url(../../dest/img/G_45.jpg) no-repeat;
	// 				padding: 21px 0 0 55px;
	// 				height:45px;
	// 				line-height:45px;
	// 				color:white;
	// 				span{
	// 					float: right;
	// 					font-size: 12px;
	// 					margin-right: 6px;
	// 					a{
	// 						color:white;
	// 						&:hover{
	// 							text-decoration:underline;
	// 						};
	// 					}
	// 				}
	// 			}
	// 		}
	// 		.body{
	// 			padding: 10px;
	// 			border: 1px solid #558f1a;
	// 			line-height: 21.6px;
	// 			.message_list{
	// 				padding:15px;
	// 				ul{
	// 					padding: 5px;
	// 					border: 6px solid #65c108;
	// 					margin-bottom:10px;
	// 					font-size: 12px;
	// 					li{
	// 						dt{
	// 							padding: 4px 0 4px 20px;
	// 							border-bottom: 1px dotted #dedede;
	// 							margin-bottom: 5px;
	// 							color: #2c7199;
	// 							span{
	// 								color: #999;
	// 								padding-left: 8px;
	// 							}
	// 						}
	// 						dd{
	// 							padding: 8px 5px;
	// 						}
	// 					}
	// 				}
	// 			}
	// 			h3{
	// 				font-size: 14px;
	// 				margin:14px 0;
	// 				font-weight: bold;
	// 			}
	// 			table{
	// 				font-size: 12px;
	// 				.pre{
	// 					width: 135px;
	// 					height: 40px;text-align: right;
	// 				}
	// 			}
	// 		}
	// 	}	
	//
	// </style>

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"right\" _v-0e74c6bd=\"\">\n\t\t<div class=\"head\" _v-0e74c6bd=\"\">\n            <h2 _v-0e74c6bd=\"\">在线留言\n\t\t\t\t <span _v-0e74c6bd=\"\">您当前的位置：<a href=\"index.html\" _v-0e74c6bd=\"\">首页</a> &gt; <a href=\"#\" _v-0e74c6bd=\"\">在线留言</a></span>\n            </h2>\n        </div>\n        <div class=\"body\" _v-0e74c6bd=\"\">\n        \t<div class=\"message\" _v-0e74c6bd=\"\">\n\t\t\t\t<div class=\"message_list\" _v-0e74c6bd=\"\">\n\t\t\t\t\t<ul _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<li _v-0e74c6bd=\"\">\n\t\t\t\t\t\t\t<dl _v-0e74c6bd=\"\">\n\t\t\t\t\t\t\t\t<dt class=\"info\" _v-0e74c6bd=\"\">【王先生】  你们家葡萄酒怎么样<span _v-0e74c6bd=\"\"> 2015-09-22</span></dt>\n\t\t\t\t\t\t\t\t<dd _v-0e74c6bd=\"\">我准备中秋订购葡萄酒送亲朋，你能给我介绍一下你们家的葡萄酒吗？</dd>\n\t\t\t\t\t\t\t\t<dt class=\"reinfo\" _v-0e74c6bd=\"\">管理员回复</dt>\n\t\t\t\t\t\t\t\t<dd _v-0e74c6bd=\"\">感谢您对我们的关注，请保持手机的畅通，我们将尽快与您取得联系 </dd>\n\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<pagination _v-0e74c6bd=\"\"></pagination>\n\t\t\t\t<h3 _v-0e74c6bd=\"\">留言反馈</h3>\n\t\t\t\t<table class=\"msg\" _v-0e74c6bd=\"\">\n\t\t\t\t\t<tbody _v-0e74c6bd=\"\"><tr _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<td class=\"pre\" _v-0e74c6bd=\"\">留言标题：</td>\n\t\t\t\t\t\t<td _v-0e74c6bd=\"\"><input type=\"text\" class=\"title\" _v-0e74c6bd=\"\"> *</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<td class=\"pre\" _v-0e74c6bd=\"\">姓名：</td>\n\t\t\t\t\t\t<td _v-0e74c6bd=\"\"><input type=\"text\" class=\"name\" _v-0e74c6bd=\"\"> *</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<td class=\"pre\" _v-0e74c6bd=\"\">电话：</td>\n\t\t\t\t\t\t<td _v-0e74c6bd=\"\"><input type=\"text\" class=\"phone\" _v-0e74c6bd=\"\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<td class=\"pre\" _v-0e74c6bd=\"\">QQ：</td>\n\t\t\t\t\t\t<td _v-0e74c6bd=\"\"><input type=\"number\" _v-0e74c6bd=\"\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<td class=\"pre\" _v-0e74c6bd=\"\">家庭地址：</td>\n\t\t\t\t\t\t<td _v-0e74c6bd=\"\"><input type=\"text\" _v-0e74c6bd=\"\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<td class=\"pre\" _v-0e74c6bd=\"\">反馈意见：</td>\n\t\t\t\t\t\t<td _v-0e74c6bd=\"\"><textarea name=\"\" id=\"\" cols=\"50\" rows=\"6\" _v-0e74c6bd=\"\"></textarea> *</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<td class=\"pre\" _v-0e74c6bd=\"\">验证码：</td>\n\t\t\t\t\t\t<td _v-0e74c6bd=\"\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"verify\" _v-0e74c6bd=\"\">\n\t\t\t\t\t\t\t<img v-bind:src=\"`../../dest/img/verify${verify}.bmp`\" alt=\"\" _v-0e74c6bd=\"\">\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr _v-0e74c6bd=\"\">\n\t\t\t\t\t\t<td class=\"pre\" _v-0e74c6bd=\"\"></td>\n\t\t\t\t\t\t<td _v-0e74c6bd=\"\"><input type=\"button\" value=\"在线提交\" @click=\"submit\" _v-0e74c6bd=\"\"></td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody></table>\n\t\t\t</div>\n        </div>\n\t</div>\n\t\n";

/***/ }
/******/ ]);