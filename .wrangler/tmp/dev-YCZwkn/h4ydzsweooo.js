var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-qqcaIH/bundledWorker-0.9136366043776998.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var __create = Object.create;
var __defProp22 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = /* @__PURE__ */ __name2((fn, res) => /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
}, "__init"), "__init"), "__esm");
var __commonJS = /* @__PURE__ */ __name2((cb, mod) => /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, "__require"), "__require"), "__commonJS");
var __export = /* @__PURE__ */ __name2((target, all) => {
  for (var name in all)
    __defProp22(target, name, { get: all[name], enumerable: true });
}, "__export");
var __copyProps = /* @__PURE__ */ __name2((to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp22(to, key2, { get: /* @__PURE__ */ __name2(() => from[key2], "get"), enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
}, "__copyProps");
var __toESM = /* @__PURE__ */ __name2((mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp22(target, "default", { value: mod, enumerable: true }) : target,
  mod
)), "__toESM");
function error(status, body) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, body);
}
__name(error, "error");
__name2(error, "error");
function redirect(status, location) {
  if (isNaN(status) || status < 300 || status > 308) {
    throw new Error("Invalid status code");
  }
  return new Redirect(status, location.toString());
}
__name(redirect, "redirect");
__name2(redirect, "redirect");
function json(data, init3) {
  const body = JSON.stringify(data);
  const headers = new Headers(init3?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init3,
    headers
  });
}
__name(json, "json");
__name2(json, "json");
function text(body, init3) {
  const headers = new Headers(init3?.headers);
  if (!headers.has("content-length")) {
    const encoded = encoder.encode(body);
    headers.set("content-length", encoded.byteLength.toString());
    return new Response(encoded, {
      ...init3,
      headers
    });
  }
  return new Response(body, {
    ...init3,
    headers
  });
}
__name(text, "text");
__name2(text, "text");
function isForbiddenKey(key2) {
  return typeof key2 !== "string" || key2 in {};
}
__name(isForbiddenKey, "isForbiddenKey");
__name2(isForbiddenKey, "isForbiddenKey");
function createNullObj() {
  return /* @__PURE__ */ Object.create(null);
}
__name(createNullObj, "createNullObj");
__name2(createNullObj, "createNullObj");
function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}
__name(isNonEmptyString, "isNonEmptyString");
__name2(isNonEmptyString, "isNonEmptyString");
function parseString(setCookieValue, options2) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;
  options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
  if (isForbiddenKey(name)) {
    return null;
  }
  try {
    value = options2.decodeValues ? decodeURIComponent(value) : value;
  } catch (e3) {
    console.error(
      "set-cookie-parser: failed to decode cookie value. Set options.decodeValues=false to disable decoding.",
      e3
    );
  }
  var cookie = createNullObj();
  cookie.name = name;
  cookie.value = value;
  parts.forEach(function(part) {
    var sides = part.split("=");
    var key2 = sides.shift().trimLeft().toLowerCase();
    if (isForbiddenKey(key2)) {
      return;
    }
    var value2 = sides.join("=");
    if (key2 === "expires") {
      cookie.expires = new Date(value2);
    } else if (key2 === "max-age") {
      var n4 = parseInt(value2, 10);
      if (!Number.isNaN(n4))
        cookie.maxAge = n4;
    } else if (key2 === "secure") {
      cookie.secure = true;
    } else if (key2 === "httponly") {
      cookie.httpOnly = true;
    } else if (key2 === "samesite") {
      cookie.sameSite = value2;
    } else if (key2 === "partitioned") {
      cookie.partitioned = true;
    } else if (key2) {
      cookie[key2] = value2;
    }
  });
  return cookie;
}
__name(parseString, "parseString");
__name2(parseString, "parseString");
function parseNameValuePair(nameValuePairStr) {
  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("=");
  } else {
    value = nameValuePairStr;
  }
  return { name, value };
}
__name(parseNameValuePair, "parseNameValuePair");
__name2(parseNameValuePair, "parseNameValuePair");
function parse(input, options2) {
  options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
  if (!input) {
    if (!options2.map) {
      return [];
    } else {
      return createNullObj();
    }
  }
  if (input.headers) {
    if (typeof input.headers.getSetCookie === "function") {
      input = input.headers.getSetCookie();
    } else if (input.headers["set-cookie"]) {
      input = input.headers["set-cookie"];
    } else {
      var sch = input.headers[Object.keys(input.headers).find(function(key2) {
        return key2.toLowerCase() === "set-cookie";
      })];
      if (!sch && input.headers.cookie && !options2.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  if (!options2.map) {
    return input.filter(isNonEmptyString).map(function(str) {
      return parseString(str, options2);
    }).filter(Boolean);
  } else {
    var cookies = createNullObj();
    return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
      var cookie = parseString(str, options2);
      if (cookie && !isForbiddenKey(cookie.name)) {
        cookies2[cookie.name] = cookie;
      }
      return cookies2;
    }, cookies);
  }
}
__name(parse, "parse");
__name2(parse, "parse");
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  __name(skipWhitespace, "skipWhitespace");
  __name2(skipWhitespace, "skipWhitespace");
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  __name(notSpecialChar, "notSpecialChar");
  __name2(notSpecialChar, "notSpecialChar");
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
__name(splitCookiesString, "splitCookiesString");
__name2(splitCookiesString, "splitCookiesString");
var BROWSER;
var HttpError;
var Redirect;
var NotFound;
var ActionFailure;
var encoder;
var setCookie;
var defaultParseOptions;
var parse_1;
var parseString_1;
var splitCookiesString_1;
var init_set_cookie = __esm({
  ".svelte-kit/output/server/chunks/set-cookie.js"() {
    BROWSER = false;
    HttpError = class {
      static {
        __name(this, "HttpError");
      }
      static {
        __name2(this, "HttpError");
      }
      /**
       * @param {number} status
       * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
       */
      constructor(status, body) {
        this.status = status;
        if (typeof body === "string") {
          this.body = { message: body };
        } else if (body) {
          this.body = body;
        } else {
          this.body = { message: `Error: ${status}` };
        }
      }
      toString() {
        return JSON.stringify(this.body);
      }
    };
    Redirect = class {
      static {
        __name(this, "Redirect");
      }
      static {
        __name2(this, "Redirect");
      }
      /**
       * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
       * @param {string} location
       */
      constructor(status, location) {
        this.status = status;
        this.location = location;
      }
    };
    NotFound = class extends Error {
      static {
        __name(this, "NotFound");
      }
      static {
        __name2(this, "NotFound");
      }
      /**
       * @param {string} pathname
       */
      constructor(pathname) {
        super();
        this.status = 404;
        this.message = `Not found: ${pathname}`;
      }
    };
    ActionFailure = class {
      static {
        __name(this, "ActionFailure");
      }
      static {
        __name2(this, "ActionFailure");
      }
      /**
       * @param {number} status
       * @param {T} [data]
       */
      constructor(status, data) {
        this.status = status;
        this.data = data;
      }
    };
    encoder = new TextEncoder();
    setCookie = { exports: {} };
    defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    setCookie.exports = parse;
    parse_1 = setCookie.exports.parse = parse;
    parseString_1 = setCookie.exports.parseString = parseString;
    splitCookiesString_1 = setCookie.exports.splitCookiesString = splitCookiesString;
  }
});
function noop() {
}
__name(noop, "noop");
__name2(noop, "noop");
function run(fn) {
  return fn();
}
__name(run, "run");
__name2(run, "run");
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
__name(blank_object, "blank_object");
__name2(blank_object, "blank_object");
function run_all(fns) {
  fns.forEach(run);
}
__name(run_all, "run_all");
__name2(run_all, "run_all");
function is_function(thing) {
  return typeof thing === "function";
}
__name(is_function, "is_function");
__name2(is_function, "is_function");
function safe_not_equal(a3, b3) {
  return a3 != a3 ? b3 == b3 : a3 !== b3 || a3 && typeof a3 === "object" || typeof a3 === "function";
}
__name(safe_not_equal, "safe_not_equal");
__name2(safe_not_equal, "safe_not_equal");
function subscribe(store, ...callbacks) {
  if (store == null) {
    for (const callback2 of callbacks) {
      callback2(void 0);
    }
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
__name(subscribe, "subscribe");
__name2(subscribe, "subscribe");
function set_current_component(component3) {
  current_component = component3;
}
__name(set_current_component, "set_current_component");
__name2(set_current_component, "set_current_component");
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
__name(get_current_component, "get_current_component");
__name2(get_current_component, "get_current_component");
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
__name(setContext, "setContext");
__name2(setContext, "setContext");
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
__name(getContext, "getContext");
__name2(getContext, "getContext");
function ensure_array_like(array_like_or_iterator) {
  return array_like_or_iterator?.length !== void 0 ? array_like_or_iterator : Array.from(array_like_or_iterator);
}
__name(ensure_array_like, "ensure_array_like");
__name2(ensure_array_like, "ensure_array_like");
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i3 = pattern2.lastIndex - 1;
    const ch = str[i3];
    escaped2 += str.substring(last, i3) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i3 + 1;
  }
  return escaped2 + str.substring(last);
}
__name(escape, "escape");
__name2(escape, "escape");
function each(items, fn) {
  items = ensure_array_like(items);
  let str = "";
  for (let i3 = 0; i3 < items.length; i3 += 1) {
    str += fn(items[i3], i3);
  }
  return str;
}
__name(each, "each");
__name2(each, "each");
function validate_component(component3, name) {
  if (!component3 || !component3.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`
    );
  }
  return component3;
}
__name(validate_component, "validate_component");
__name2(validate_component, "validate_component");
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  __name($$render, "$$render");
  __name2($$render, "$$render");
  return {
    render: /* @__PURE__ */ __name2((props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css2) => css2.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    }, "render"),
    $$render
  };
}
__name(create_ssr_component, "create_ssr_component");
__name2(create_ssr_component, "create_ssr_component");
function add_attribute(name, value, boolean) {
  if (value == null || boolean && !value)
    return "";
  const assignment = boolean && value === true ? "" : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
__name(add_attribute, "add_attribute");
__name2(add_attribute, "add_attribute");
var current_component;
var _boolean_attributes;
var boolean_attributes;
var ATTR_REGEX;
var CONTENT_REGEX;
var missing_component;
var on_destroy;
var init_ssr = __esm({
  ".svelte-kit/output/server/chunks/ssr.js"() {
    _boolean_attributes = /** @type {const} */
    [
      "allowfullscreen",
      "allowpaymentrequest",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "defer",
      "disabled",
      "formnovalidate",
      "hidden",
      "inert",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "selected"
    ];
    boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
    ATTR_REGEX = /[&"<]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: /* @__PURE__ */ __name2(() => "", "$$render")
    };
  }
});
function afterUpdate() {
}
__name(afterUpdate, "afterUpdate");
__name2(afterUpdate, "afterUpdate");
var init_ssr2 = __esm({
  ".svelte-kit/output/server/chunks/ssr2.js"() {
  }
});
function defaultCookies(useSecureCookies) {
  const cookiePrefix = useSecureCookies ? "__Secure-" : "";
  return {
    // default cookie options
    sessionToken: {
      name: `${cookiePrefix}authjs.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    callbackUrl: {
      name: `${cookiePrefix}authjs.callback-url`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    csrfToken: {
      // Default to __Host- for CSRF token for additional protection if using useSecureCookies
      // NB: The `__Host-` prefix is stricter than the `__Secure-` prefix.
      name: `${useSecureCookies ? "__Host-" : ""}authjs.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    pkceCodeVerifier: {
      name: `${cookiePrefix}authjs.pkce.code_verifier`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: 60 * 15
        // 15 minutes in seconds
      }
    },
    state: {
      name: `${cookiePrefix}authjs.state`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: 60 * 15
        // 15 minutes in seconds
      }
    },
    nonce: {
      name: `${cookiePrefix}authjs.nonce`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies
      }
    },
    webauthnChallenge: {
      name: `${cookiePrefix}authjs.challenge`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: useSecureCookies,
        maxAge: 60 * 15
        // 15 minutes in seconds
      }
    }
  };
}
__name(defaultCookies, "defaultCookies");
__name2(defaultCookies, "defaultCookies");
var __classPrivateFieldSet;
var __classPrivateFieldGet;
var _SessionStore_instances;
var _SessionStore_chunks;
var _SessionStore_option;
var _SessionStore_logger;
var _SessionStore_chunk;
var _SessionStore_clean;
var ALLOWED_COOKIE_SIZE;
var ESTIMATED_EMPTY_COOKIE_SIZE;
var CHUNK_SIZE;
var SessionStore;
var init_cookie = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/cookie.js"() {
    __classPrivateFieldSet = /* @__PURE__ */ __name2(function(receiver, state2, value, kind, f3) {
      if (kind === "m")
        throw new TypeError("Private method is not writable");
      if (kind === "a" && !f3)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof state2 === "function" ? receiver !== state2 || !f3 : !state2.has(receiver))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f3.call(receiver, value) : f3 ? f3.value = value : state2.set(receiver, value), value;
    }, "__classPrivateFieldSet");
    __classPrivateFieldGet = /* @__PURE__ */ __name2(function(receiver, state2, kind, f3) {
      if (kind === "a" && !f3)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof state2 === "function" ? receiver !== state2 || !f3 : !state2.has(receiver))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f3 : kind === "a" ? f3.call(receiver) : f3 ? f3.value : state2.get(receiver);
    }, "__classPrivateFieldGet");
    ALLOWED_COOKIE_SIZE = 4096;
    ESTIMATED_EMPTY_COOKIE_SIZE = 160;
    CHUNK_SIZE = ALLOWED_COOKIE_SIZE - ESTIMATED_EMPTY_COOKIE_SIZE;
    SessionStore = class {
      static {
        __name(this, "SessionStore");
      }
      static {
        __name2(this, "SessionStore");
      }
      constructor(option, cookies, logger2) {
        _SessionStore_instances.add(this);
        _SessionStore_chunks.set(this, {});
        _SessionStore_option.set(this, void 0);
        _SessionStore_logger.set(this, void 0);
        __classPrivateFieldSet(this, _SessionStore_logger, logger2, "f");
        __classPrivateFieldSet(this, _SessionStore_option, option, "f");
        if (!cookies)
          return;
        const { name: sessionCookiePrefix } = option;
        for (const [name, value] of Object.entries(cookies)) {
          if (!name.startsWith(sessionCookiePrefix) || !value)
            continue;
          __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = value;
        }
      }
      /**
       * The JWT Session or database Session ID
       * constructed from the cookie chunks.
       */
      get value() {
        const sortedKeys = Object.keys(__classPrivateFieldGet(this, _SessionStore_chunks, "f")).sort((a3, b3) => {
          const aSuffix = parseInt(a3.split(".").pop() || "0");
          const bSuffix = parseInt(b3.split(".").pop() || "0");
          return aSuffix - bSuffix;
        });
        return sortedKeys.map((key2) => __classPrivateFieldGet(this, _SessionStore_chunks, "f")[key2]).join("");
      }
      /**
       * Given a cookie value, return new cookies, chunked, to fit the allowed cookie size.
       * If the cookie has changed from chunked to unchunked or vice versa,
       * it deletes the old cookies as well.
       */
      chunk(value, options2) {
        const cookies = __classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_clean).call(this);
        const chunked = __classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_chunk).call(this, {
          name: __classPrivateFieldGet(this, _SessionStore_option, "f").name,
          value,
          options: { ...__classPrivateFieldGet(this, _SessionStore_option, "f").options, ...options2 }
        });
        for (const chunk of chunked) {
          cookies[chunk.name] = chunk;
        }
        return Object.values(cookies);
      }
      /** Returns a list of cookies that should be cleaned. */
      clean() {
        return Object.values(__classPrivateFieldGet(this, _SessionStore_instances, "m", _SessionStore_clean).call(this));
      }
    };
    _SessionStore_chunks = /* @__PURE__ */ new WeakMap(), _SessionStore_option = /* @__PURE__ */ new WeakMap(), _SessionStore_logger = /* @__PURE__ */ new WeakMap(), _SessionStore_instances = /* @__PURE__ */ new WeakSet(), _SessionStore_chunk = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function _SessionStore_chunk2(cookie) {
      const chunkCount = Math.ceil(cookie.value.length / CHUNK_SIZE);
      if (chunkCount === 1) {
        __classPrivateFieldGet(this, _SessionStore_chunks, "f")[cookie.name] = cookie.value;
        return [cookie];
      }
      const cookies = [];
      for (let i3 = 0; i3 < chunkCount; i3++) {
        const name = `${cookie.name}.${i3}`;
        const value = cookie.value.substr(i3 * CHUNK_SIZE, CHUNK_SIZE);
        cookies.push({ ...cookie, name, value });
        __classPrivateFieldGet(this, _SessionStore_chunks, "f")[name] = value;
      }
      __classPrivateFieldGet(this, _SessionStore_logger, "f").debug("CHUNKING_SESSION_COOKIE", {
        message: `Session cookie exceeds allowed ${ALLOWED_COOKIE_SIZE} bytes.`,
        emptyCookieSize: ESTIMATED_EMPTY_COOKIE_SIZE,
        valueSize: cookie.value.length,
        chunks: cookies.map((c4) => c4.value.length + ESTIMATED_EMPTY_COOKIE_SIZE)
      });
      return cookies;
    }, "_SessionStore_chunk2"), "_SessionStore_chunk2"), _SessionStore_clean = /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function _SessionStore_clean2() {
      const cleanedChunks = {};
      for (const name in __classPrivateFieldGet(this, _SessionStore_chunks, "f")) {
        delete __classPrivateFieldGet(this, _SessionStore_chunks, "f")?.[name];
        cleanedChunks[name] = {
          name,
          value: "",
          options: { ...__classPrivateFieldGet(this, _SessionStore_option, "f").options, maxAge: 0 }
        };
      }
      return cleanedChunks;
    }, "_SessionStore_clean2"), "_SessionStore_clean2");
  }
});
function isClientError(error2) {
  if (error2 instanceof AuthError)
    return clientErrors.has(error2.type);
  return false;
}
__name(isClientError, "isClientError");
__name2(isClientError, "isClientError");
var AuthError;
var SignInError;
var AdapterError;
var AccessDenied;
var CallbackRouteError;
var ErrorPageLoop;
var EventError;
var InvalidCallbackUrl;
var CredentialsSignin;
var InvalidEndpoints;
var InvalidCheck;
var JWTSessionError;
var MissingAdapter;
var MissingAdapterMethods;
var MissingAuthorize;
var MissingSecret;
var OAuthAccountNotLinked;
var OAuthCallbackError;
var OAuthProfileParseError;
var SessionTokenError;
var OAuthSignInError;
var EmailSignInError;
var SignOutError;
var UnknownAction;
var UnsupportedStrategy;
var InvalidProvider;
var UntrustedHost;
var Verification;
var MissingCSRF;
var clientErrors;
var DuplicateConditionalUI;
var MissingWebAuthnAutocomplete;
var WebAuthnVerificationError;
var AccountNotLinked;
var ExperimentalFeatureNotEnabled;
var init_errors = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/errors.js"() {
    AuthError = class extends Error {
      static {
        __name(this, "AuthError");
      }
      static {
        __name2(this, "AuthError");
      }
      constructor(message2, errorOptions) {
        if (message2 instanceof Error) {
          super(void 0, {
            cause: { err: message2, ...message2.cause, ...errorOptions }
          });
        } else if (typeof message2 === "string") {
          if (errorOptions instanceof Error) {
            errorOptions = { err: errorOptions, ...errorOptions.cause };
          }
          super(message2, errorOptions);
        } else {
          super(void 0, message2);
        }
        this.name = this.constructor.name;
        this.type = this.constructor.type ?? "AuthError";
        this.kind = this.constructor.kind ?? "error";
        Error.captureStackTrace?.(this, this.constructor);
        const url = `https://errors.authjs.dev#${this.type.toLowerCase()}`;
        this.message += `${this.message ? ". " : ""}Read more at ${url}`;
      }
    };
    SignInError = class extends AuthError {
      static {
        __name(this, "SignInError");
      }
      static {
        __name2(this, "SignInError");
      }
    };
    SignInError.kind = "signIn";
    AdapterError = class extends AuthError {
      static {
        __name(this, "AdapterError");
      }
      static {
        __name2(this, "AdapterError");
      }
    };
    AdapterError.type = "AdapterError";
    AccessDenied = class extends AuthError {
      static {
        __name(this, "AccessDenied");
      }
      static {
        __name2(this, "AccessDenied");
      }
    };
    AccessDenied.type = "AccessDenied";
    CallbackRouteError = class extends AuthError {
      static {
        __name(this, "CallbackRouteError");
      }
      static {
        __name2(this, "CallbackRouteError");
      }
    };
    CallbackRouteError.type = "CallbackRouteError";
    ErrorPageLoop = class extends AuthError {
      static {
        __name(this, "ErrorPageLoop");
      }
      static {
        __name2(this, "ErrorPageLoop");
      }
    };
    ErrorPageLoop.type = "ErrorPageLoop";
    EventError = class extends AuthError {
      static {
        __name(this, "EventError");
      }
      static {
        __name2(this, "EventError");
      }
    };
    EventError.type = "EventError";
    InvalidCallbackUrl = class extends AuthError {
      static {
        __name(this, "InvalidCallbackUrl");
      }
      static {
        __name2(this, "InvalidCallbackUrl");
      }
    };
    InvalidCallbackUrl.type = "InvalidCallbackUrl";
    CredentialsSignin = class extends SignInError {
      static {
        __name(this, "CredentialsSignin");
      }
      static {
        __name2(this, "CredentialsSignin");
      }
      constructor() {
        super(...arguments);
        this.code = "credentials";
      }
    };
    CredentialsSignin.type = "CredentialsSignin";
    InvalidEndpoints = class extends AuthError {
      static {
        __name(this, "InvalidEndpoints");
      }
      static {
        __name2(this, "InvalidEndpoints");
      }
    };
    InvalidEndpoints.type = "InvalidEndpoints";
    InvalidCheck = class extends AuthError {
      static {
        __name(this, "InvalidCheck");
      }
      static {
        __name2(this, "InvalidCheck");
      }
    };
    InvalidCheck.type = "InvalidCheck";
    JWTSessionError = class extends AuthError {
      static {
        __name(this, "JWTSessionError");
      }
      static {
        __name2(this, "JWTSessionError");
      }
    };
    JWTSessionError.type = "JWTSessionError";
    MissingAdapter = class extends AuthError {
      static {
        __name(this, "MissingAdapter");
      }
      static {
        __name2(this, "MissingAdapter");
      }
    };
    MissingAdapter.type = "MissingAdapter";
    MissingAdapterMethods = class extends AuthError {
      static {
        __name(this, "MissingAdapterMethods");
      }
      static {
        __name2(this, "MissingAdapterMethods");
      }
    };
    MissingAdapterMethods.type = "MissingAdapterMethods";
    MissingAuthorize = class extends AuthError {
      static {
        __name(this, "MissingAuthorize");
      }
      static {
        __name2(this, "MissingAuthorize");
      }
    };
    MissingAuthorize.type = "MissingAuthorize";
    MissingSecret = class extends AuthError {
      static {
        __name(this, "MissingSecret");
      }
      static {
        __name2(this, "MissingSecret");
      }
    };
    MissingSecret.type = "MissingSecret";
    OAuthAccountNotLinked = class extends SignInError {
      static {
        __name(this, "OAuthAccountNotLinked");
      }
      static {
        __name2(this, "OAuthAccountNotLinked");
      }
    };
    OAuthAccountNotLinked.type = "OAuthAccountNotLinked";
    OAuthCallbackError = class extends SignInError {
      static {
        __name(this, "OAuthCallbackError");
      }
      static {
        __name2(this, "OAuthCallbackError");
      }
    };
    OAuthCallbackError.type = "OAuthCallbackError";
    OAuthProfileParseError = class extends AuthError {
      static {
        __name(this, "OAuthProfileParseError");
      }
      static {
        __name2(this, "OAuthProfileParseError");
      }
    };
    OAuthProfileParseError.type = "OAuthProfileParseError";
    SessionTokenError = class extends AuthError {
      static {
        __name(this, "SessionTokenError");
      }
      static {
        __name2(this, "SessionTokenError");
      }
    };
    SessionTokenError.type = "SessionTokenError";
    OAuthSignInError = class extends SignInError {
      static {
        __name(this, "OAuthSignInError");
      }
      static {
        __name2(this, "OAuthSignInError");
      }
    };
    OAuthSignInError.type = "OAuthSignInError";
    EmailSignInError = class extends SignInError {
      static {
        __name(this, "EmailSignInError");
      }
      static {
        __name2(this, "EmailSignInError");
      }
    };
    EmailSignInError.type = "EmailSignInError";
    SignOutError = class extends AuthError {
      static {
        __name(this, "SignOutError");
      }
      static {
        __name2(this, "SignOutError");
      }
    };
    SignOutError.type = "SignOutError";
    UnknownAction = class extends AuthError {
      static {
        __name(this, "UnknownAction");
      }
      static {
        __name2(this, "UnknownAction");
      }
    };
    UnknownAction.type = "UnknownAction";
    UnsupportedStrategy = class extends AuthError {
      static {
        __name(this, "UnsupportedStrategy");
      }
      static {
        __name2(this, "UnsupportedStrategy");
      }
    };
    UnsupportedStrategy.type = "UnsupportedStrategy";
    InvalidProvider = class extends AuthError {
      static {
        __name(this, "InvalidProvider");
      }
      static {
        __name2(this, "InvalidProvider");
      }
    };
    InvalidProvider.type = "InvalidProvider";
    UntrustedHost = class extends AuthError {
      static {
        __name(this, "UntrustedHost");
      }
      static {
        __name2(this, "UntrustedHost");
      }
    };
    UntrustedHost.type = "UntrustedHost";
    Verification = class extends AuthError {
      static {
        __name(this, "Verification");
      }
      static {
        __name2(this, "Verification");
      }
    };
    Verification.type = "Verification";
    MissingCSRF = class extends SignInError {
      static {
        __name(this, "MissingCSRF");
      }
      static {
        __name2(this, "MissingCSRF");
      }
    };
    MissingCSRF.type = "MissingCSRF";
    clientErrors = /* @__PURE__ */ new Set([
      "CredentialsSignin",
      "OAuthAccountNotLinked",
      "OAuthCallbackError",
      "AccessDenied",
      "Verification",
      "MissingCSRF",
      "AccountNotLinked",
      "WebAuthnVerificationError"
    ]);
    DuplicateConditionalUI = class extends AuthError {
      static {
        __name(this, "DuplicateConditionalUI");
      }
      static {
        __name2(this, "DuplicateConditionalUI");
      }
    };
    DuplicateConditionalUI.type = "DuplicateConditionalUI";
    MissingWebAuthnAutocomplete = class extends AuthError {
      static {
        __name(this, "MissingWebAuthnAutocomplete");
      }
      static {
        __name2(this, "MissingWebAuthnAutocomplete");
      }
    };
    MissingWebAuthnAutocomplete.type = "MissingWebAuthnAutocomplete";
    WebAuthnVerificationError = class extends AuthError {
      static {
        __name(this, "WebAuthnVerificationError");
      }
      static {
        __name2(this, "WebAuthnVerificationError");
      }
    };
    WebAuthnVerificationError.type = "WebAuthnVerificationError";
    AccountNotLinked = class extends SignInError {
      static {
        __name(this, "AccountNotLinked");
      }
      static {
        __name2(this, "AccountNotLinked");
      }
    };
    AccountNotLinked.type = "AccountNotLinked";
    ExperimentalFeatureNotEnabled = class extends AuthError {
      static {
        __name(this, "ExperimentalFeatureNotEnabled");
      }
      static {
        __name2(this, "ExperimentalFeatureNotEnabled");
      }
    };
    ExperimentalFeatureNotEnabled.type = "ExperimentalFeatureNotEnabled";
  }
});
function isValidHttpUrl(url, baseUrl) {
  try {
    return /^https?:/.test(new URL(url, url.startsWith("/") ? baseUrl : void 0).protocol);
  } catch {
    return false;
  }
}
__name(isValidHttpUrl, "isValidHttpUrl");
__name2(isValidHttpUrl, "isValidHttpUrl");
function isSemverString(version) {
  return /^v\d+(?:\.\d+){0,2}$/.test(version);
}
__name(isSemverString, "isSemverString");
__name2(isSemverString, "isSemverString");
function assertConfig(request, options2) {
  const { url } = request;
  const warnings = [];
  if (!warned && options2.debug)
    warnings.push("debug-enabled");
  if (!options2.trustHost) {
    return new UntrustedHost(`Host must be trusted. URL was: ${request.url}`);
  }
  if (!options2.secret) {
    return new MissingSecret("Please define a `secret`.");
  }
  const callbackUrlParam = request.query?.callbackUrl;
  if (callbackUrlParam && !isValidHttpUrl(callbackUrlParam, url.origin)) {
    return new InvalidCallbackUrl(`Invalid callback URL. Received: ${callbackUrlParam}`);
  }
  const { callbackUrl: defaultCallbackUrl } = defaultCookies(options2.useSecureCookies ?? url.protocol === "https:");
  const callbackUrlCookie = request.cookies?.[options2.cookies?.callbackUrl?.name ?? defaultCallbackUrl.name];
  if (callbackUrlCookie && !isValidHttpUrl(callbackUrlCookie, url.origin)) {
    return new InvalidCallbackUrl(`Invalid callback URL. Received: ${callbackUrlCookie}`);
  }
  let hasConditionalUIProvider = false;
  for (const p3 of options2.providers) {
    const provider = typeof p3 === "function" ? p3() : p3;
    if ((provider.type === "oauth" || provider.type === "oidc") && !(provider.issuer ?? provider.options?.issuer)) {
      const { authorization: a3, token: t3, userinfo: u3 } = provider;
      let key2;
      if (typeof a3 !== "string" && !a3?.url)
        key2 = "authorization";
      else if (typeof t3 !== "string" && !t3?.url)
        key2 = "token";
      else if (typeof u3 !== "string" && !u3?.url)
        key2 = "userinfo";
      if (key2) {
        return new InvalidEndpoints(`Provider "${provider.id}" is missing both \`issuer\` and \`${key2}\` endpoint config. At least one of them is required.`);
      }
    }
    if (provider.type === "credentials")
      hasCredentials = true;
    else if (provider.type === "email")
      hasEmail = true;
    else if (provider.type === "webauthn") {
      hasWebAuthn = true;
      if (provider.simpleWebAuthnBrowserVersion && !isSemverString(provider.simpleWebAuthnBrowserVersion)) {
        return new AuthError(`Invalid provider config for "${provider.id}": simpleWebAuthnBrowserVersion "${provider.simpleWebAuthnBrowserVersion}" must be a valid semver string.`);
      }
      if (provider.enableConditionalUI) {
        if (hasConditionalUIProvider) {
          return new DuplicateConditionalUI(`Multiple webauthn providers have 'enableConditionalUI' set to True. Only one provider can have this option enabled at a time.`);
        }
        hasConditionalUIProvider = true;
        const hasWebauthnFormField = Object.values(provider.formFields).some((f3) => f3.autocomplete && f3.autocomplete.toString().indexOf("webauthn") > -1);
        if (!hasWebauthnFormField) {
          return new MissingWebAuthnAutocomplete(`Provider "${provider.id}" has 'enableConditionalUI' set to True, but none of its formFields have 'webauthn' in their autocomplete param.`);
        }
      }
    }
  }
  if (hasCredentials) {
    const dbStrategy = options2.session?.strategy === "database";
    const onlyCredentials = !options2.providers.some((p3) => (typeof p3 === "function" ? p3() : p3).type !== "credentials");
    if (dbStrategy && onlyCredentials) {
      return new UnsupportedStrategy("Signing in with credentials only supported if JWT strategy is enabled");
    }
    const credentialsNoAuthorize = options2.providers.some((p3) => {
      const provider = typeof p3 === "function" ? p3() : p3;
      return provider.type === "credentials" && !provider.authorize;
    });
    if (credentialsNoAuthorize) {
      return new MissingAuthorize("Must define an authorize() handler to use credentials authentication provider");
    }
  }
  const { adapter, session: session2 } = options2;
  let requiredMethods = [];
  if (hasEmail || session2?.strategy === "database" || !session2?.strategy && adapter) {
    if (hasEmail) {
      if (!adapter)
        return new MissingAdapter("Email login requires an adapter.");
      requiredMethods.push(...emailMethods);
    } else {
      if (!adapter)
        return new MissingAdapter("Database session requires an adapter.");
      requiredMethods.push(...sessionMethods);
    }
  }
  if (hasWebAuthn) {
    if (options2.experimental?.enableWebAuthn) {
      warnings.push("experimental-webauthn");
    } else {
      return new ExperimentalFeatureNotEnabled("WebAuthn is an experimental feature. To enable it, set `experimental.enableWebAuthn` to `true` in your config.");
    }
    if (!adapter)
      return new MissingAdapter("WebAuthn requires an adapter.");
    requiredMethods.push(...webauthnMethods);
  }
  if (adapter) {
    const missing = requiredMethods.filter((m3) => !(m3 in adapter));
    if (missing.length) {
      return new MissingAdapterMethods(`Required adapter methods were missing: ${missing.join(", ")}`);
    }
  }
  if (!warned)
    warned = true;
  return warnings;
}
__name(assertConfig, "assertConfig");
__name2(assertConfig, "assertConfig");
var warned;
var hasCredentials;
var hasEmail;
var hasWebAuthn;
var emailMethods;
var sessionMethods;
var webauthnMethods;
var init_assert = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/assert.js"() {
    init_cookie();
    init_errors();
    warned = false;
    hasCredentials = false;
    hasEmail = false;
    hasWebAuthn = false;
    emailMethods = [
      "createVerificationToken",
      "useVerificationToken",
      "getUserByEmail"
    ];
    sessionMethods = [
      "createUser",
      "getUser",
      "getUserByEmail",
      "getUserByAccount",
      "updateUser",
      "linkAccount",
      "createSession",
      "getSessionAndUser",
      "updateSession",
      "deleteSession"
    ];
    webauthnMethods = [
      "createUser",
      "getUser",
      "linkAccount",
      "getAccount",
      "getAuthenticator",
      "createAuthenticator",
      "listAuthenticatorsByUserId",
      "updateAuthenticatorCounter"
    ];
  }
});
var getGlobal;
var hkdf_default;
var init_hkdf = __esm({
  "node_modules/.pnpm/@panva+hkdf@1.2.1/node_modules/@panva/hkdf/dist/web/runtime/hkdf.js"() {
    getGlobal = /* @__PURE__ */ __name2(() => {
      if (typeof globalThis !== "undefined")
        return globalThis;
      if (typeof self !== "undefined")
        return self;
      if (typeof window !== "undefined")
        return window;
      throw new Error("unable to locate global object");
    }, "getGlobal");
    hkdf_default = /* @__PURE__ */ __name2(async (digest2, ikm, salt, info, keylen) => {
      const { crypto: { subtle } } = getGlobal();
      return new Uint8Array(await subtle.deriveBits({
        name: "HKDF",
        hash: `SHA-${digest2.substr(3)}`,
        salt,
        info
      }, await subtle.importKey("raw", ikm, "HKDF", false, ["deriveBits"]), keylen << 3));
    }, "hkdf_default");
  }
});
function normalizeDigest(digest2) {
  switch (digest2) {
    case "sha256":
    case "sha384":
    case "sha512":
    case "sha1":
      return digest2;
    default:
      throw new TypeError('unsupported "digest" value');
  }
}
__name(normalizeDigest, "normalizeDigest");
__name2(normalizeDigest, "normalizeDigest");
function normalizeUint8Array(input, label) {
  if (typeof input === "string")
    return new TextEncoder().encode(input);
  if (!(input instanceof Uint8Array))
    throw new TypeError(`"${label}"" must be an instance of Uint8Array or a string`);
  return input;
}
__name(normalizeUint8Array, "normalizeUint8Array");
__name2(normalizeUint8Array, "normalizeUint8Array");
function normalizeIkm(input) {
  const ikm = normalizeUint8Array(input, "ikm");
  if (!ikm.byteLength)
    throw new TypeError(`"ikm" must be at least one byte in length`);
  return ikm;
}
__name(normalizeIkm, "normalizeIkm");
__name2(normalizeIkm, "normalizeIkm");
function normalizeInfo(input) {
  const info = normalizeUint8Array(input, "info");
  if (info.byteLength > 1024) {
    throw TypeError('"info" must not contain more than 1024 bytes');
  }
  return info;
}
__name(normalizeInfo, "normalizeInfo");
__name2(normalizeInfo, "normalizeInfo");
function normalizeKeylen(input, digest2) {
  if (typeof input !== "number" || !Number.isInteger(input) || input < 1) {
    throw new TypeError('"keylen" must be a positive integer');
  }
  const hashlen = parseInt(digest2.substr(3), 10) >> 3 || 20;
  if (input > 255 * hashlen) {
    throw new TypeError('"keylen" too large');
  }
  return input;
}
__name(normalizeKeylen, "normalizeKeylen");
__name2(normalizeKeylen, "normalizeKeylen");
async function hkdf(digest2, ikm, salt, info, keylen) {
  return hkdf_default(normalizeDigest(digest2), normalizeIkm(ikm), normalizeUint8Array(salt, "salt"), normalizeInfo(info), normalizeKeylen(keylen, digest2));
}
__name(hkdf, "hkdf");
__name2(hkdf, "hkdf");
var init_web = __esm({
  "node_modules/.pnpm/@panva+hkdf@1.2.1/node_modules/@panva/hkdf/dist/web/index.js"() {
    init_hkdf();
  }
});
var webcrypto_default;
var isCryptoKey;
var init_webcrypto = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/webcrypto.js"() {
    webcrypto_default = crypto;
    isCryptoKey = /* @__PURE__ */ __name2((key2) => key2 instanceof CryptoKey, "isCryptoKey");
  }
});
var digest;
var digest_default;
var init_digest = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/digest.js"() {
    init_webcrypto();
    digest = /* @__PURE__ */ __name2(async (algorithm, data) => {
      const subtleDigest = `SHA-${algorithm.slice(-3)}`;
      return new Uint8Array(await webcrypto_default.subtle.digest(subtleDigest, data));
    }, "digest");
    digest_default = digest;
  }
});
function concat(...buffers) {
  const size = buffers.reduce((acc, { length }) => acc + length, 0);
  const buf2 = new Uint8Array(size);
  let i3 = 0;
  for (const buffer of buffers) {
    buf2.set(buffer, i3);
    i3 += buffer.length;
  }
  return buf2;
}
__name(concat, "concat");
__name2(concat, "concat");
function p2s(alg2, p2sInput) {
  return concat(encoder2.encode(alg2), new Uint8Array([0]), p2sInput);
}
__name(p2s, "p2s");
__name2(p2s, "p2s");
function writeUInt32BE(buf2, value, offset) {
  if (value < 0 || value >= MAX_INT32) {
    throw new RangeError(`value must be >= 0 and <= ${MAX_INT32 - 1}. Received ${value}`);
  }
  buf2.set([value >>> 24, value >>> 16, value >>> 8, value & 255], offset);
}
__name(writeUInt32BE, "writeUInt32BE");
__name2(writeUInt32BE, "writeUInt32BE");
function uint64be(value) {
  const high = Math.floor(value / MAX_INT32);
  const low = value % MAX_INT32;
  const buf2 = new Uint8Array(8);
  writeUInt32BE(buf2, high, 0);
  writeUInt32BE(buf2, low, 4);
  return buf2;
}
__name(uint64be, "uint64be");
__name2(uint64be, "uint64be");
function uint32be(value) {
  const buf2 = new Uint8Array(4);
  writeUInt32BE(buf2, value);
  return buf2;
}
__name(uint32be, "uint32be");
__name2(uint32be, "uint32be");
function lengthAndInput(input) {
  return concat(uint32be(input.length), input);
}
__name(lengthAndInput, "lengthAndInput");
__name2(lengthAndInput, "lengthAndInput");
async function concatKdf(secret, bits, value) {
  const iterations = Math.ceil((bits >> 3) / 32);
  const res = new Uint8Array(iterations * 32);
  for (let iter = 0; iter < iterations; iter++) {
    const buf2 = new Uint8Array(4 + secret.length + value.length);
    buf2.set(uint32be(iter + 1));
    buf2.set(secret, 4);
    buf2.set(value, 4 + secret.length);
    res.set(await digest_default("sha256", buf2), iter * 32);
  }
  return res.slice(0, bits >> 3);
}
__name(concatKdf, "concatKdf");
__name2(concatKdf, "concatKdf");
var encoder2;
var decoder;
var MAX_INT32;
var init_buffer_utils = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/buffer_utils.js"() {
    init_digest();
    encoder2 = new TextEncoder();
    decoder = new TextDecoder();
    MAX_INT32 = 2 ** 32;
  }
});
var encodeBase64;
var encode;
var decodeBase64;
var decode;
var init_base64url = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/base64url.js"() {
    init_buffer_utils();
    encodeBase64 = /* @__PURE__ */ __name2((input) => {
      let unencoded = input;
      if (typeof unencoded === "string") {
        unencoded = encoder2.encode(unencoded);
      }
      const CHUNK_SIZE3 = 32768;
      const arr = [];
      for (let i3 = 0; i3 < unencoded.length; i3 += CHUNK_SIZE3) {
        arr.push(String.fromCharCode.apply(null, unencoded.subarray(i3, i3 + CHUNK_SIZE3)));
      }
      return btoa(arr.join(""));
    }, "encodeBase64");
    encode = /* @__PURE__ */ __name2((input) => {
      return encodeBase64(input).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }, "encode");
    decodeBase64 = /* @__PURE__ */ __name2((encoded) => {
      const binary = atob(encoded);
      const bytes = new Uint8Array(binary.length);
      for (let i3 = 0; i3 < binary.length; i3++) {
        bytes[i3] = binary.charCodeAt(i3);
      }
      return bytes;
    }, "decodeBase64");
    decode = /* @__PURE__ */ __name2((input) => {
      let encoded = input;
      if (encoded instanceof Uint8Array) {
        encoded = decoder.decode(encoded);
      }
      encoded = encoded.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, "");
      try {
        return decodeBase64(encoded);
      } catch {
        throw new TypeError("The input to be decoded is not correctly encoded.");
      }
    }, "decode");
  }
});
var JOSEError;
var JWTClaimValidationFailed;
var JWTExpired;
var JOSEAlgNotAllowed;
var JOSENotSupported;
var JWEDecryptionFailed;
var JWEInvalid;
var JWSInvalid;
var JWTInvalid;
var JWKInvalid;
var JWKSInvalid;
var JWKSNoMatchingKey;
var JWKSMultipleMatchingKeys;
var JWKSTimeout;
var JWSSignatureVerificationFailed;
var init_errors2 = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/util/errors.js"() {
    JOSEError = class extends Error {
      static {
        __name(this, "JOSEError");
      }
      static {
        __name2(this, "JOSEError");
      }
      constructor(message2, options2) {
        super(message2, options2);
        this.code = "ERR_JOSE_GENERIC";
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    JOSEError.code = "ERR_JOSE_GENERIC";
    JWTClaimValidationFailed = class extends JOSEError {
      static {
        __name(this, "JWTClaimValidationFailed");
      }
      static {
        __name2(this, "JWTClaimValidationFailed");
      }
      constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
        super(message2, { cause: { claim, reason, payload } });
        this.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
      }
    };
    JWTClaimValidationFailed.code = "ERR_JWT_CLAIM_VALIDATION_FAILED";
    JWTExpired = class extends JOSEError {
      static {
        __name(this, "JWTExpired");
      }
      static {
        __name2(this, "JWTExpired");
      }
      constructor(message2, payload, claim = "unspecified", reason = "unspecified") {
        super(message2, { cause: { claim, reason, payload } });
        this.code = "ERR_JWT_EXPIRED";
        this.claim = claim;
        this.reason = reason;
        this.payload = payload;
      }
    };
    JWTExpired.code = "ERR_JWT_EXPIRED";
    JOSEAlgNotAllowed = class extends JOSEError {
      static {
        __name(this, "JOSEAlgNotAllowed");
      }
      static {
        __name2(this, "JOSEAlgNotAllowed");
      }
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_ALG_NOT_ALLOWED";
      }
    };
    JOSEAlgNotAllowed.code = "ERR_JOSE_ALG_NOT_ALLOWED";
    JOSENotSupported = class extends JOSEError {
      static {
        __name(this, "JOSENotSupported");
      }
      static {
        __name2(this, "JOSENotSupported");
      }
      constructor() {
        super(...arguments);
        this.code = "ERR_JOSE_NOT_SUPPORTED";
      }
    };
    JOSENotSupported.code = "ERR_JOSE_NOT_SUPPORTED";
    JWEDecryptionFailed = class extends JOSEError {
      static {
        __name(this, "JWEDecryptionFailed");
      }
      static {
        __name2(this, "JWEDecryptionFailed");
      }
      constructor(message2 = "decryption operation failed", options2) {
        super(message2, options2);
        this.code = "ERR_JWE_DECRYPTION_FAILED";
      }
    };
    JWEDecryptionFailed.code = "ERR_JWE_DECRYPTION_FAILED";
    JWEInvalid = class extends JOSEError {
      static {
        __name(this, "JWEInvalid");
      }
      static {
        __name2(this, "JWEInvalid");
      }
      constructor() {
        super(...arguments);
        this.code = "ERR_JWE_INVALID";
      }
    };
    JWEInvalid.code = "ERR_JWE_INVALID";
    JWSInvalid = class extends JOSEError {
      static {
        __name(this, "JWSInvalid");
      }
      static {
        __name2(this, "JWSInvalid");
      }
      constructor() {
        super(...arguments);
        this.code = "ERR_JWS_INVALID";
      }
    };
    JWSInvalid.code = "ERR_JWS_INVALID";
    JWTInvalid = class extends JOSEError {
      static {
        __name(this, "JWTInvalid");
      }
      static {
        __name2(this, "JWTInvalid");
      }
      constructor() {
        super(...arguments);
        this.code = "ERR_JWT_INVALID";
      }
    };
    JWTInvalid.code = "ERR_JWT_INVALID";
    JWKInvalid = class extends JOSEError {
      static {
        __name(this, "JWKInvalid");
      }
      static {
        __name2(this, "JWKInvalid");
      }
      constructor() {
        super(...arguments);
        this.code = "ERR_JWK_INVALID";
      }
    };
    JWKInvalid.code = "ERR_JWK_INVALID";
    JWKSInvalid = class extends JOSEError {
      static {
        __name(this, "JWKSInvalid");
      }
      static {
        __name2(this, "JWKSInvalid");
      }
      constructor() {
        super(...arguments);
        this.code = "ERR_JWKS_INVALID";
      }
    };
    JWKSInvalid.code = "ERR_JWKS_INVALID";
    JWKSNoMatchingKey = class extends JOSEError {
      static {
        __name(this, "JWKSNoMatchingKey");
      }
      static {
        __name2(this, "JWKSNoMatchingKey");
      }
      constructor(message2 = "no applicable key found in the JSON Web Key Set", options2) {
        super(message2, options2);
        this.code = "ERR_JWKS_NO_MATCHING_KEY";
      }
    };
    JWKSNoMatchingKey.code = "ERR_JWKS_NO_MATCHING_KEY";
    JWKSMultipleMatchingKeys = class extends JOSEError {
      static {
        __name(this, "JWKSMultipleMatchingKeys");
      }
      static {
        __name2(this, "JWKSMultipleMatchingKeys");
      }
      constructor(message2 = "multiple matching keys found in the JSON Web Key Set", options2) {
        super(message2, options2);
        this.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
      }
    };
    JWKSMultipleMatchingKeys.code = "ERR_JWKS_MULTIPLE_MATCHING_KEYS";
    JWKSTimeout = class extends JOSEError {
      static {
        __name(this, "JWKSTimeout");
      }
      static {
        __name2(this, "JWKSTimeout");
      }
      constructor(message2 = "request timed out", options2) {
        super(message2, options2);
        this.code = "ERR_JWKS_TIMEOUT";
      }
    };
    JWKSTimeout.code = "ERR_JWKS_TIMEOUT";
    JWSSignatureVerificationFailed = class extends JOSEError {
      static {
        __name(this, "JWSSignatureVerificationFailed");
      }
      static {
        __name2(this, "JWSSignatureVerificationFailed");
      }
      constructor(message2 = "signature verification failed", options2) {
        super(message2, options2);
        this.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
      }
    };
    JWSSignatureVerificationFailed.code = "ERR_JWS_SIGNATURE_VERIFICATION_FAILED";
  }
});
var random_default;
var init_random = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/random.js"() {
    init_webcrypto();
    random_default = webcrypto_default.getRandomValues.bind(webcrypto_default);
  }
});
function bitLength(alg2) {
  switch (alg2) {
    case "A128GCM":
    case "A128GCMKW":
    case "A192GCM":
    case "A192GCMKW":
    case "A256GCM":
    case "A256GCMKW":
      return 96;
    case "A128CBC-HS256":
    case "A192CBC-HS384":
    case "A256CBC-HS512":
      return 128;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg2}`);
  }
}
__name(bitLength, "bitLength");
__name2(bitLength, "bitLength");
var iv_default;
var init_iv = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/iv.js"() {
    init_errors2();
    init_random();
    iv_default = /* @__PURE__ */ __name2((alg2) => random_default(new Uint8Array(bitLength(alg2) >> 3)), "iv_default");
  }
});
var checkIvLength;
var check_iv_length_default;
var init_check_iv_length = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/check_iv_length.js"() {
    init_errors2();
    init_iv();
    checkIvLength = /* @__PURE__ */ __name2((enc2, iv) => {
      if (iv.length << 3 !== bitLength(enc2)) {
        throw new JWEInvalid("Invalid Initialization Vector length");
      }
    }, "checkIvLength");
    check_iv_length_default = checkIvLength;
  }
});
var checkCekLength;
var check_cek_length_default;
var init_check_cek_length = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/check_cek_length.js"() {
    init_errors2();
    checkCekLength = /* @__PURE__ */ __name2((cek, expected) => {
      const actual = cek.byteLength << 3;
      if (actual !== expected) {
        throw new JWEInvalid(`Invalid Content Encryption Key length. Expected ${expected} bits, got ${actual} bits`);
      }
    }, "checkCekLength");
    check_cek_length_default = checkCekLength;
  }
});
var timingSafeEqual;
var timing_safe_equal_default;
var init_timing_safe_equal = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/timing_safe_equal.js"() {
    timingSafeEqual = /* @__PURE__ */ __name2((a3, b3) => {
      if (!(a3 instanceof Uint8Array)) {
        throw new TypeError("First argument must be a buffer");
      }
      if (!(b3 instanceof Uint8Array)) {
        throw new TypeError("Second argument must be a buffer");
      }
      if (a3.length !== b3.length) {
        throw new TypeError("Input buffers must have the same length");
      }
      const len = a3.length;
      let out = 0;
      let i3 = -1;
      while (++i3 < len) {
        out |= a3[i3] ^ b3[i3];
      }
      return out === 0;
    }, "timingSafeEqual");
    timing_safe_equal_default = timingSafeEqual;
  }
});
function unusable(name, prop = "algorithm.name") {
  return new TypeError(`CryptoKey does not support this operation, its ${prop} must be ${name}`);
}
__name(unusable, "unusable");
__name2(unusable, "unusable");
function isAlgorithm(algorithm, name) {
  return algorithm.name === name;
}
__name(isAlgorithm, "isAlgorithm");
__name2(isAlgorithm, "isAlgorithm");
function getHashLength(hash2) {
  return parseInt(hash2.name.slice(4), 10);
}
__name(getHashLength, "getHashLength");
__name2(getHashLength, "getHashLength");
function checkUsage(key2, usages) {
  if (usages.length && !usages.some((expected) => key2.usages.includes(expected))) {
    let msg = "CryptoKey does not support this operation, its usages must include ";
    if (usages.length > 2) {
      const last = usages.pop();
      msg += `one of ${usages.join(", ")}, or ${last}.`;
    } else if (usages.length === 2) {
      msg += `one of ${usages[0]} or ${usages[1]}.`;
    } else {
      msg += `${usages[0]}.`;
    }
    throw new TypeError(msg);
  }
}
__name(checkUsage, "checkUsage");
__name2(checkUsage, "checkUsage");
function checkEncCryptoKey(key2, alg2, ...usages) {
  switch (alg2) {
    case "A128GCM":
    case "A192GCM":
    case "A256GCM": {
      if (!isAlgorithm(key2.algorithm, "AES-GCM"))
        throw unusable("AES-GCM");
      const expected = parseInt(alg2.slice(1, 4), 10);
      const actual = key2.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (!isAlgorithm(key2.algorithm, "AES-KW"))
        throw unusable("AES-KW");
      const expected = parseInt(alg2.slice(1, 4), 10);
      const actual = key2.algorithm.length;
      if (actual !== expected)
        throw unusable(expected, "algorithm.length");
      break;
    }
    case "ECDH": {
      switch (key2.algorithm.name) {
        case "ECDH":
        case "X25519":
        case "X448":
          break;
        default:
          throw unusable("ECDH, X25519, or X448");
      }
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW":
      if (!isAlgorithm(key2.algorithm, "PBKDF2"))
        throw unusable("PBKDF2");
      break;
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (!isAlgorithm(key2.algorithm, "RSA-OAEP"))
        throw unusable("RSA-OAEP");
      const expected = parseInt(alg2.slice(9), 10) || 1;
      const actual = getHashLength(key2.algorithm.hash);
      if (actual !== expected)
        throw unusable(`SHA-${expected}`, "algorithm.hash");
      break;
    }
    default:
      throw new TypeError("CryptoKey does not support this operation");
  }
  checkUsage(key2, usages);
}
__name(checkEncCryptoKey, "checkEncCryptoKey");
__name2(checkEncCryptoKey, "checkEncCryptoKey");
var init_crypto_key = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/crypto_key.js"() {
  }
});
function message(msg, actual, ...types2) {
  types2 = types2.filter(Boolean);
  if (types2.length > 2) {
    const last = types2.pop();
    msg += `one of type ${types2.join(", ")}, or ${last}.`;
  } else if (types2.length === 2) {
    msg += `one of type ${types2[0]} or ${types2[1]}.`;
  } else {
    msg += `of type ${types2[0]}.`;
  }
  if (actual == null) {
    msg += ` Received ${actual}`;
  } else if (typeof actual === "function" && actual.name) {
    msg += ` Received function ${actual.name}`;
  } else if (typeof actual === "object" && actual != null) {
    if (actual.constructor?.name) {
      msg += ` Received an instance of ${actual.constructor.name}`;
    }
  }
  return msg;
}
__name(message, "message");
__name2(message, "message");
function withAlg(alg2, actual, ...types2) {
  return message(`Key for the ${alg2} algorithm must be `, actual, ...types2);
}
__name(withAlg, "withAlg");
__name2(withAlg, "withAlg");
var invalid_key_input_default;
var init_invalid_key_input = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/invalid_key_input.js"() {
    invalid_key_input_default = /* @__PURE__ */ __name2((actual, ...types2) => {
      return message("Key must be ", actual, ...types2);
    }, "invalid_key_input_default");
  }
});
var is_key_like_default;
var types;
var init_is_key_like = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/is_key_like.js"() {
    init_webcrypto();
    is_key_like_default = /* @__PURE__ */ __name2((key2) => {
      if (isCryptoKey(key2)) {
        return true;
      }
      return key2?.[Symbol.toStringTag] === "KeyObject";
    }, "is_key_like_default");
    types = ["CryptoKey"];
  }
});
async function cbcDecrypt(enc2, cek, ciphertext, iv, tag2, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc2.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["decrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const expectedTag = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  let macCheckPassed;
  try {
    macCheckPassed = timing_safe_equal_default(tag2, expectedTag);
  } catch {
  }
  if (!macCheckPassed) {
    throw new JWEDecryptionFailed();
  }
  let plaintext;
  try {
    plaintext = new Uint8Array(await webcrypto_default.subtle.decrypt({ iv, name: "AES-CBC" }, encKey, ciphertext));
  } catch {
  }
  if (!plaintext) {
    throw new JWEDecryptionFailed();
  }
  return plaintext;
}
__name(cbcDecrypt, "cbcDecrypt");
__name2(cbcDecrypt, "cbcDecrypt");
async function gcmDecrypt(enc2, cek, ciphertext, iv, tag2, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["decrypt"]);
  } else {
    checkEncCryptoKey(cek, enc2, "decrypt");
    encKey = cek;
  }
  try {
    return new Uint8Array(await webcrypto_default.subtle.decrypt({
      additionalData: aad,
      iv,
      name: "AES-GCM",
      tagLength: 128
    }, encKey, concat(ciphertext, tag2)));
  } catch {
    throw new JWEDecryptionFailed();
  }
}
__name(gcmDecrypt, "gcmDecrypt");
__name2(gcmDecrypt, "gcmDecrypt");
var decrypt;
var decrypt_default;
var init_decrypt = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/decrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_timing_safe_equal();
    init_errors2();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    decrypt = /* @__PURE__ */ __name2(async (enc2, cek, ciphertext, iv, tag2, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      if (!iv) {
        throw new JWEInvalid("JWE Initialization Vector missing");
      }
      if (!tag2) {
        throw new JWEInvalid("JWE Authentication Tag missing");
      }
      check_iv_length_default(enc2, iv);
      switch (enc2) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc2.slice(-3), 10));
          return cbcDecrypt(enc2, cek, ciphertext, iv, tag2, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array)
            check_cek_length_default(cek, parseInt(enc2.slice(1, 4), 10));
          return gcmDecrypt(enc2, cek, ciphertext, iv, tag2, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    }, "decrypt");
    decrypt_default = decrypt;
  }
});
var isDisjoint;
var is_disjoint_default;
var init_is_disjoint = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/is_disjoint.js"() {
    isDisjoint = /* @__PURE__ */ __name2((...headers) => {
      const sources = headers.filter(Boolean);
      if (sources.length === 0 || sources.length === 1) {
        return true;
      }
      let acc;
      for (const header of sources) {
        const parameters = Object.keys(header);
        if (!acc || acc.size === 0) {
          acc = new Set(parameters);
          continue;
        }
        for (const parameter of parameters) {
          if (acc.has(parameter)) {
            return false;
          }
          acc.add(parameter);
        }
      }
      return true;
    }, "isDisjoint");
    is_disjoint_default = isDisjoint;
  }
});
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
__name(isObjectLike, "isObjectLike");
__name2(isObjectLike, "isObjectLike");
function isObject(input) {
  if (!isObjectLike(input) || Object.prototype.toString.call(input) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(input) === null) {
    return true;
  }
  let proto = input;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(input) === proto;
}
__name(isObject, "isObject");
__name2(isObject, "isObject");
var init_is_object = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/is_object.js"() {
  }
});
var bogusWebCrypto;
var bogus_default;
var init_bogus = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/bogus.js"() {
    bogusWebCrypto = [
      { hash: "SHA-256", name: "HMAC" },
      true,
      ["sign"]
    ];
    bogus_default = bogusWebCrypto;
  }
});
function checkKeySize(key2, alg2) {
  if (key2.algorithm.length !== parseInt(alg2.slice(1, 4), 10)) {
    throw new TypeError(`Invalid key size for alg: ${alg2}`);
  }
}
__name(checkKeySize, "checkKeySize");
__name2(checkKeySize, "checkKeySize");
function getCryptoKey(key2, alg2, usage) {
  if (isCryptoKey(key2)) {
    checkEncCryptoKey(key2, alg2, usage);
    return key2;
  }
  if (key2 instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key2, "AES-KW", true, [usage]);
  }
  throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
}
__name(getCryptoKey, "getCryptoKey");
__name2(getCryptoKey, "getCryptoKey");
var wrap;
var unwrap;
var init_aeskw = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/aeskw.js"() {
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    wrap = /* @__PURE__ */ __name2(async (alg2, key2, cek) => {
      const cryptoKey = await getCryptoKey(key2, alg2, "wrapKey");
      checkKeySize(cryptoKey, alg2);
      const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, cryptoKey, "AES-KW"));
    }, "wrap");
    unwrap = /* @__PURE__ */ __name2(async (alg2, key2, encryptedKey) => {
      const cryptoKey = await getCryptoKey(key2, alg2, "unwrapKey");
      checkKeySize(cryptoKey, alg2);
      const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, cryptoKey, "AES-KW", ...bogus_default);
      return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
    }, "unwrap");
  }
});
async function deriveKey(publicKey, privateKey, algorithm, keyLength, apu = new Uint8Array(0), apv = new Uint8Array(0)) {
  if (!isCryptoKey(publicKey)) {
    throw new TypeError(invalid_key_input_default(publicKey, ...types));
  }
  checkEncCryptoKey(publicKey, "ECDH");
  if (!isCryptoKey(privateKey)) {
    throw new TypeError(invalid_key_input_default(privateKey, ...types));
  }
  checkEncCryptoKey(privateKey, "ECDH", "deriveBits");
  const value = concat(lengthAndInput(encoder2.encode(algorithm)), lengthAndInput(apu), lengthAndInput(apv), uint32be(keyLength));
  let length;
  if (publicKey.algorithm.name === "X25519") {
    length = 256;
  } else if (publicKey.algorithm.name === "X448") {
    length = 448;
  } else {
    length = Math.ceil(parseInt(publicKey.algorithm.namedCurve.substr(-3), 10) / 8) << 3;
  }
  const sharedSecret = new Uint8Array(await webcrypto_default.subtle.deriveBits({
    name: publicKey.algorithm.name,
    public: publicKey
  }, privateKey, length));
  return concatKdf(sharedSecret, keyLength, value);
}
__name(deriveKey, "deriveKey");
__name2(deriveKey, "deriveKey");
async function generateEpk(key2) {
  if (!isCryptoKey(key2)) {
    throw new TypeError(invalid_key_input_default(key2, ...types));
  }
  return webcrypto_default.subtle.generateKey(key2.algorithm, true, ["deriveBits"]);
}
__name(generateEpk, "generateEpk");
__name2(generateEpk, "generateEpk");
function ecdhAllowed(key2) {
  if (!isCryptoKey(key2)) {
    throw new TypeError(invalid_key_input_default(key2, ...types));
  }
  return ["P-256", "P-384", "P-521"].includes(key2.algorithm.namedCurve) || key2.algorithm.name === "X25519" || key2.algorithm.name === "X448";
}
__name(ecdhAllowed, "ecdhAllowed");
__name2(ecdhAllowed, "ecdhAllowed");
var init_ecdhes = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/ecdhes.js"() {
    init_buffer_utils();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
  }
});
function checkP2s(p2s2) {
  if (!(p2s2 instanceof Uint8Array) || p2s2.length < 8) {
    throw new JWEInvalid("PBES2 Salt Input must be 8 or more octets");
  }
}
__name(checkP2s, "checkP2s");
__name2(checkP2s, "checkP2s");
var init_check_p2s = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/check_p2s.js"() {
    init_errors2();
  }
});
function getCryptoKey2(key2, alg2) {
  if (key2 instanceof Uint8Array) {
    return webcrypto_default.subtle.importKey("raw", key2, "PBKDF2", false, ["deriveBits"]);
  }
  if (isCryptoKey(key2)) {
    checkEncCryptoKey(key2, alg2, "deriveBits", "deriveKey");
    return key2;
  }
  throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
}
__name(getCryptoKey2, "getCryptoKey2");
__name2(getCryptoKey2, "getCryptoKey2");
async function deriveKey2(p2s2, alg2, p2c, key2) {
  checkP2s(p2s2);
  const salt = p2s(alg2, p2s2);
  const keylen = parseInt(alg2.slice(13, 16), 10);
  const subtleAlg = {
    hash: `SHA-${alg2.slice(8, 11)}`,
    iterations: p2c,
    name: "PBKDF2",
    salt
  };
  const wrapAlg = {
    length: keylen,
    name: "AES-KW"
  };
  const cryptoKey = await getCryptoKey2(key2, alg2);
  if (cryptoKey.usages.includes("deriveBits")) {
    return new Uint8Array(await webcrypto_default.subtle.deriveBits(subtleAlg, cryptoKey, keylen));
  }
  if (cryptoKey.usages.includes("deriveKey")) {
    return webcrypto_default.subtle.deriveKey(subtleAlg, cryptoKey, wrapAlg, false, ["wrapKey", "unwrapKey"]);
  }
  throw new TypeError('PBKDF2 key "usages" must include "deriveBits" or "deriveKey"');
}
__name(deriveKey2, "deriveKey2");
__name2(deriveKey2, "deriveKey2");
var encrypt;
var decrypt2;
var init_pbes2kw = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/pbes2kw.js"() {
    init_random();
    init_buffer_utils();
    init_base64url();
    init_aeskw();
    init_check_p2s();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_is_key_like();
    encrypt = /* @__PURE__ */ __name2(async (alg2, key2, cek, p2c = 2048, p2s2 = random_default(new Uint8Array(16))) => {
      const derived2 = await deriveKey2(p2s2, alg2, p2c, key2);
      const encryptedKey = await wrap(alg2.slice(-6), derived2, cek);
      return { encryptedKey, p2c, p2s: encode(p2s2) };
    }, "encrypt");
    decrypt2 = /* @__PURE__ */ __name2(async (alg2, key2, encryptedKey, p2c, p2s2) => {
      const derived2 = await deriveKey2(p2s2, alg2, p2c, key2);
      return unwrap(alg2.slice(-6), derived2, encryptedKey);
    }, "decrypt2");
  }
});
function subtleRsaEs(alg2) {
  switch (alg2) {
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512":
      return "RSA-OAEP";
    default:
      throw new JOSENotSupported(`alg ${alg2} is not supported either by JOSE or your javascript runtime`);
  }
}
__name(subtleRsaEs, "subtleRsaEs");
__name2(subtleRsaEs, "subtleRsaEs");
var init_subtle_rsaes = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/subtle_rsaes.js"() {
    init_errors2();
  }
});
var check_key_length_default;
var init_check_key_length = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/check_key_length.js"() {
    check_key_length_default = /* @__PURE__ */ __name2((alg2, key2) => {
      if (alg2.startsWith("RS") || alg2.startsWith("PS")) {
        const { modulusLength } = key2.algorithm;
        if (typeof modulusLength !== "number" || modulusLength < 2048) {
          throw new TypeError(`${alg2} requires key modulusLength to be 2048 bits or larger`);
        }
      }
    }, "check_key_length_default");
  }
});
var encrypt2;
var decrypt3;
var init_rsaes = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/rsaes.js"() {
    init_subtle_rsaes();
    init_bogus();
    init_webcrypto();
    init_crypto_key();
    init_check_key_length();
    init_invalid_key_input();
    init_is_key_like();
    encrypt2 = /* @__PURE__ */ __name2(async (alg2, key2, cek) => {
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types));
      }
      checkEncCryptoKey(key2, alg2, "encrypt", "wrapKey");
      check_key_length_default(alg2, key2);
      if (key2.usages.includes("encrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.encrypt(subtleRsaEs(alg2), key2, cek));
      }
      if (key2.usages.includes("wrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.importKey("raw", cek, ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.wrapKey("raw", cryptoKeyCek, key2, subtleRsaEs(alg2)));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "encrypt" or "wrapKey" for this operation');
    }, "encrypt2");
    decrypt3 = /* @__PURE__ */ __name2(async (alg2, key2, encryptedKey) => {
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types));
      }
      checkEncCryptoKey(key2, alg2, "decrypt", "unwrapKey");
      check_key_length_default(alg2, key2);
      if (key2.usages.includes("decrypt")) {
        return new Uint8Array(await webcrypto_default.subtle.decrypt(subtleRsaEs(alg2), key2, encryptedKey));
      }
      if (key2.usages.includes("unwrapKey")) {
        const cryptoKeyCek = await webcrypto_default.subtle.unwrapKey("raw", encryptedKey, key2, subtleRsaEs(alg2), ...bogus_default);
        return new Uint8Array(await webcrypto_default.subtle.exportKey("raw", cryptoKeyCek));
      }
      throw new TypeError('RSA-OAEP key "usages" must include "decrypt" or "unwrapKey" for this operation');
    }, "decrypt3");
  }
});
function isJWK(key2) {
  return isObject(key2) && typeof key2.kty === "string";
}
__name(isJWK, "isJWK");
__name2(isJWK, "isJWK");
function isPrivateJWK(key2) {
  return key2.kty !== "oct" && typeof key2.d === "string";
}
__name(isPrivateJWK, "isPrivateJWK");
__name2(isPrivateJWK, "isPrivateJWK");
function isPublicJWK(key2) {
  return key2.kty !== "oct" && typeof key2.d === "undefined";
}
__name(isPublicJWK, "isPublicJWK");
__name2(isPublicJWK, "isPublicJWK");
function isSecretJWK(key2) {
  return isJWK(key2) && key2.kty === "oct" && typeof key2.k === "string";
}
__name(isSecretJWK, "isSecretJWK");
__name2(isSecretJWK, "isSecretJWK");
var init_is_jwk = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/is_jwk.js"() {
    init_is_object();
  }
});
function subtleMapping(jwk) {
  let algorithm;
  let keyUsages;
  switch (jwk.kty) {
    case "RSA": {
      switch (jwk.alg) {
        case "PS256":
        case "PS384":
        case "PS512":
          algorithm = { name: "RSA-PSS", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RS256":
        case "RS384":
        case "RS512":
          algorithm = { name: "RSASSA-PKCS1-v1_5", hash: `SHA-${jwk.alg.slice(-3)}` };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "RSA-OAEP":
        case "RSA-OAEP-256":
        case "RSA-OAEP-384":
        case "RSA-OAEP-512":
          algorithm = {
            name: "RSA-OAEP",
            hash: `SHA-${parseInt(jwk.alg.slice(-3), 10) || 1}`
          };
          keyUsages = jwk.d ? ["decrypt", "unwrapKey"] : ["encrypt", "wrapKey"];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "EC": {
      switch (jwk.alg) {
        case "ES256":
          algorithm = { name: "ECDSA", namedCurve: "P-256" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES384":
          algorithm = { name: "ECDSA", namedCurve: "P-384" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ES512":
          algorithm = { name: "ECDSA", namedCurve: "P-521" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: "ECDH", namedCurve: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    case "OKP": {
      switch (jwk.alg) {
        case "Ed25519":
          algorithm = { name: "Ed25519" };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "EdDSA":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["sign"] : ["verify"];
          break;
        case "ECDH-ES":
        case "ECDH-ES+A128KW":
        case "ECDH-ES+A192KW":
        case "ECDH-ES+A256KW":
          algorithm = { name: jwk.crv };
          keyUsages = jwk.d ? ["deriveBits"] : [];
          break;
        default:
          throw new JOSENotSupported('Invalid or unsupported JWK "alg" (Algorithm) Parameter value');
      }
      break;
    }
    default:
      throw new JOSENotSupported('Invalid or unsupported JWK "kty" (Key Type) Parameter value');
  }
  return { algorithm, keyUsages };
}
__name(subtleMapping, "subtleMapping");
__name2(subtleMapping, "subtleMapping");
var parse2;
var jwk_to_key_default;
var init_jwk_to_key = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/jwk_to_key.js"() {
    init_webcrypto();
    init_errors2();
    parse2 = /* @__PURE__ */ __name2(async (jwk) => {
      if (!jwk.alg) {
        throw new TypeError('"alg" argument is required when "jwk.alg" is not present');
      }
      const { algorithm, keyUsages } = subtleMapping(jwk);
      const rest = [
        algorithm,
        jwk.ext ?? false,
        jwk.key_ops ?? keyUsages
      ];
      const keyData = { ...jwk };
      delete keyData.alg;
      delete keyData.use;
      return webcrypto_default.subtle.importKey("jwk", keyData, ...rest);
    }, "parse2");
    jwk_to_key_default = parse2;
  }
});
var exportKeyValue;
var privCache;
var pubCache;
var isKeyObject;
var importAndCache;
var normalizePublicKey;
var normalizePrivateKey;
var normalize_key_default;
var init_normalize_key = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/normalize_key.js"() {
    init_is_jwk();
    init_base64url();
    init_jwk_to_key();
    exportKeyValue = /* @__PURE__ */ __name2((k3) => decode(k3), "exportKeyValue");
    isKeyObject = /* @__PURE__ */ __name2((key2) => {
      return key2?.[Symbol.toStringTag] === "KeyObject";
    }, "isKeyObject");
    importAndCache = /* @__PURE__ */ __name2(async (cache, key2, jwk, alg2, freeze = false) => {
      let cached = cache.get(key2);
      if (cached?.[alg2]) {
        return cached[alg2];
      }
      const cryptoKey = await jwk_to_key_default({ ...jwk, alg: alg2 });
      if (freeze)
        Object.freeze(key2);
      if (!cached) {
        cache.set(key2, { [alg2]: cryptoKey });
      } else {
        cached[alg2] = cryptoKey;
      }
      return cryptoKey;
    }, "importAndCache");
    normalizePublicKey = /* @__PURE__ */ __name2((key2, alg2) => {
      if (isKeyObject(key2)) {
        let jwk = key2.export({ format: "jwk" });
        delete jwk.d;
        delete jwk.dp;
        delete jwk.dq;
        delete jwk.p;
        delete jwk.q;
        delete jwk.qi;
        if (jwk.k) {
          return exportKeyValue(jwk.k);
        }
        pubCache || (pubCache = /* @__PURE__ */ new WeakMap());
        return importAndCache(pubCache, key2, jwk, alg2);
      }
      if (isJWK(key2)) {
        if (key2.k)
          return decode(key2.k);
        pubCache || (pubCache = /* @__PURE__ */ new WeakMap());
        const cryptoKey = importAndCache(pubCache, key2, key2, alg2, true);
        return cryptoKey;
      }
      return key2;
    }, "normalizePublicKey");
    normalizePrivateKey = /* @__PURE__ */ __name2((key2, alg2) => {
      if (isKeyObject(key2)) {
        let jwk = key2.export({ format: "jwk" });
        if (jwk.k) {
          return exportKeyValue(jwk.k);
        }
        privCache || (privCache = /* @__PURE__ */ new WeakMap());
        return importAndCache(privCache, key2, jwk, alg2);
      }
      if (isJWK(key2)) {
        if (key2.k)
          return decode(key2.k);
        privCache || (privCache = /* @__PURE__ */ new WeakMap());
        const cryptoKey = importAndCache(privCache, key2, key2, alg2, true);
        return cryptoKey;
      }
      return key2;
    }, "normalizePrivateKey");
    normalize_key_default = { normalizePublicKey, normalizePrivateKey };
  }
});
function bitLength2(alg2) {
  switch (alg2) {
    case "A128GCM":
      return 128;
    case "A192GCM":
      return 192;
    case "A256GCM":
    case "A128CBC-HS256":
      return 256;
    case "A192CBC-HS384":
      return 384;
    case "A256CBC-HS512":
      return 512;
    default:
      throw new JOSENotSupported(`Unsupported JWE Algorithm: ${alg2}`);
  }
}
__name(bitLength2, "bitLength2");
__name2(bitLength2, "bitLength2");
var cek_default;
var init_cek = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/cek.js"() {
    init_errors2();
    init_random();
    cek_default = /* @__PURE__ */ __name2((alg2) => random_default(new Uint8Array(bitLength2(alg2) >> 3)), "cek_default");
  }
});
async function importJWK(jwk, alg2) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  alg2 || (alg2 = jwk.alg);
  switch (jwk.kty) {
    case "oct":
      if (typeof jwk.k !== "string" || !jwk.k) {
        throw new TypeError('missing "k" (Key Value) Parameter value');
      }
      return decode(jwk.k);
    case "RSA":
      if ("oth" in jwk && jwk.oth !== void 0) {
        throw new JOSENotSupported('RSA JWK "oth" (Other Primes Info) Parameter value is not supported');
      }
    case "EC":
    case "OKP":
      return jwk_to_key_default({ ...jwk, alg: alg2 });
    default:
      throw new JOSENotSupported('Unsupported "kty" (Key Type) Parameter value');
  }
}
__name(importJWK, "importJWK");
__name2(importJWK, "importJWK");
var init_import = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/key/import.js"() {
    init_base64url();
    init_jwk_to_key();
    init_errors2();
    init_is_object();
  }
});
function checkKeyType(allowJwk, alg2, key2, usage) {
  const symmetric = alg2.startsWith("HS") || alg2 === "dir" || alg2.startsWith("PBES2") || /^A\d{3}(?:GCM)?KW$/.test(alg2);
  if (symmetric) {
    symmetricTypeCheck(alg2, key2, usage, allowJwk);
  } else {
    asymmetricTypeCheck(alg2, key2, usage, allowJwk);
  }
}
__name(checkKeyType, "checkKeyType");
__name2(checkKeyType, "checkKeyType");
var tag;
var jwkMatchesOp;
var symmetricTypeCheck;
var asymmetricTypeCheck;
var check_key_type_default;
var checkKeyTypeWithJwk;
var init_check_key_type = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/check_key_type.js"() {
    init_invalid_key_input();
    init_is_key_like();
    init_is_jwk();
    tag = /* @__PURE__ */ __name2((key2) => key2?.[Symbol.toStringTag], "tag");
    jwkMatchesOp = /* @__PURE__ */ __name2((alg2, key2, usage) => {
      if (key2.use !== void 0 && key2.use !== "sig") {
        throw new TypeError("Invalid key for this operation, when present its use must be sig");
      }
      if (key2.key_ops !== void 0 && key2.key_ops.includes?.(usage) !== true) {
        throw new TypeError(`Invalid key for this operation, when present its key_ops must include ${usage}`);
      }
      if (key2.alg !== void 0 && key2.alg !== alg2) {
        throw new TypeError(`Invalid key for this operation, when present its alg must be ${alg2}`);
      }
      return true;
    }, "jwkMatchesOp");
    symmetricTypeCheck = /* @__PURE__ */ __name2((alg2, key2, usage, allowJwk) => {
      if (key2 instanceof Uint8Array)
        return;
      if (allowJwk && isJWK(key2)) {
        if (isSecretJWK(key2) && jwkMatchesOp(alg2, key2, usage))
          return;
        throw new TypeError(`JSON Web Key for symmetric algorithms must have JWK "kty" (Key Type) equal to "oct" and the JWK "k" (Key Value) present`);
      }
      if (!is_key_like_default(key2)) {
        throw new TypeError(withAlg(alg2, key2, ...types, "Uint8Array", allowJwk ? "JSON Web Key" : null));
      }
      if (key2.type !== "secret") {
        throw new TypeError(`${tag(key2)} instances for symmetric algorithms must be of type "secret"`);
      }
    }, "symmetricTypeCheck");
    asymmetricTypeCheck = /* @__PURE__ */ __name2((alg2, key2, usage, allowJwk) => {
      if (allowJwk && isJWK(key2)) {
        switch (usage) {
          case "sign":
            if (isPrivateJWK(key2) && jwkMatchesOp(alg2, key2, usage))
              return;
            throw new TypeError(`JSON Web Key for this operation be a private JWK`);
          case "verify":
            if (isPublicJWK(key2) && jwkMatchesOp(alg2, key2, usage))
              return;
            throw new TypeError(`JSON Web Key for this operation be a public JWK`);
        }
      }
      if (!is_key_like_default(key2)) {
        throw new TypeError(withAlg(alg2, key2, ...types, allowJwk ? "JSON Web Key" : null));
      }
      if (key2.type === "secret") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithms must not be of type "secret"`);
      }
      if (usage === "sign" && key2.type === "public") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithm signing must be of type "private"`);
      }
      if (usage === "decrypt" && key2.type === "public") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithm decryption must be of type "private"`);
      }
      if (key2.algorithm && usage === "verify" && key2.type === "private") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithm verifying must be of type "public"`);
      }
      if (key2.algorithm && usage === "encrypt" && key2.type === "private") {
        throw new TypeError(`${tag(key2)} instances for asymmetric algorithm encryption must be of type "public"`);
      }
    }, "asymmetricTypeCheck");
    check_key_type_default = checkKeyType.bind(void 0, false);
    checkKeyTypeWithJwk = checkKeyType.bind(void 0, true);
  }
});
async function cbcEncrypt(enc2, plaintext, cek, iv, aad) {
  if (!(cek instanceof Uint8Array)) {
    throw new TypeError(invalid_key_input_default(cek, "Uint8Array"));
  }
  const keySize = parseInt(enc2.slice(1, 4), 10);
  const encKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(keySize >> 3), "AES-CBC", false, ["encrypt"]);
  const macKey = await webcrypto_default.subtle.importKey("raw", cek.subarray(0, keySize >> 3), {
    hash: `SHA-${keySize << 1}`,
    name: "HMAC"
  }, false, ["sign"]);
  const ciphertext = new Uint8Array(await webcrypto_default.subtle.encrypt({
    iv,
    name: "AES-CBC"
  }, encKey, plaintext));
  const macData = concat(aad, iv, ciphertext, uint64be(aad.length << 3));
  const tag2 = new Uint8Array((await webcrypto_default.subtle.sign("HMAC", macKey, macData)).slice(0, keySize >> 3));
  return { ciphertext, tag: tag2, iv };
}
__name(cbcEncrypt, "cbcEncrypt");
__name2(cbcEncrypt, "cbcEncrypt");
async function gcmEncrypt(enc2, plaintext, cek, iv, aad) {
  let encKey;
  if (cek instanceof Uint8Array) {
    encKey = await webcrypto_default.subtle.importKey("raw", cek, "AES-GCM", false, ["encrypt"]);
  } else {
    checkEncCryptoKey(cek, enc2, "encrypt");
    encKey = cek;
  }
  const encrypted = new Uint8Array(await webcrypto_default.subtle.encrypt({
    additionalData: aad,
    iv,
    name: "AES-GCM",
    tagLength: 128
  }, encKey, plaintext));
  const tag2 = encrypted.slice(-16);
  const ciphertext = encrypted.slice(0, -16);
  return { ciphertext, tag: tag2, iv };
}
__name(gcmEncrypt, "gcmEncrypt");
__name2(gcmEncrypt, "gcmEncrypt");
var encrypt3;
var encrypt_default;
var init_encrypt = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/encrypt.js"() {
    init_buffer_utils();
    init_check_iv_length();
    init_check_cek_length();
    init_webcrypto();
    init_crypto_key();
    init_invalid_key_input();
    init_iv();
    init_errors2();
    init_is_key_like();
    encrypt3 = /* @__PURE__ */ __name2(async (enc2, plaintext, cek, iv, aad) => {
      if (!isCryptoKey(cek) && !(cek instanceof Uint8Array)) {
        throw new TypeError(invalid_key_input_default(cek, ...types, "Uint8Array"));
      }
      if (iv) {
        check_iv_length_default(enc2, iv);
      } else {
        iv = iv_default(enc2);
      }
      switch (enc2) {
        case "A128CBC-HS256":
        case "A192CBC-HS384":
        case "A256CBC-HS512":
          if (cek instanceof Uint8Array) {
            check_cek_length_default(cek, parseInt(enc2.slice(-3), 10));
          }
          return cbcEncrypt(enc2, plaintext, cek, iv, aad);
        case "A128GCM":
        case "A192GCM":
        case "A256GCM":
          if (cek instanceof Uint8Array) {
            check_cek_length_default(cek, parseInt(enc2.slice(1, 4), 10));
          }
          return gcmEncrypt(enc2, plaintext, cek, iv, aad);
        default:
          throw new JOSENotSupported("Unsupported JWE Content Encryption Algorithm");
      }
    }, "encrypt3");
    encrypt_default = encrypt3;
  }
});
async function wrap2(alg2, key2, cek, iv) {
  const jweAlgorithm = alg2.slice(0, 7);
  const wrapped = await encrypt_default(jweAlgorithm, cek, key2, iv, new Uint8Array(0));
  return {
    encryptedKey: wrapped.ciphertext,
    iv: encode(wrapped.iv),
    tag: encode(wrapped.tag)
  };
}
__name(wrap2, "wrap2");
__name2(wrap2, "wrap2");
async function unwrap2(alg2, key2, encryptedKey, iv, tag2) {
  const jweAlgorithm = alg2.slice(0, 7);
  return decrypt_default(jweAlgorithm, key2, encryptedKey, iv, tag2, new Uint8Array(0));
}
__name(unwrap2, "unwrap2");
__name2(unwrap2, "unwrap2");
var init_aesgcmkw = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/aesgcmkw.js"() {
    init_encrypt();
    init_decrypt();
    init_base64url();
  }
});
async function decryptKeyManagement(alg2, key2, encryptedKey, joseHeader, options2) {
  check_key_type_default(alg2, key2, "decrypt");
  key2 = await normalize_key_default.normalizePrivateKey?.(key2, alg2) || key2;
  switch (alg2) {
    case "dir": {
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
      return key2;
    }
    case "ECDH-ES":
      if (encryptedKey !== void 0)
        throw new JWEInvalid("Encountered unexpected JWE Encrypted Key");
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!isObject(joseHeader.epk))
        throw new JWEInvalid(`JOSE Header "epk" (Ephemeral Public Key) missing or invalid`);
      if (!ecdhAllowed(key2))
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      const epk = await importJWK(joseHeader.epk, alg2);
      let partyUInfo;
      let partyVInfo;
      if (joseHeader.apu !== void 0) {
        if (typeof joseHeader.apu !== "string")
          throw new JWEInvalid(`JOSE Header "apu" (Agreement PartyUInfo) invalid`);
        try {
          partyUInfo = decode(joseHeader.apu);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apu");
        }
      }
      if (joseHeader.apv !== void 0) {
        if (typeof joseHeader.apv !== "string")
          throw new JWEInvalid(`JOSE Header "apv" (Agreement PartyVInfo) invalid`);
        try {
          partyVInfo = decode(joseHeader.apv);
        } catch {
          throw new JWEInvalid("Failed to base64url decode the apv");
        }
      }
      const sharedSecret = await deriveKey(epk, key2, alg2 === "ECDH-ES" ? joseHeader.enc : alg2, alg2 === "ECDH-ES" ? bitLength2(joseHeader.enc) : parseInt(alg2.slice(-5, -2), 10), partyUInfo, partyVInfo);
      if (alg2 === "ECDH-ES")
        return sharedSecret;
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg2.slice(-6), sharedSecret, encryptedKey);
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return decrypt3(alg2, key2, encryptedKey);
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.p2c !== "number")
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) missing or invalid`);
      const p2cLimit = options2?.maxPBES2Count || 1e4;
      if (joseHeader.p2c > p2cLimit)
        throw new JWEInvalid(`JOSE Header "p2c" (PBES2 Count) out is of acceptable bounds`);
      if (typeof joseHeader.p2s !== "string")
        throw new JWEInvalid(`JOSE Header "p2s" (PBES2 Salt) missing or invalid`);
      let p2s2;
      try {
        p2s2 = decode(joseHeader.p2s);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the p2s");
      }
      return decrypt2(alg2, key2, encryptedKey, joseHeader.p2c, p2s2);
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      return unwrap(alg2, key2, encryptedKey);
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      if (encryptedKey === void 0)
        throw new JWEInvalid("JWE Encrypted Key missing");
      if (typeof joseHeader.iv !== "string")
        throw new JWEInvalid(`JOSE Header "iv" (Initialization Vector) missing or invalid`);
      if (typeof joseHeader.tag !== "string")
        throw new JWEInvalid(`JOSE Header "tag" (Authentication Tag) missing or invalid`);
      let iv;
      try {
        iv = decode(joseHeader.iv);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the iv");
      }
      let tag2;
      try {
        tag2 = decode(joseHeader.tag);
      } catch {
        throw new JWEInvalid("Failed to base64url decode the tag");
      }
      return unwrap2(alg2, key2, encryptedKey, iv, tag2);
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
}
__name(decryptKeyManagement, "decryptKeyManagement");
__name2(decryptKeyManagement, "decryptKeyManagement");
var decrypt_key_management_default;
var init_decrypt_key_management = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/decrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_normalize_key();
    init_errors2();
    init_cek();
    init_import();
    init_check_key_type();
    init_is_object();
    init_aesgcmkw();
    decrypt_key_management_default = decryptKeyManagement;
  }
});
function validateCrit(Err, recognizedDefault, recognizedOption, protectedHeader, joseHeader) {
  if (joseHeader.crit !== void 0 && protectedHeader?.crit === void 0) {
    throw new Err('"crit" (Critical) Header Parameter MUST be integrity protected');
  }
  if (!protectedHeader || protectedHeader.crit === void 0) {
    return /* @__PURE__ */ new Set();
  }
  if (!Array.isArray(protectedHeader.crit) || protectedHeader.crit.length === 0 || protectedHeader.crit.some((input) => typeof input !== "string" || input.length === 0)) {
    throw new Err('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');
  }
  let recognized;
  if (recognizedOption !== void 0) {
    recognized = new Map([...Object.entries(recognizedOption), ...recognizedDefault.entries()]);
  } else {
    recognized = recognizedDefault;
  }
  for (const parameter of protectedHeader.crit) {
    if (!recognized.has(parameter)) {
      throw new JOSENotSupported(`Extension Header Parameter "${parameter}" is not recognized`);
    }
    if (joseHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" is missing`);
    }
    if (recognized.get(parameter) && protectedHeader[parameter] === void 0) {
      throw new Err(`Extension Header Parameter "${parameter}" MUST be integrity protected`);
    }
  }
  return new Set(protectedHeader.crit);
}
__name(validateCrit, "validateCrit");
__name2(validateCrit, "validateCrit");
var validate_crit_default;
var init_validate_crit = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/validate_crit.js"() {
    init_errors2();
    validate_crit_default = validateCrit;
  }
});
var validateAlgorithms;
var validate_algorithms_default;
var init_validate_algorithms = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/validate_algorithms.js"() {
    validateAlgorithms = /* @__PURE__ */ __name2((option, algorithms) => {
      if (algorithms !== void 0 && (!Array.isArray(algorithms) || algorithms.some((s5) => typeof s5 !== "string"))) {
        throw new TypeError(`"${option}" option must be an array of strings`);
      }
      if (!algorithms) {
        return void 0;
      }
      return new Set(algorithms);
    }, "validateAlgorithms");
    validate_algorithms_default = validateAlgorithms;
  }
});
async function flattenedDecrypt(jwe, key2, options2) {
  if (!isObject(jwe)) {
    throw new JWEInvalid("Flattened JWE must be an object");
  }
  if (jwe.protected === void 0 && jwe.header === void 0 && jwe.unprotected === void 0) {
    throw new JWEInvalid("JOSE Header missing");
  }
  if (jwe.iv !== void 0 && typeof jwe.iv !== "string") {
    throw new JWEInvalid("JWE Initialization Vector incorrect type");
  }
  if (typeof jwe.ciphertext !== "string") {
    throw new JWEInvalid("JWE Ciphertext missing or incorrect type");
  }
  if (jwe.tag !== void 0 && typeof jwe.tag !== "string") {
    throw new JWEInvalid("JWE Authentication Tag incorrect type");
  }
  if (jwe.protected !== void 0 && typeof jwe.protected !== "string") {
    throw new JWEInvalid("JWE Protected Header incorrect type");
  }
  if (jwe.encrypted_key !== void 0 && typeof jwe.encrypted_key !== "string") {
    throw new JWEInvalid("JWE Encrypted Key incorrect type");
  }
  if (jwe.aad !== void 0 && typeof jwe.aad !== "string") {
    throw new JWEInvalid("JWE AAD incorrect type");
  }
  if (jwe.header !== void 0 && !isObject(jwe.header)) {
    throw new JWEInvalid("JWE Shared Unprotected Header incorrect type");
  }
  if (jwe.unprotected !== void 0 && !isObject(jwe.unprotected)) {
    throw new JWEInvalid("JWE Per-Recipient Unprotected Header incorrect type");
  }
  let parsedProt;
  if (jwe.protected) {
    try {
      const protectedHeader2 = decode(jwe.protected);
      parsedProt = JSON.parse(decoder.decode(protectedHeader2));
    } catch {
      throw new JWEInvalid("JWE Protected Header is invalid");
    }
  }
  if (!is_disjoint_default(parsedProt, jwe.header, jwe.unprotected)) {
    throw new JWEInvalid("JWE Protected, JWE Unprotected Header, and JWE Per-Recipient Unprotected Header Parameter names must be disjoint");
  }
  const joseHeader = {
    ...parsedProt,
    ...jwe.header,
    ...jwe.unprotected
  };
  validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options2?.crit, parsedProt, joseHeader);
  if (joseHeader.zip !== void 0) {
    throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
  }
  const { alg: alg2, enc: enc2 } = joseHeader;
  if (typeof alg2 !== "string" || !alg2) {
    throw new JWEInvalid("missing JWE Algorithm (alg) in JWE Header");
  }
  if (typeof enc2 !== "string" || !enc2) {
    throw new JWEInvalid("missing JWE Encryption Algorithm (enc) in JWE Header");
  }
  const keyManagementAlgorithms = options2 && validate_algorithms_default("keyManagementAlgorithms", options2.keyManagementAlgorithms);
  const contentEncryptionAlgorithms = options2 && validate_algorithms_default("contentEncryptionAlgorithms", options2.contentEncryptionAlgorithms);
  if (keyManagementAlgorithms && !keyManagementAlgorithms.has(alg2) || !keyManagementAlgorithms && alg2.startsWith("PBES2")) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter value not allowed');
  }
  if (contentEncryptionAlgorithms && !contentEncryptionAlgorithms.has(enc2)) {
    throw new JOSEAlgNotAllowed('"enc" (Encryption Algorithm) Header Parameter value not allowed');
  }
  let encryptedKey;
  if (jwe.encrypted_key !== void 0) {
    try {
      encryptedKey = decode(jwe.encrypted_key);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the encrypted_key");
    }
  }
  let resolvedKey = false;
  if (typeof key2 === "function") {
    key2 = await key2(parsedProt, jwe);
    resolvedKey = true;
  }
  let cek;
  try {
    cek = await decrypt_key_management_default(alg2, key2, encryptedKey, joseHeader, options2);
  } catch (err) {
    if (err instanceof TypeError || err instanceof JWEInvalid || err instanceof JOSENotSupported) {
      throw err;
    }
    cek = cek_default(enc2);
  }
  let iv;
  let tag2;
  if (jwe.iv !== void 0) {
    try {
      iv = decode(jwe.iv);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the iv");
    }
  }
  if (jwe.tag !== void 0) {
    try {
      tag2 = decode(jwe.tag);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the tag");
    }
  }
  const protectedHeader = encoder2.encode(jwe.protected ?? "");
  let additionalData;
  if (jwe.aad !== void 0) {
    additionalData = concat(protectedHeader, encoder2.encode("."), encoder2.encode(jwe.aad));
  } else {
    additionalData = protectedHeader;
  }
  let ciphertext;
  try {
    ciphertext = decode(jwe.ciphertext);
  } catch {
    throw new JWEInvalid("Failed to base64url decode the ciphertext");
  }
  const plaintext = await decrypt_default(enc2, cek, ciphertext, iv, tag2, additionalData);
  const result = { plaintext };
  if (jwe.protected !== void 0) {
    result.protectedHeader = parsedProt;
  }
  if (jwe.aad !== void 0) {
    try {
      result.additionalAuthenticatedData = decode(jwe.aad);
    } catch {
      throw new JWEInvalid("Failed to base64url decode the aad");
    }
  }
  if (jwe.unprotected !== void 0) {
    result.sharedUnprotectedHeader = jwe.unprotected;
  }
  if (jwe.header !== void 0) {
    result.unprotectedHeader = jwe.header;
  }
  if (resolvedKey) {
    return { ...result, key: key2 };
  }
  return result;
}
__name(flattenedDecrypt, "flattenedDecrypt");
__name2(flattenedDecrypt, "flattenedDecrypt");
var init_decrypt2 = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwe/flattened/decrypt.js"() {
    init_base64url();
    init_decrypt();
    init_errors2();
    init_is_disjoint();
    init_is_object();
    init_decrypt_key_management();
    init_buffer_utils();
    init_cek();
    init_validate_crit();
    init_validate_algorithms();
  }
});
async function compactDecrypt(jwe, key2, options2) {
  if (jwe instanceof Uint8Array) {
    jwe = decoder.decode(jwe);
  }
  if (typeof jwe !== "string") {
    throw new JWEInvalid("Compact JWE must be a string or Uint8Array");
  }
  const { 0: protectedHeader, 1: encryptedKey, 2: iv, 3: ciphertext, 4: tag2, length } = jwe.split(".");
  if (length !== 5) {
    throw new JWEInvalid("Invalid Compact JWE");
  }
  const decrypted = await flattenedDecrypt({
    ciphertext,
    iv: iv || void 0,
    protected: protectedHeader,
    tag: tag2 || void 0,
    encrypted_key: encryptedKey || void 0
  }, key2, options2);
  const result = { plaintext: decrypted.plaintext, protectedHeader: decrypted.protectedHeader };
  if (typeof key2 === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
__name(compactDecrypt, "compactDecrypt");
__name2(compactDecrypt, "compactDecrypt");
var init_decrypt3 = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwe/compact/decrypt.js"() {
    init_decrypt2();
    init_errors2();
    init_buffer_utils();
  }
});
var unprotected;
var init_private_symbols = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/private_symbols.js"() {
    unprotected = /* @__PURE__ */ Symbol();
  }
});
var keyToJWK;
var key_to_jwk_default;
var init_key_to_jwk = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/runtime/key_to_jwk.js"() {
    init_webcrypto();
    init_invalid_key_input();
    init_base64url();
    init_is_key_like();
    keyToJWK = /* @__PURE__ */ __name2(async (key2) => {
      if (key2 instanceof Uint8Array) {
        return {
          kty: "oct",
          k: encode(key2)
        };
      }
      if (!isCryptoKey(key2)) {
        throw new TypeError(invalid_key_input_default(key2, ...types, "Uint8Array"));
      }
      if (!key2.extractable) {
        throw new TypeError("non-extractable CryptoKey cannot be exported as a JWK");
      }
      const { ext, key_ops, alg: alg2, use, ...jwk } = await webcrypto_default.subtle.exportKey("jwk", key2);
      return jwk;
    }, "keyToJWK");
    key_to_jwk_default = keyToJWK;
  }
});
async function exportJWK(key2) {
  return key_to_jwk_default(key2);
}
__name(exportJWK, "exportJWK");
__name2(exportJWK, "exportJWK");
var init_export = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/key/export.js"() {
    init_key_to_jwk();
  }
});
async function encryptKeyManagement(alg2, enc2, key2, providedCek, providedParameters = {}) {
  let encryptedKey;
  let parameters;
  let cek;
  check_key_type_default(alg2, key2, "encrypt");
  key2 = await normalize_key_default.normalizePublicKey?.(key2, alg2) || key2;
  switch (alg2) {
    case "dir": {
      cek = key2;
      break;
    }
    case "ECDH-ES":
    case "ECDH-ES+A128KW":
    case "ECDH-ES+A192KW":
    case "ECDH-ES+A256KW": {
      if (!ecdhAllowed(key2)) {
        throw new JOSENotSupported("ECDH with the provided key is not allowed or not supported by your javascript runtime");
      }
      const { apu, apv } = providedParameters;
      let { epk: ephemeralKey } = providedParameters;
      ephemeralKey || (ephemeralKey = (await generateEpk(key2)).privateKey);
      const { x: x2, y: y2, crv, kty } = await exportJWK(ephemeralKey);
      const sharedSecret = await deriveKey(key2, ephemeralKey, alg2 === "ECDH-ES" ? enc2 : alg2, alg2 === "ECDH-ES" ? bitLength2(enc2) : parseInt(alg2.slice(-5, -2), 10), apu, apv);
      parameters = { epk: { x: x2, crv, kty } };
      if (kty === "EC")
        parameters.epk.y = y2;
      if (apu)
        parameters.apu = encode(apu);
      if (apv)
        parameters.apv = encode(apv);
      if (alg2 === "ECDH-ES") {
        cek = sharedSecret;
        break;
      }
      cek = providedCek || cek_default(enc2);
      const kwAlg = alg2.slice(-6);
      encryptedKey = await wrap(kwAlg, sharedSecret, cek);
      break;
    }
    case "RSA1_5":
    case "RSA-OAEP":
    case "RSA-OAEP-256":
    case "RSA-OAEP-384":
    case "RSA-OAEP-512": {
      cek = providedCek || cek_default(enc2);
      encryptedKey = await encrypt2(alg2, key2, cek);
      break;
    }
    case "PBES2-HS256+A128KW":
    case "PBES2-HS384+A192KW":
    case "PBES2-HS512+A256KW": {
      cek = providedCek || cek_default(enc2);
      const { p2c, p2s: p2s2 } = providedParameters;
      ({ encryptedKey, ...parameters } = await encrypt(alg2, key2, cek, p2c, p2s2));
      break;
    }
    case "A128KW":
    case "A192KW":
    case "A256KW": {
      cek = providedCek || cek_default(enc2);
      encryptedKey = await wrap(alg2, key2, cek);
      break;
    }
    case "A128GCMKW":
    case "A192GCMKW":
    case "A256GCMKW": {
      cek = providedCek || cek_default(enc2);
      const { iv } = providedParameters;
      ({ encryptedKey, ...parameters } = await wrap2(alg2, key2, cek, iv));
      break;
    }
    default: {
      throw new JOSENotSupported('Invalid or unsupported "alg" (JWE Algorithm) header value');
    }
  }
  return { cek, encryptedKey, parameters };
}
__name(encryptKeyManagement, "encryptKeyManagement");
__name2(encryptKeyManagement, "encryptKeyManagement");
var encrypt_key_management_default;
var init_encrypt_key_management = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/encrypt_key_management.js"() {
    init_aeskw();
    init_ecdhes();
    init_pbes2kw();
    init_rsaes();
    init_base64url();
    init_normalize_key();
    init_cek();
    init_errors2();
    init_export();
    init_check_key_type();
    init_aesgcmkw();
    encrypt_key_management_default = encryptKeyManagement;
  }
});
var FlattenedEncrypt;
var init_encrypt2 = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwe/flattened/encrypt.js"() {
    init_base64url();
    init_private_symbols();
    init_encrypt();
    init_encrypt_key_management();
    init_errors2();
    init_is_disjoint();
    init_buffer_utils();
    init_validate_crit();
    FlattenedEncrypt = class {
      static {
        __name(this, "FlattenedEncrypt");
      }
      static {
        __name2(this, "FlattenedEncrypt");
      }
      constructor(plaintext) {
        if (!(plaintext instanceof Uint8Array)) {
          throw new TypeError("plaintext must be an instance of Uint8Array");
        }
        this._plaintext = plaintext;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setSharedUnprotectedHeader(sharedUnprotectedHeader) {
        if (this._sharedUnprotectedHeader) {
          throw new TypeError("setSharedUnprotectedHeader can only be called once");
        }
        this._sharedUnprotectedHeader = sharedUnprotectedHeader;
        return this;
      }
      setUnprotectedHeader(unprotectedHeader) {
        if (this._unprotectedHeader) {
          throw new TypeError("setUnprotectedHeader can only be called once");
        }
        this._unprotectedHeader = unprotectedHeader;
        return this;
      }
      setAdditionalAuthenticatedData(aad) {
        this._aad = aad;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      async encrypt(key2, options2) {
        if (!this._protectedHeader && !this._unprotectedHeader && !this._sharedUnprotectedHeader) {
          throw new JWEInvalid("either setProtectedHeader, setUnprotectedHeader, or sharedUnprotectedHeader must be called before #encrypt()");
        }
        if (!is_disjoint_default(this._protectedHeader, this._unprotectedHeader, this._sharedUnprotectedHeader)) {
          throw new JWEInvalid("JWE Protected, JWE Shared Unprotected and JWE Per-Recipient Header Parameter names must be disjoint");
        }
        const joseHeader = {
          ...this._protectedHeader,
          ...this._unprotectedHeader,
          ...this._sharedUnprotectedHeader
        };
        validate_crit_default(JWEInvalid, /* @__PURE__ */ new Map(), options2?.crit, this._protectedHeader, joseHeader);
        if (joseHeader.zip !== void 0) {
          throw new JOSENotSupported('JWE "zip" (Compression Algorithm) Header Parameter is not supported.');
        }
        const { alg: alg2, enc: enc2 } = joseHeader;
        if (typeof alg2 !== "string" || !alg2) {
          throw new JWEInvalid('JWE "alg" (Algorithm) Header Parameter missing or invalid');
        }
        if (typeof enc2 !== "string" || !enc2) {
          throw new JWEInvalid('JWE "enc" (Encryption Algorithm) Header Parameter missing or invalid');
        }
        let encryptedKey;
        if (this._cek && (alg2 === "dir" || alg2 === "ECDH-ES")) {
          throw new TypeError(`setContentEncryptionKey cannot be called with JWE "alg" (Algorithm) Header ${alg2}`);
        }
        let cek;
        {
          let parameters;
          ({ cek, encryptedKey, parameters } = await encrypt_key_management_default(alg2, enc2, key2, this._cek, this._keyManagementParameters));
          if (parameters) {
            if (options2 && unprotected in options2) {
              if (!this._unprotectedHeader) {
                this.setUnprotectedHeader(parameters);
              } else {
                this._unprotectedHeader = { ...this._unprotectedHeader, ...parameters };
              }
            } else if (!this._protectedHeader) {
              this.setProtectedHeader(parameters);
            } else {
              this._protectedHeader = { ...this._protectedHeader, ...parameters };
            }
          }
        }
        let additionalData;
        let protectedHeader;
        let aadMember;
        if (this._protectedHeader) {
          protectedHeader = encoder2.encode(encode(JSON.stringify(this._protectedHeader)));
        } else {
          protectedHeader = encoder2.encode("");
        }
        if (this._aad) {
          aadMember = encode(this._aad);
          additionalData = concat(protectedHeader, encoder2.encode("."), encoder2.encode(aadMember));
        } else {
          additionalData = protectedHeader;
        }
        const { ciphertext, tag: tag2, iv } = await encrypt_default(enc2, this._plaintext, cek, this._iv, additionalData);
        const jwe = {
          ciphertext: encode(ciphertext)
        };
        if (iv) {
          jwe.iv = encode(iv);
        }
        if (tag2) {
          jwe.tag = encode(tag2);
        }
        if (encryptedKey) {
          jwe.encrypted_key = encode(encryptedKey);
        }
        if (aadMember) {
          jwe.aad = aadMember;
        }
        if (this._protectedHeader) {
          jwe.protected = decoder.decode(protectedHeader);
        }
        if (this._sharedUnprotectedHeader) {
          jwe.unprotected = this._sharedUnprotectedHeader;
        }
        if (this._unprotectedHeader) {
          jwe.header = this._unprotectedHeader;
        }
        return jwe;
      }
    };
  }
});
var epoch_default;
var init_epoch = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/epoch.js"() {
    epoch_default = /* @__PURE__ */ __name2((date) => Math.floor(date.getTime() / 1e3), "epoch_default");
  }
});
var minute;
var hour;
var day;
var week;
var year;
var REGEX;
var secs_default;
var init_secs = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/secs.js"() {
    minute = 60;
    hour = minute * 60;
    day = hour * 24;
    week = day * 7;
    year = day * 365.25;
    REGEX = /^(\+|\-)? ?(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)(?: (ago|from now))?$/i;
    secs_default = /* @__PURE__ */ __name2((str) => {
      const matched = REGEX.exec(str);
      if (!matched || matched[4] && matched[1]) {
        throw new TypeError("Invalid time period format");
      }
      const value = parseFloat(matched[2]);
      const unit = matched[3].toLowerCase();
      let numericDate;
      switch (unit) {
        case "sec":
        case "secs":
        case "second":
        case "seconds":
        case "s":
          numericDate = Math.round(value);
          break;
        case "minute":
        case "minutes":
        case "min":
        case "mins":
        case "m":
          numericDate = Math.round(value * minute);
          break;
        case "hour":
        case "hours":
        case "hr":
        case "hrs":
        case "h":
          numericDate = Math.round(value * hour);
          break;
        case "day":
        case "days":
        case "d":
          numericDate = Math.round(value * day);
          break;
        case "week":
        case "weeks":
        case "w":
          numericDate = Math.round(value * week);
          break;
        default:
          numericDate = Math.round(value * year);
          break;
      }
      if (matched[1] === "-" || matched[4] === "ago") {
        return -numericDate;
      }
      return numericDate;
    }, "secs_default");
  }
});
var normalizeTyp;
var checkAudiencePresence;
var jwt_claims_set_default;
var init_jwt_claims_set = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/lib/jwt_claims_set.js"() {
    init_errors2();
    init_buffer_utils();
    init_epoch();
    init_secs();
    init_is_object();
    normalizeTyp = /* @__PURE__ */ __name2((value) => value.toLowerCase().replace(/^application\//, ""), "normalizeTyp");
    checkAudiencePresence = /* @__PURE__ */ __name2((audPayload, audOption) => {
      if (typeof audPayload === "string") {
        return audOption.includes(audPayload);
      }
      if (Array.isArray(audPayload)) {
        return audOption.some(Set.prototype.has.bind(new Set(audPayload)));
      }
      return false;
    }, "checkAudiencePresence");
    jwt_claims_set_default = /* @__PURE__ */ __name2((protectedHeader, encodedPayload, options2 = {}) => {
      let payload;
      try {
        payload = JSON.parse(decoder.decode(encodedPayload));
      } catch {
      }
      if (!isObject(payload)) {
        throw new JWTInvalid("JWT Claims Set must be a top-level JSON object");
      }
      const { typ } = options2;
      if (typ && (typeof protectedHeader.typ !== "string" || normalizeTyp(protectedHeader.typ) !== normalizeTyp(typ))) {
        throw new JWTClaimValidationFailed('unexpected "typ" JWT header value', payload, "typ", "check_failed");
      }
      const { requiredClaims = [], issuer, subject, audience, maxTokenAge } = options2;
      const presenceCheck = [...requiredClaims];
      if (maxTokenAge !== void 0)
        presenceCheck.push("iat");
      if (audience !== void 0)
        presenceCheck.push("aud");
      if (subject !== void 0)
        presenceCheck.push("sub");
      if (issuer !== void 0)
        presenceCheck.push("iss");
      for (const claim of new Set(presenceCheck.reverse())) {
        if (!(claim in payload)) {
          throw new JWTClaimValidationFailed(`missing required "${claim}" claim`, payload, claim, "missing");
        }
      }
      if (issuer && !(Array.isArray(issuer) ? issuer : [issuer]).includes(payload.iss)) {
        throw new JWTClaimValidationFailed('unexpected "iss" claim value', payload, "iss", "check_failed");
      }
      if (subject && payload.sub !== subject) {
        throw new JWTClaimValidationFailed('unexpected "sub" claim value', payload, "sub", "check_failed");
      }
      if (audience && !checkAudiencePresence(payload.aud, typeof audience === "string" ? [audience] : audience)) {
        throw new JWTClaimValidationFailed('unexpected "aud" claim value', payload, "aud", "check_failed");
      }
      let tolerance;
      switch (typeof options2.clockTolerance) {
        case "string":
          tolerance = secs_default(options2.clockTolerance);
          break;
        case "number":
          tolerance = options2.clockTolerance;
          break;
        case "undefined":
          tolerance = 0;
          break;
        default:
          throw new TypeError("Invalid clockTolerance option type");
      }
      const { currentDate } = options2;
      const now2 = epoch_default(currentDate || /* @__PURE__ */ new Date());
      if ((payload.iat !== void 0 || maxTokenAge) && typeof payload.iat !== "number") {
        throw new JWTClaimValidationFailed('"iat" claim must be a number', payload, "iat", "invalid");
      }
      if (payload.nbf !== void 0) {
        if (typeof payload.nbf !== "number") {
          throw new JWTClaimValidationFailed('"nbf" claim must be a number', payload, "nbf", "invalid");
        }
        if (payload.nbf > now2 + tolerance) {
          throw new JWTClaimValidationFailed('"nbf" claim timestamp check failed', payload, "nbf", "check_failed");
        }
      }
      if (payload.exp !== void 0) {
        if (typeof payload.exp !== "number") {
          throw new JWTClaimValidationFailed('"exp" claim must be a number', payload, "exp", "invalid");
        }
        if (payload.exp <= now2 - tolerance) {
          throw new JWTExpired('"exp" claim timestamp check failed', payload, "exp", "check_failed");
        }
      }
      if (maxTokenAge) {
        const age = now2 - payload.iat;
        const max = typeof maxTokenAge === "number" ? maxTokenAge : secs_default(maxTokenAge);
        if (age - tolerance > max) {
          throw new JWTExpired('"iat" claim timestamp check failed (too far in the past)', payload, "iat", "check_failed");
        }
        if (age < 0 - tolerance) {
          throw new JWTClaimValidationFailed('"iat" claim timestamp check failed (it should be in the past)', payload, "iat", "check_failed");
        }
      }
      return payload;
    }, "jwt_claims_set_default");
  }
});
async function jwtDecrypt(jwt2, key2, options2) {
  const decrypted = await compactDecrypt(jwt2, key2, options2);
  const payload = jwt_claims_set_default(decrypted.protectedHeader, decrypted.plaintext, options2);
  const { protectedHeader } = decrypted;
  if (protectedHeader.iss !== void 0 && protectedHeader.iss !== payload.iss) {
    throw new JWTClaimValidationFailed('replicated "iss" claim header parameter mismatch', payload, "iss", "mismatch");
  }
  if (protectedHeader.sub !== void 0 && protectedHeader.sub !== payload.sub) {
    throw new JWTClaimValidationFailed('replicated "sub" claim header parameter mismatch', payload, "sub", "mismatch");
  }
  if (protectedHeader.aud !== void 0 && JSON.stringify(protectedHeader.aud) !== JSON.stringify(payload.aud)) {
    throw new JWTClaimValidationFailed('replicated "aud" claim header parameter mismatch', payload, "aud", "mismatch");
  }
  const result = { payload, protectedHeader };
  if (typeof key2 === "function") {
    return { ...result, key: decrypted.key };
  }
  return result;
}
__name(jwtDecrypt, "jwtDecrypt");
__name2(jwtDecrypt, "jwtDecrypt");
var init_decrypt4 = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwt/decrypt.js"() {
    init_decrypt3();
    init_jwt_claims_set();
    init_errors2();
  }
});
var CompactEncrypt;
var init_encrypt3 = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwe/compact/encrypt.js"() {
    init_encrypt2();
    CompactEncrypt = class {
      static {
        __name(this, "CompactEncrypt");
      }
      static {
        __name2(this, "CompactEncrypt");
      }
      constructor(plaintext) {
        this._flattened = new FlattenedEncrypt(plaintext);
      }
      setContentEncryptionKey(cek) {
        this._flattened.setContentEncryptionKey(cek);
        return this;
      }
      setInitializationVector(iv) {
        this._flattened.setInitializationVector(iv);
        return this;
      }
      setProtectedHeader(protectedHeader) {
        this._flattened.setProtectedHeader(protectedHeader);
        return this;
      }
      setKeyManagementParameters(parameters) {
        this._flattened.setKeyManagementParameters(parameters);
        return this;
      }
      async encrypt(key2, options2) {
        const jwe = await this._flattened.encrypt(key2, options2);
        return [jwe.protected, jwe.encrypted_key, jwe.iv, jwe.ciphertext, jwe.tag].join(".");
      }
    };
  }
});
function validateInput(label, input) {
  if (!Number.isFinite(input)) {
    throw new TypeError(`Invalid ${label} input`);
  }
  return input;
}
__name(validateInput, "validateInput");
__name2(validateInput, "validateInput");
var ProduceJWT;
var init_produce = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwt/produce.js"() {
    init_epoch();
    init_is_object();
    init_secs();
    ProduceJWT = class {
      static {
        __name(this, "ProduceJWT");
      }
      static {
        __name2(this, "ProduceJWT");
      }
      constructor(payload = {}) {
        if (!isObject(payload)) {
          throw new TypeError("JWT Claims Set MUST be an object");
        }
        this._payload = payload;
      }
      setIssuer(issuer) {
        this._payload = { ...this._payload, iss: issuer };
        return this;
      }
      setSubject(subject) {
        this._payload = { ...this._payload, sub: subject };
        return this;
      }
      setAudience(audience) {
        this._payload = { ...this._payload, aud: audience };
        return this;
      }
      setJti(jwtId) {
        this._payload = { ...this._payload, jti: jwtId };
        return this;
      }
      setNotBefore(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, nbf: validateInput("setNotBefore", input) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, nbf: validateInput("setNotBefore", epoch_default(input)) };
        } else {
          this._payload = { ...this._payload, nbf: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setExpirationTime(input) {
        if (typeof input === "number") {
          this._payload = { ...this._payload, exp: validateInput("setExpirationTime", input) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, exp: validateInput("setExpirationTime", epoch_default(input)) };
        } else {
          this._payload = { ...this._payload, exp: epoch_default(/* @__PURE__ */ new Date()) + secs_default(input) };
        }
        return this;
      }
      setIssuedAt(input) {
        if (typeof input === "undefined") {
          this._payload = { ...this._payload, iat: epoch_default(/* @__PURE__ */ new Date()) };
        } else if (input instanceof Date) {
          this._payload = { ...this._payload, iat: validateInput("setIssuedAt", epoch_default(input)) };
        } else if (typeof input === "string") {
          this._payload = {
            ...this._payload,
            iat: validateInput("setIssuedAt", epoch_default(/* @__PURE__ */ new Date()) + secs_default(input))
          };
        } else {
          this._payload = { ...this._payload, iat: validateInput("setIssuedAt", input) };
        }
        return this;
      }
    };
  }
});
var EncryptJWT;
var init_encrypt4 = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwt/encrypt.js"() {
    init_encrypt3();
    init_buffer_utils();
    init_produce();
    EncryptJWT = class extends ProduceJWT {
      static {
        __name(this, "EncryptJWT");
      }
      static {
        __name2(this, "EncryptJWT");
      }
      setProtectedHeader(protectedHeader) {
        if (this._protectedHeader) {
          throw new TypeError("setProtectedHeader can only be called once");
        }
        this._protectedHeader = protectedHeader;
        return this;
      }
      setKeyManagementParameters(parameters) {
        if (this._keyManagementParameters) {
          throw new TypeError("setKeyManagementParameters can only be called once");
        }
        this._keyManagementParameters = parameters;
        return this;
      }
      setContentEncryptionKey(cek) {
        if (this._cek) {
          throw new TypeError("setContentEncryptionKey can only be called once");
        }
        this._cek = cek;
        return this;
      }
      setInitializationVector(iv) {
        if (this._iv) {
          throw new TypeError("setInitializationVector can only be called once");
        }
        this._iv = iv;
        return this;
      }
      replicateIssuerAsHeader() {
        this._replicateIssuerAsHeader = true;
        return this;
      }
      replicateSubjectAsHeader() {
        this._replicateSubjectAsHeader = true;
        return this;
      }
      replicateAudienceAsHeader() {
        this._replicateAudienceAsHeader = true;
        return this;
      }
      async encrypt(key2, options2) {
        const enc2 = new CompactEncrypt(encoder2.encode(JSON.stringify(this._payload)));
        if (this._replicateIssuerAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss };
        }
        if (this._replicateSubjectAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub };
        }
        if (this._replicateAudienceAsHeader) {
          this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud };
        }
        enc2.setProtectedHeader(this._protectedHeader);
        if (this._iv) {
          enc2.setInitializationVector(this._iv);
        }
        if (this._cek) {
          enc2.setContentEncryptionKey(this._cek);
        }
        if (this._keyManagementParameters) {
          enc2.setKeyManagementParameters(this._keyManagementParameters);
        }
        return enc2.encrypt(key2, options2);
      }
    };
  }
});
async function calculateJwkThumbprint(jwk, digestAlgorithm) {
  if (!isObject(jwk)) {
    throw new TypeError("JWK must be an object");
  }
  digestAlgorithm ?? (digestAlgorithm = "sha256");
  if (digestAlgorithm !== "sha256" && digestAlgorithm !== "sha384" && digestAlgorithm !== "sha512") {
    throw new TypeError('digestAlgorithm must one of "sha256", "sha384", or "sha512"');
  }
  let components;
  switch (jwk.kty) {
    case "EC":
      check(jwk.crv, '"crv" (Curve) Parameter');
      check(jwk.x, '"x" (X Coordinate) Parameter');
      check(jwk.y, '"y" (Y Coordinate) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x, y: jwk.y };
      break;
    case "OKP":
      check(jwk.crv, '"crv" (Subtype of Key Pair) Parameter');
      check(jwk.x, '"x" (Public Key) Parameter');
      components = { crv: jwk.crv, kty: jwk.kty, x: jwk.x };
      break;
    case "RSA":
      check(jwk.e, '"e" (Exponent) Parameter');
      check(jwk.n, '"n" (Modulus) Parameter');
      components = { e: jwk.e, kty: jwk.kty, n: jwk.n };
      break;
    case "oct":
      check(jwk.k, '"k" (Key Value) Parameter');
      components = { k: jwk.k, kty: jwk.kty };
      break;
    default:
      throw new JOSENotSupported('"kty" (Key Type) Parameter missing or unsupported');
  }
  const data = encoder2.encode(JSON.stringify(components));
  return encode(await digest_default(digestAlgorithm, data));
}
__name(calculateJwkThumbprint, "calculateJwkThumbprint");
__name2(calculateJwkThumbprint, "calculateJwkThumbprint");
var check;
var init_thumbprint = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/jwk/thumbprint.js"() {
    init_digest();
    init_base64url();
    init_errors2();
    init_buffer_utils();
    init_is_object();
    check = /* @__PURE__ */ __name2((value, description) => {
      if (typeof value !== "string" || !value) {
        throw new JWKInvalid(`${description} missing or invalid`);
      }
    }, "check");
  }
});
var base64url_exports = {};
__export(base64url_exports, {
  decode: /* @__PURE__ */ __name2(() => decode2, "decode"),
  encode: /* @__PURE__ */ __name2(() => encode2, "encode")
});
var encode2;
var decode2;
var init_base64url2 = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/util/base64url.js"() {
    init_base64url();
    encode2 = encode;
    decode2 = decode;
  }
});
var init_browser = __esm({
  "node_modules/.pnpm/jose@5.10.0/node_modules/jose/dist/browser/index.js"() {
    init_decrypt4();
    init_encrypt4();
    init_thumbprint();
    init_errors2();
    init_base64url2();
  }
});
var require_cookie = __commonJS({
  "node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse5;
    exports.serialize = serialize3;
    var __toString2 = Object.prototype.toString;
    var fieldContentRegExp2 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse5(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode5;
      var index3 = 0;
      while (index3 < str.length) {
        var eqIdx = str.indexOf("=", index3);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index3);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index3 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index3, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode2(val, dec);
        }
        index3 = endIdx + 1;
      }
      return obj;
    }
    __name(parse5, "parse5");
    __name2(parse5, "parse5");
    function serialize3(name, val, options2) {
      var opt = options2 || {};
      var enc2 = opt.encode || encode5;
      if (typeof enc2 !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp2.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc2(val);
      if (value && !fieldContentRegExp2.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp2.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp2.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate2(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    __name(serialize3, "serialize3");
    __name2(serialize3, "serialize3");
    function decode5(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    __name(decode5, "decode5");
    __name2(decode5, "decode5");
    function encode5(val) {
      return encodeURIComponent(val);
    }
    __name(encode5, "encode5");
    __name2(encode5, "encode5");
    function isDate2(val) {
      return __toString2.call(val) === "[object Date]" || val instanceof Date;
    }
    __name(isDate2, "isDate2");
    __name2(isDate2, "isDate2");
    function tryDecode2(str, decode6) {
      try {
        return decode6(str);
      } catch (e3) {
        return str;
      }
    }
    __name(tryDecode2, "tryDecode2");
    __name2(tryDecode2, "tryDecode2");
  }
});
async function encode3(params) {
  const { token = {}, secret, maxAge = DEFAULT_MAX_AGE, salt } = params;
  const secrets = Array.isArray(secret) ? secret : [secret];
  const encryptionSecret = await getDerivedEncryptionKey(enc, secrets[0], salt);
  const thumbprint = await calculateJwkThumbprint({ kty: "oct", k: base64url_exports.encode(encryptionSecret) }, `sha${encryptionSecret.byteLength << 3}`);
  return await new EncryptJWT(token).setProtectedHeader({ alg, enc, kid: thumbprint }).setIssuedAt().setExpirationTime(now() + maxAge).setJti(crypto.randomUUID()).encrypt(encryptionSecret);
}
__name(encode3, "encode3");
__name2(encode3, "encode3");
async function decode3(params) {
  const { token, secret, salt } = params;
  const secrets = Array.isArray(secret) ? secret : [secret];
  if (!token)
    return null;
  const { payload } = await jwtDecrypt(token, async ({ kid, enc: enc2 }) => {
    for (const secret2 of secrets) {
      const encryptionSecret = await getDerivedEncryptionKey(enc2, secret2, salt);
      if (kid === void 0)
        return encryptionSecret;
      const thumbprint = await calculateJwkThumbprint({ kty: "oct", k: base64url_exports.encode(encryptionSecret) }, `sha${encryptionSecret.byteLength << 3}`);
      if (kid === thumbprint)
        return encryptionSecret;
    }
    throw new Error("no matching decryption secret");
  }, {
    clockTolerance: 15,
    keyManagementAlgorithms: [alg],
    contentEncryptionAlgorithms: [enc, "A256GCM"]
  });
  return payload;
}
__name(decode3, "decode3");
__name2(decode3, "decode3");
async function getDerivedEncryptionKey(enc2, keyMaterial, salt) {
  let length;
  switch (enc2) {
    case "A256CBC-HS512":
      length = 64;
      break;
    case "A256GCM":
      length = 32;
      break;
    default:
      throw new Error("Unsupported JWT Content Encryption Algorithm");
  }
  return await hkdf("sha256", keyMaterial, salt, `Auth.js Generated Encryption Key (${salt})`, length);
}
__name(getDerivedEncryptionKey, "getDerivedEncryptionKey");
__name2(getDerivedEncryptionKey, "getDerivedEncryptionKey");
var import_cookie3;
var DEFAULT_MAX_AGE;
var now;
var alg;
var enc;
var init_jwt = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/jwt.js"() {
    init_web();
    init_browser();
    init_cookie();
    init_errors();
    import_cookie3 = __toESM(require_cookie(), 1);
    DEFAULT_MAX_AGE = 30 * 24 * 60 * 60;
    now = /* @__PURE__ */ __name2(() => Date.now() / 1e3 | 0, "now");
    alg = "dir";
    enc = "A256CBC-HS512";
  }
});
async function createCallbackUrl({ options: options2, paramValue, cookieValue }) {
  const { url, callbacks } = options2;
  let callbackUrl = url.origin;
  if (paramValue) {
    callbackUrl = await callbacks.redirect({
      url: paramValue,
      baseUrl: url.origin
    });
  } else if (cookieValue) {
    callbackUrl = await callbacks.redirect({
      url: cookieValue,
      baseUrl: url.origin
    });
  }
  return {
    callbackUrl,
    // Save callback URL in a cookie so that it can be used for subsequent requests in signin/signout/callback flow
    callbackUrlCookie: callbackUrl !== cookieValue ? callbackUrl : void 0
  };
}
__name(createCallbackUrl, "createCallbackUrl");
__name2(createCallbackUrl, "createCallbackUrl");
var init_callback_url = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/callback-url.js"() {
  }
});
function setLogger(newLogger = {}, debug) {
  if (!debug)
    logger.debug = () => {
    };
  if (newLogger.error)
    logger.error = newLogger.error;
  if (newLogger.warn)
    logger.warn = newLogger.warn;
  if (newLogger.debug)
    logger.debug = newLogger.debug;
}
__name(setLogger, "setLogger");
__name2(setLogger, "setLogger");
var red;
var yellow;
var grey;
var reset;
var logger;
var init_logger = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/logger.js"() {
    init_errors();
    red = "\x1B[31m";
    yellow = "\x1B[33m";
    grey = "\x1B[90m";
    reset = "\x1B[0m";
    logger = {
      error(error2) {
        const name = error2 instanceof AuthError ? error2.type : error2.name;
        console.error(`${red}[auth][error]${reset} ${name}: ${error2.message}`);
        if (error2.cause && typeof error2.cause === "object" && "err" in error2.cause && error2.cause.err instanceof Error) {
          const { err, ...data } = error2.cause;
          console.error(`${red}[auth][cause]${reset}:`, err.stack);
          if (data)
            console.error(`${red}[auth][details]${reset}:`, JSON.stringify(data, null, 2));
        } else if (error2.stack) {
          console.error(error2.stack.replace(/.*/, "").substring(1));
        }
      },
      warn(code) {
        const url = `https://warnings.authjs.dev#${code}`;
        console.warn(`${yellow}[auth][warn][${code}]${reset}`, `Read more: ${url}`);
      },
      debug(message2, metadata) {
        console.log(`${grey}[auth][debug]:${reset} ${message2}`, JSON.stringify(metadata, null, 2));
      }
    };
  }
});
function isAuthAction(action) {
  return actions.includes(action);
}
__name(isAuthAction, "isAuthAction");
__name2(isAuthAction, "isAuthAction");
var actions;
var init_actions = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/actions.js"() {
    actions = [
      "providers",
      "session",
      "csrf",
      "signin",
      "signout",
      "callback",
      "verify-request",
      "error",
      "webauthn-options"
    ];
  }
});
async function getBody(req) {
  if (!("body" in req) || !req.body || req.method !== "POST")
    return;
  const contentType = req.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return await req.json();
  } else if (contentType?.includes("application/x-www-form-urlencoded")) {
    const params = new URLSearchParams(await req.text());
    return Object.fromEntries(params);
  }
}
__name(getBody, "getBody");
__name2(getBody, "getBody");
async function toInternalRequest(req, config) {
  try {
    if (req.method !== "GET" && req.method !== "POST")
      throw new UnknownAction("Only GET and POST requests are supported.");
    config.basePath ?? (config.basePath = "/auth");
    const url = new URL(req.url);
    const { action, providerId } = parseActionAndProviderId(url.pathname, config.basePath);
    return {
      url,
      action,
      providerId,
      method: req.method,
      headers: Object.fromEntries(req.headers),
      body: req.body ? await getBody(req) : void 0,
      cookies: (0, import_cookie4.parse)(req.headers.get("cookie") ?? "") ?? {},
      error: url.searchParams.get("error") ?? void 0,
      query: Object.fromEntries(url.searchParams)
    };
  } catch (e3) {
    logger.error(e3);
    logger.debug("request", req);
  }
}
__name(toInternalRequest, "toInternalRequest");
__name2(toInternalRequest, "toInternalRequest");
function toRequest(request) {
  return new Request(request.url, {
    headers: request.headers,
    method: request.method,
    body: request.method === "POST" ? JSON.stringify(request.body ?? {}) : void 0
  });
}
__name(toRequest, "toRequest");
__name2(toRequest, "toRequest");
function toResponse(res) {
  const headers = new Headers(res.headers);
  res.cookies?.forEach((cookie) => {
    const { name, value, options: options2 } = cookie;
    const cookieHeader = (0, import_cookie4.serialize)(name, value, options2);
    if (headers.has("Set-Cookie"))
      headers.append("Set-Cookie", cookieHeader);
    else
      headers.set("Set-Cookie", cookieHeader);
  });
  let body = res.body;
  if (headers.get("content-type") === "application/json")
    body = JSON.stringify(res.body);
  else if (headers.get("content-type") === "application/x-www-form-urlencoded")
    body = new URLSearchParams(res.body).toString();
  const status = res.redirect ? 302 : res.status ?? 200;
  const response = new Response(body, { headers, status });
  if (res.redirect)
    response.headers.set("Location", res.redirect);
  return response;
}
__name(toResponse, "toResponse");
__name2(toResponse, "toResponse");
async function createHash(message2) {
  const data = new TextEncoder().encode(message2);
  const hash2 = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash2)).map((b3) => b3.toString(16).padStart(2, "0")).join("").toString();
}
__name(createHash, "createHash");
__name2(createHash, "createHash");
function randomString(size) {
  const i2hex = /* @__PURE__ */ __name2((i3) => ("0" + i3.toString(16)).slice(-2), "i2hex");
  const r4 = /* @__PURE__ */ __name2((a3, i3) => a3 + i2hex(i3), "r4");
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  return Array.from(bytes).reduce(r4, "");
}
__name(randomString, "randomString");
__name2(randomString, "randomString");
function parseActionAndProviderId(pathname, base2) {
  const a3 = pathname.match(new RegExp(`^${base2}(.+)`));
  if (a3 === null)
    throw new UnknownAction(`Cannot parse action at ${pathname}`);
  const [_4, actionAndProviderId] = a3;
  const b3 = actionAndProviderId.replace(/^\//, "").split("/");
  if (b3.length !== 1 && b3.length !== 2)
    throw new UnknownAction(`Cannot parse action at ${pathname}`);
  const [action, providerId] = b3;
  if (!isAuthAction(action))
    throw new UnknownAction(`Cannot parse action at ${pathname}`);
  if (providerId && !["signin", "callback", "webauthn-options"].includes(action))
    throw new UnknownAction(`Cannot parse action at ${pathname}`);
  return { action, providerId };
}
__name(parseActionAndProviderId, "parseActionAndProviderId");
__name2(parseActionAndProviderId, "parseActionAndProviderId");
var import_cookie4;
var init_web2 = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/web.js"() {
    import_cookie4 = __toESM(require_cookie(), 1);
    init_errors();
    init_logger();
    init_actions();
  }
});
async function createCSRFToken({ options: options2, cookieValue, isPost, bodyValue }) {
  if (cookieValue) {
    const [csrfToken2, csrfTokenHash2] = cookieValue.split("|");
    const expectedCsrfTokenHash = await createHash(`${csrfToken2}${options2.secret}`);
    if (csrfTokenHash2 === expectedCsrfTokenHash) {
      const csrfTokenVerified = isPost && csrfToken2 === bodyValue;
      return { csrfTokenVerified, csrfToken: csrfToken2 };
    }
  }
  const csrfToken = randomString(32);
  const csrfTokenHash = await createHash(`${csrfToken}${options2.secret}`);
  const cookie = `${csrfToken}|${csrfTokenHash}`;
  return { cookie, csrfToken };
}
__name(createCSRFToken, "createCSRFToken");
__name2(createCSRFToken, "createCSRFToken");
function validateCSRF(action, verified) {
  if (verified)
    return;
  throw new MissingCSRF(`CSRF token was missing during an action ${action}`);
}
__name(validateCSRF, "validateCSRF");
__name2(validateCSRF, "validateCSRF");
var init_csrf_token = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/callback/oauth/csrf-token.js"() {
    init_web2();
    init_errors();
  }
});
function isObject2(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
__name(isObject2, "isObject2");
__name2(isObject2, "isObject2");
function merge(target, ...sources) {
  if (!sources.length)
    return target;
  const source = sources.shift();
  if (isObject2(target) && isObject2(source)) {
    for (const key2 in source) {
      if (isObject2(source[key2])) {
        if (!target[key2])
          Object.assign(target, { [key2]: {} });
        merge(target[key2], source[key2]);
      } else {
        Object.assign(target, { [key2]: source[key2] });
      }
    }
  }
  return merge(target, ...sources);
}
__name(merge, "merge");
__name2(merge, "merge");
var init_merge = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/merge.js"() {
  }
});
function parseProviders(params) {
  const { providerId, options: options2 } = params;
  const url = new URL(options2.basePath ?? "/auth", params.url.origin);
  const providers = params.providers.map((p3) => {
    const provider = typeof p3 === "function" ? p3() : p3;
    const { options: userOptions, ...defaults } = provider;
    const id = userOptions?.id ?? defaults.id;
    const merged = merge(defaults, userOptions, {
      signinUrl: `${url}/signin/${id}`,
      callbackUrl: `${url}/callback/${id}`
    });
    if (provider.type === "oauth" || provider.type === "oidc") {
      merged.redirectProxyUrl ?? (merged.redirectProxyUrl = options2.redirectProxyUrl);
      return normalizeOAuth(merged);
    }
    return merged;
  });
  return {
    providers,
    provider: providers.find(({ id }) => id === providerId)
  };
}
__name(parseProviders, "parseProviders");
__name2(parseProviders, "parseProviders");
function normalizeOAuth(c4) {
  if (c4.issuer)
    c4.wellKnown ?? (c4.wellKnown = `${c4.issuer}/.well-known/openid-configuration`);
  const authorization = normalizeEndpoint(c4.authorization, c4.issuer);
  if (authorization && !authorization.url?.searchParams.has("scope")) {
    authorization.url.searchParams.set("scope", "openid profile email");
  }
  const token = normalizeEndpoint(c4.token, c4.issuer);
  const userinfo = normalizeEndpoint(c4.userinfo, c4.issuer);
  const checks = c4.checks ?? ["pkce"];
  if (c4.redirectProxyUrl) {
    if (!checks.includes("state"))
      checks.push("state");
    c4.redirectProxyUrl = `${c4.redirectProxyUrl}/callback/${c4.id}`;
  }
  return {
    ...c4,
    authorization,
    token,
    checks,
    userinfo,
    profile: c4.profile ?? defaultProfile,
    account: c4.account ?? defaultAccount
  };
}
__name(normalizeOAuth, "normalizeOAuth");
__name2(normalizeOAuth, "normalizeOAuth");
function stripUndefined(o5) {
  const result = {};
  for (let [k3, v3] of Object.entries(o5))
    v3 !== void 0 && (result[k3] = v3);
  return result;
}
__name(stripUndefined, "stripUndefined");
__name2(stripUndefined, "stripUndefined");
function normalizeEndpoint(e3, issuer) {
  if (!e3 && issuer)
    return;
  if (typeof e3 === "string") {
    return { url: new URL(e3) };
  }
  const url = new URL(e3?.url ?? "https://authjs.dev");
  if (e3?.params != null) {
    for (let [key2, value] of Object.entries(e3.params)) {
      if (key2 === "claims")
        value = JSON.stringify(value);
      url.searchParams.set(key2, String(value));
    }
  }
  return { url, request: e3?.request, conform: e3?.conform };
}
__name(normalizeEndpoint, "normalizeEndpoint");
__name2(normalizeEndpoint, "normalizeEndpoint");
var defaultProfile;
var defaultAccount;
var init_providers = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/providers.js"() {
    init_merge();
    defaultProfile = /* @__PURE__ */ __name2((profile) => {
      return stripUndefined({
        id: profile.sub ?? profile.id ?? crypto.randomUUID(),
        name: profile.name ?? profile.nickname ?? profile.preferred_username,
        email: profile.email,
        image: profile.picture
      });
    }, "defaultProfile");
    defaultAccount = /* @__PURE__ */ __name2((account) => {
      return stripUndefined({
        access_token: account.access_token,
        id_token: account.id_token,
        refresh_token: account.refresh_token,
        expires_at: account.expires_at,
        scope: account.scope,
        token_type: account.token_type,
        session_state: account.session_state
      });
    }, "defaultAccount");
  }
});
async function init({ authOptions, providerId, action, url, cookies: reqCookies, callbackUrl: reqCallbackUrl, csrfToken: reqCsrfToken, csrfDisabled, isPost }) {
  const { providers, provider } = parseProviders({
    providers: authOptions.providers,
    url,
    providerId,
    options: authOptions
  });
  const maxAge = 30 * 24 * 60 * 60;
  let isOnRedirectProxy = false;
  if ((provider?.type === "oauth" || provider?.type === "oidc") && provider.redirectProxyUrl) {
    try {
      isOnRedirectProxy = new URL(provider.redirectProxyUrl).origin === url.origin;
    } catch {
      throw new TypeError(`redirectProxyUrl must be a valid URL. Received: ${provider.redirectProxyUrl}`);
    }
  }
  const options2 = {
    debug: false,
    pages: {},
    theme: {
      colorScheme: "auto",
      logo: "",
      brandColor: "",
      buttonText: ""
    },
    // Custom options override defaults
    ...authOptions,
    // These computed settings can have values in userOptions but we override them
    // and are request-specific.
    url,
    action,
    // @ts-expect-errors
    provider,
    cookies: merge(defaultCookies(authOptions.useSecureCookies ?? url.protocol === "https:"), authOptions.cookies),
    providers,
    // Session options
    session: {
      // If no adapter specified, force use of JSON Web Tokens (stateless)
      strategy: authOptions.adapter ? "database" : "jwt",
      maxAge,
      updateAge: 24 * 60 * 60,
      generateSessionToken: /* @__PURE__ */ __name2(() => crypto.randomUUID(), "generateSessionToken"),
      ...authOptions.session
    },
    // JWT options
    jwt: {
      secret: authOptions.secret,
      // Asserted in assert.ts
      maxAge: authOptions.session?.maxAge ?? maxAge,
      // default to same as `session.maxAge`
      encode: encode3,
      decode: decode3,
      ...authOptions.jwt
    },
    // Event messages
    events: eventsErrorHandler(authOptions.events ?? {}, logger),
    adapter: adapterErrorHandler(authOptions.adapter, logger),
    // Callback functions
    callbacks: { ...defaultCallbacks, ...authOptions.callbacks },
    logger,
    callbackUrl: url.origin,
    isOnRedirectProxy,
    experimental: {
      ...authOptions.experimental
    }
  };
  const cookies = [];
  if (csrfDisabled) {
    options2.csrfTokenVerified = true;
  } else {
    const { csrfToken, cookie: csrfCookie, csrfTokenVerified } = await createCSRFToken({
      options: options2,
      cookieValue: reqCookies?.[options2.cookies.csrfToken.name],
      isPost,
      bodyValue: reqCsrfToken
    });
    options2.csrfToken = csrfToken;
    options2.csrfTokenVerified = csrfTokenVerified;
    if (csrfCookie) {
      cookies.push({
        name: options2.cookies.csrfToken.name,
        value: csrfCookie,
        options: options2.cookies.csrfToken.options
      });
    }
  }
  const { callbackUrl, callbackUrlCookie } = await createCallbackUrl({
    options: options2,
    cookieValue: reqCookies?.[options2.cookies.callbackUrl.name],
    paramValue: reqCallbackUrl
  });
  options2.callbackUrl = callbackUrl;
  if (callbackUrlCookie) {
    cookies.push({
      name: options2.cookies.callbackUrl.name,
      value: callbackUrlCookie,
      options: options2.cookies.callbackUrl.options
    });
  }
  return { options: options2, cookies };
}
__name(init, "init");
__name2(init, "init");
function eventsErrorHandler(methods, logger2) {
  return Object.keys(methods).reduce((acc, name) => {
    acc[name] = async (...args) => {
      try {
        const method = methods[name];
        return await method(...args);
      } catch (e3) {
        logger2.error(new EventError(e3));
      }
    };
    return acc;
  }, {});
}
__name(eventsErrorHandler, "eventsErrorHandler");
__name2(eventsErrorHandler, "eventsErrorHandler");
function adapterErrorHandler(adapter, logger2) {
  if (!adapter)
    return;
  return Object.keys(adapter).reduce((acc, name) => {
    acc[name] = async (...args) => {
      try {
        logger2.debug(`adapter_${name}`, { args });
        const method = adapter[name];
        return await method(...args);
      } catch (e3) {
        const error2 = new AdapterError(e3);
        logger2.error(error2);
        throw error2;
      }
    };
    return acc;
  }, {});
}
__name(adapterErrorHandler, "adapterErrorHandler");
__name2(adapterErrorHandler, "adapterErrorHandler");
var defaultCallbacks;
var init_init = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/init.js"() {
    init_jwt();
    init_callback_url();
    init_cookie();
    init_csrf_token();
    init_errors();
    init_providers();
    init_logger();
    init_merge();
    defaultCallbacks = {
      signIn() {
        return true;
      },
      redirect({ url, baseUrl }) {
        if (url.startsWith("/"))
          return `${baseUrl}${url}`;
        else if (new URL(url).origin === baseUrl)
          return url;
        return baseUrl;
      },
      session({ session: session2 }) {
        return {
          user: {
            name: session2.user?.name,
            email: session2.user?.email,
            image: session2.user?.image
          },
          expires: session2.expires?.toISOString?.() ?? session2.expires
        };
      },
      jwt({ token }) {
        return token;
      }
    };
  }
});
function s(n4, l3) {
  for (var u3 in l3)
    n4[u3] = l3[u3];
  return n4;
}
__name(s, "s");
__name2(s, "s");
function a(n4) {
  var l3 = n4.parentNode;
  l3 && l3.removeChild(n4);
}
__name(a, "a");
__name2(a, "a");
function v(n4, i3, t3, o5, r4) {
  var f3 = { type: n4, props: i3, key: t3, ref: o5, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r4 ? ++u : r4 };
  return null == r4 && null != l.vnode && l.vnode(f3), f3;
}
__name(v, "v");
__name2(v, "v");
function p(n4) {
  return n4.children;
}
__name(p, "p");
__name2(p, "p");
function d(n4, l3) {
  this.props = n4, this.context = l3;
}
__name(d, "d");
__name2(d, "d");
function _(n4, l3) {
  if (null == l3)
    return n4.__ ? _(n4.__, n4.__.__k.indexOf(n4) + 1) : null;
  for (var u3; l3 < n4.__k.length; l3++)
    if (null != (u3 = n4.__k[l3]) && null != u3.__e)
      return u3.__e;
  return "function" == typeof n4.type ? _(n4) : null;
}
__name(_, "_");
__name2(_, "_");
function k(n4) {
  var l3, u3;
  if (null != (n4 = n4.__) && null != n4.__c) {
    for (n4.__e = n4.__c.base = null, l3 = 0; l3 < n4.__k.length; l3++)
      if (null != (u3 = n4.__k[l3]) && null != u3.__e) {
        n4.__e = n4.__c.base = u3.__e;
        break;
      }
    return k(n4);
  }
}
__name(k, "k");
__name2(k, "k");
function b(n4) {
  (!n4.__d && (n4.__d = true) && t.push(n4) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || setTimeout)(g);
}
__name(b, "b");
__name2(b, "b");
function g() {
  for (var n4; g.__r = t.length; )
    n4 = t.sort(function(n5, l3) {
      return n5.__v.__b - l3.__v.__b;
    }), t = [], n4.some(function(n5) {
      var l3, u3, i3, t3, o5, r4;
      n5.__d && (o5 = (t3 = (l3 = n5).__v).__e, (r4 = l3.__P) && (u3 = [], (i3 = s({}, t3)).__v = t3.__v + 1, j(r4, t3, i3, l3.__n, void 0 !== r4.ownerSVGElement, null != t3.__h ? [o5] : null, u3, null == o5 ? _(t3) : o5, t3.__h), z(u3, t3), t3.__e != o5 && k(t3)));
    });
}
__name(g, "g");
__name2(g, "g");
function w(n4, l3, u3, i3, t3, o5, r4, c4, s5, a3) {
  var h2, y2, d3, k3, b3, g3, w3, x2 = i3 && i3.__k || e, C3 = x2.length;
  for (u3.__k = [], h2 = 0; h2 < l3.length; h2++)
    if (null != (k3 = u3.__k[h2] = null == (k3 = l3[h2]) || "boolean" == typeof k3 ? null : "string" == typeof k3 || "number" == typeof k3 || "bigint" == typeof k3 ? v(null, k3, null, null, k3) : Array.isArray(k3) ? v(p, { children: k3 }, null, null, null) : k3.__b > 0 ? v(k3.type, k3.props, k3.key, k3.ref ? k3.ref : null, k3.__v) : k3)) {
      if (k3.__ = u3, k3.__b = u3.__b + 1, null === (d3 = x2[h2]) || d3 && k3.key == d3.key && k3.type === d3.type)
        x2[h2] = void 0;
      else
        for (y2 = 0; y2 < C3; y2++) {
          if ((d3 = x2[y2]) && k3.key == d3.key && k3.type === d3.type) {
            x2[y2] = void 0;
            break;
          }
          d3 = null;
        }
      j(n4, k3, d3 = d3 || f, t3, o5, r4, c4, s5, a3), b3 = k3.__e, (y2 = k3.ref) && d3.ref != y2 && (w3 || (w3 = []), d3.ref && w3.push(d3.ref, null, k3), w3.push(y2, k3.__c || b3, k3)), null != b3 ? (null == g3 && (g3 = b3), "function" == typeof k3.type && k3.__k === d3.__k ? k3.__d = s5 = m(k3, s5, n4) : s5 = A(n4, k3, d3, x2, b3, s5), "function" == typeof u3.type && (u3.__d = s5)) : s5 && d3.__e == s5 && s5.parentNode != n4 && (s5 = _(d3));
    }
  for (u3.__e = g3, h2 = C3; h2--; )
    null != x2[h2] && N(x2[h2], x2[h2]);
  if (w3)
    for (h2 = 0; h2 < w3.length; h2++)
      M(w3[h2], w3[++h2], w3[++h2]);
}
__name(w, "w");
__name2(w, "w");
function m(n4, l3, u3) {
  for (var i3, t3 = n4.__k, o5 = 0; t3 && o5 < t3.length; o5++)
    (i3 = t3[o5]) && (i3.__ = n4, l3 = "function" == typeof i3.type ? m(i3, l3, u3) : A(u3, i3, i3, t3, i3.__e, l3));
  return l3;
}
__name(m, "m");
__name2(m, "m");
function A(n4, l3, u3, i3, t3, o5) {
  var r4, f3, e3;
  if (void 0 !== l3.__d)
    r4 = l3.__d, l3.__d = void 0;
  else if (null == u3 || t3 != o5 || null == t3.parentNode)
    n:
      if (null == o5 || o5.parentNode !== n4)
        n4.appendChild(t3), r4 = null;
      else {
        for (f3 = o5, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
          if (f3 == t3)
            break n;
        n4.insertBefore(t3, o5), r4 = o5;
      }
  return void 0 !== r4 ? r4 : t3.nextSibling;
}
__name(A, "A");
__name2(A, "A");
function C(n4, l3, u3, i3, t3) {
  var o5;
  for (o5 in u3)
    "children" === o5 || "key" === o5 || o5 in l3 || H(n4, o5, null, u3[o5], i3);
  for (o5 in l3)
    t3 && "function" != typeof l3[o5] || "children" === o5 || "key" === o5 || "value" === o5 || "checked" === o5 || u3[o5] === l3[o5] || H(n4, o5, l3[o5], u3[o5], i3);
}
__name(C, "C");
__name2(C, "C");
function $(n4, l3, u3) {
  "-" === l3[0] ? n4.setProperty(l3, u3) : n4[l3] = null == u3 ? "" : "number" != typeof u3 || c.test(l3) ? u3 : u3 + "px";
}
__name($, "$");
__name2($, "$");
function H(n4, l3, u3, i3, t3) {
  var o5;
  n:
    if ("style" === l3)
      if ("string" == typeof u3)
        n4.style.cssText = u3;
      else {
        if ("string" == typeof i3 && (n4.style.cssText = i3 = ""), i3)
          for (l3 in i3)
            u3 && l3 in u3 || $(n4.style, l3, "");
        if (u3)
          for (l3 in u3)
            i3 && u3[l3] === i3[l3] || $(n4.style, l3, u3[l3]);
      }
    else if ("o" === l3[0] && "n" === l3[1])
      o5 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n4 ? l3.toLowerCase().slice(2) : l3.slice(2), n4.l || (n4.l = {}), n4.l[l3 + o5] = u3, u3 ? i3 || n4.addEventListener(l3, o5 ? T : I, o5) : n4.removeEventListener(l3, o5 ? T : I, o5);
    else if ("dangerouslySetInnerHTML" !== l3) {
      if (t3)
        l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n4)
        try {
          n4[l3] = null == u3 ? "" : u3;
          break n;
        } catch (n5) {
        }
      "function" == typeof u3 || (null == u3 || false === u3 && -1 == l3.indexOf("-") ? n4.removeAttribute(l3) : n4.setAttribute(l3, u3));
    }
}
__name(H, "H");
__name2(H, "H");
function I(n4) {
  this.l[n4.type + false](l.event ? l.event(n4) : n4);
}
__name(I, "I");
__name2(I, "I");
function T(n4) {
  this.l[n4.type + true](l.event ? l.event(n4) : n4);
}
__name(T, "T");
__name2(T, "T");
function j(n4, u3, i3, t3, o5, r4, f3, e3, c4) {
  var a3, h2, v3, y2, _4, k3, b3, g3, m3, x2, A2, C3, $2, H2, I2, T2 = u3.type;
  if (void 0 !== u3.constructor)
    return null;
  null != i3.__h && (c4 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, r4 = [e3]), (a3 = l.__b) && a3(u3);
  try {
    n:
      if ("function" == typeof T2) {
        if (g3 = u3.props, m3 = (a3 = T2.contextType) && t3[a3.__c], x2 = a3 ? m3 ? m3.props.value : a3.__ : t3, i3.__c ? b3 = (h2 = u3.__c = i3.__c).__ = h2.__E : ("prototype" in T2 && T2.prototype.render ? u3.__c = h2 = new T2(g3, x2) : (u3.__c = h2 = new d(g3, x2), h2.constructor = T2, h2.render = O), m3 && m3.sub(h2), h2.props = g3, h2.state || (h2.state = {}), h2.context = x2, h2.__n = t3, v3 = h2.__d = true, h2.__h = [], h2._sb = []), null == h2.__s && (h2.__s = h2.state), null != T2.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = s({}, h2.__s)), s(h2.__s, T2.getDerivedStateFromProps(g3, h2.__s))), y2 = h2.props, _4 = h2.state, v3)
          null == T2.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
        else {
          if (null == T2.getDerivedStateFromProps && g3 !== y2 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(g3, x2), !h2.__e && null != h2.shouldComponentUpdate && false === h2.shouldComponentUpdate(g3, h2.__s, x2) || u3.__v === i3.__v) {
            for (h2.props = g3, h2.state = h2.__s, u3.__v !== i3.__v && (h2.__d = false), h2.__v = u3, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n5) {
              n5 && (n5.__ = u3);
            }), A2 = 0; A2 < h2._sb.length; A2++)
              h2.__h.push(h2._sb[A2]);
            h2._sb = [], h2.__h.length && f3.push(h2);
            break n;
          }
          null != h2.componentWillUpdate && h2.componentWillUpdate(g3, h2.__s, x2), null != h2.componentDidUpdate && h2.__h.push(function() {
            h2.componentDidUpdate(y2, _4, k3);
          });
        }
        if (h2.context = x2, h2.props = g3, h2.__v = u3, h2.__P = n4, C3 = l.__r, $2 = 0, "prototype" in T2 && T2.prototype.render) {
          for (h2.state = h2.__s, h2.__d = false, C3 && C3(u3), a3 = h2.render(h2.props, h2.state, h2.context), H2 = 0; H2 < h2._sb.length; H2++)
            h2.__h.push(h2._sb[H2]);
          h2._sb = [];
        } else
          do {
            h2.__d = false, C3 && C3(u3), a3 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s;
          } while (h2.__d && ++$2 < 25);
        h2.state = h2.__s, null != h2.getChildContext && (t3 = s(s({}, t3), h2.getChildContext())), v3 || null == h2.getSnapshotBeforeUpdate || (k3 = h2.getSnapshotBeforeUpdate(y2, _4)), I2 = null != a3 && a3.type === p && null == a3.key ? a3.props.children : a3, w(n4, Array.isArray(I2) ? I2 : [I2], u3, i3, t3, o5, r4, f3, e3, c4), h2.base = u3.__e, u3.__h = null, h2.__h.length && f3.push(h2), b3 && (h2.__E = h2.__ = null), h2.__e = false;
      } else
        null == r4 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = L(i3.__e, u3, i3, t3, o5, r4, f3, c4);
    (a3 = l.diffed) && a3(u3);
  } catch (n5) {
    u3.__v = null, (c4 || null != r4) && (u3.__e = e3, u3.__h = !!c4, r4[r4.indexOf(e3)] = null), l.__e(n5, u3, i3);
  }
}
__name(j, "j");
__name2(j, "j");
function z(n4, u3) {
  l.__c && l.__c(u3, n4), n4.some(function(u4) {
    try {
      n4 = u4.__h, u4.__h = [], n4.some(function(n5) {
        n5.call(u4);
      });
    } catch (n5) {
      l.__e(n5, u4.__v);
    }
  });
}
__name(z, "z");
__name2(z, "z");
function L(l3, u3, i3, t3, o5, r4, e3, c4) {
  var s5, h2, v3, y2 = i3.props, p3 = u3.props, d3 = u3.type, k3 = 0;
  if ("svg" === d3 && (o5 = true), null != r4) {
    for (; k3 < r4.length; k3++)
      if ((s5 = r4[k3]) && "setAttribute" in s5 == !!d3 && (d3 ? s5.localName === d3 : 3 === s5.nodeType)) {
        l3 = s5, r4[k3] = null;
        break;
      }
  }
  if (null == l3) {
    if (null === d3)
      return document.createTextNode(p3);
    l3 = o5 ? document.createElementNS("http://www.w3.org/2000/svg", d3) : document.createElement(d3, p3.is && p3), r4 = null, c4 = false;
  }
  if (null === d3)
    y2 === p3 || c4 && l3.data === p3 || (l3.data = p3);
  else {
    if (r4 = r4 && n.call(l3.childNodes), h2 = (y2 = i3.props || f).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c4) {
      if (null != r4)
        for (y2 = {}, k3 = 0; k3 < l3.attributes.length; k3++)
          y2[l3.attributes[k3].name] = l3.attributes[k3].value;
      (v3 || h2) && (v3 && (h2 && v3.__html == h2.__html || v3.__html === l3.innerHTML) || (l3.innerHTML = v3 && v3.__html || ""));
    }
    if (C(l3, p3, y2, o5, c4), v3)
      u3.__k = [];
    else if (k3 = u3.props.children, w(l3, Array.isArray(k3) ? k3 : [k3], u3, i3, t3, o5 && "foreignObject" !== d3, r4, e3, r4 ? r4[0] : i3.__k && _(i3, 0), c4), null != r4)
      for (k3 = r4.length; k3--; )
        null != r4[k3] && a(r4[k3]);
    c4 || ("value" in p3 && void 0 !== (k3 = p3.value) && (k3 !== l3.value || "progress" === d3 && !k3 || "option" === d3 && k3 !== y2.value) && H(l3, "value", k3, y2.value, false), "checked" in p3 && void 0 !== (k3 = p3.checked) && k3 !== l3.checked && H(l3, "checked", k3, y2.checked, false));
  }
  return l3;
}
__name(L, "L");
__name2(L, "L");
function M(n4, u3, i3) {
  try {
    "function" == typeof n4 ? n4(u3) : n4.current = u3;
  } catch (n5) {
    l.__e(n5, i3);
  }
}
__name(M, "M");
__name2(M, "M");
function N(n4, u3, i3) {
  var t3, o5;
  if (l.unmount && l.unmount(n4), (t3 = n4.ref) && (t3.current && t3.current !== n4.__e || M(t3, null, u3)), null != (t3 = n4.__c)) {
    if (t3.componentWillUnmount)
      try {
        t3.componentWillUnmount();
      } catch (n5) {
        l.__e(n5, u3);
      }
    t3.base = t3.__P = null, n4.__c = void 0;
  }
  if (t3 = n4.__k)
    for (o5 = 0; o5 < t3.length; o5++)
      t3[o5] && N(t3[o5], u3, i3 || "function" != typeof n4.type);
  i3 || null == n4.__e || a(n4.__e), n4.__ = n4.__e = n4.__d = void 0;
}
__name(N, "N");
__name2(N, "N");
function O(n4, l3, u3) {
  return this.constructor(n4, u3);
}
__name(O, "O");
__name2(O, "O");
var n;
var l;
var u;
var i;
var t;
var o;
var r;
var f;
var e;
var c;
var init_preact_module = __esm({
  "node_modules/.pnpm/preact@10.11.3/node_modules/preact/dist/preact.module.js"() {
    f = {};
    e = [];
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    n = e.slice, l = { __e: /* @__PURE__ */ __name2(function(n4, l3, u3, i3) {
      for (var t3, o5, r4; l3 = l3.__; )
        if ((t3 = l3.__c) && !t3.__)
          try {
            if ((o5 = t3.constructor) && null != o5.getDerivedStateFromError && (t3.setState(o5.getDerivedStateFromError(n4)), r4 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n4, i3 || {}), r4 = t3.__d), r4)
              return t3.__E = t3;
          } catch (l4) {
            n4 = l4;
          }
      throw n4;
    }, "__e") }, u = 0, i = /* @__PURE__ */ __name2(function(n4) {
      return null != n4 && void 0 === n4.constructor;
    }, "i"), d.prototype.setState = function(n4, l3) {
      var u3;
      u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n4 && (n4 = n4(s({}, u3), this.props)), n4 && s(u3, n4), null != n4 && this.__v && (l3 && this._sb.push(l3), b(this));
    }, d.prototype.forceUpdate = function(n4) {
      this.__v && (this.__e = true, n4 && this.__h.push(n4), b(this));
    }, d.prototype.render = p, t = [], g.__r = 0, r = 0;
  }
});
function l2(e3) {
  if (false === a2.test(e3 += ""))
    return e3;
  for (var t3 = 0, r4 = 0, n4 = "", o5 = ""; r4 < e3.length; r4++) {
    switch (e3.charCodeAt(r4)) {
      case 34:
        o5 = "&quot;";
        break;
      case 38:
        o5 = "&amp;";
        break;
      case 60:
        o5 = "&lt;";
        break;
      default:
        continue;
    }
    r4 !== t3 && (n4 += e3.slice(t3, r4)), n4 += o5, t3 = r4 + 1;
  }
  return r4 !== t3 && (n4 += e3.slice(t3, r4)), n4;
}
__name(l2, "l2");
__name2(l2, "l2");
function p2(e3) {
  var t3 = "";
  for (var n4 in e3) {
    var o5 = e3[n4];
    null != o5 && "" !== o5 && (t3 && (t3 += " "), t3 += "-" == n4[0] ? n4 : c2[n4] || (c2[n4] = n4.replace(u2, "-$1").toLowerCase()), t3 = "number" == typeof o5 && false === r2.test(n4) ? t3 + ": " + o5 + "px;" : t3 + ": " + o5 + ";");
  }
  return t3 || void 0;
}
__name(p2, "p2");
__name2(p2, "p2");
function _2(e3, t3) {
  return Array.isArray(t3) ? t3.reduce(_2, e3) : null != t3 && false !== t3 && e3.push(t3), e3;
}
__name(_2, "_2");
__name2(_2, "_2");
function d2() {
  this.__d = true;
}
__name(d2, "d2");
__name2(d2, "d2");
function v2(e3, t3) {
  return { __v: e3, context: t3, props: e3.props, setState: d2, forceUpdate: d2, __d: true, __h: [] };
}
__name(v2, "v2");
__name2(v2, "v2");
function h(e3, t3) {
  var r4 = e3.contextType, n4 = r4 && t3[r4.__c];
  return null != r4 ? n4 ? n4.props.value : r4.__ : t3;
}
__name(h, "h");
__name2(h, "h");
function y(r4, a3, c4, u3, d3, m3) {
  if (null == r4 || "boolean" == typeof r4)
    return "";
  if ("object" != typeof r4)
    return l2(r4);
  var b3 = c4.pretty, x2 = b3 && "string" == typeof b3 ? b3 : "	";
  if (Array.isArray(r4)) {
    for (var k3 = "", S2 = 0; S2 < r4.length; S2++)
      b3 && S2 > 0 && (k3 += "\n"), k3 += y(r4[S2], a3, c4, u3, d3, m3);
    return k3;
  }
  var w3, C3 = r4.type, O3 = r4.props, j3 = false;
  if ("function" == typeof C3) {
    if (j3 = true, !c4.shallow || !u3 && false !== c4.renderRootComponent) {
      if (C3 === p) {
        var A2 = [];
        return _2(A2, r4.props.children), y(A2, a3, c4, false !== c4.shallowHighOrder, d3, m3);
      }
      var F, H2 = r4.__c = v2(r4, a3);
      l.__b && l.__b(r4);
      var M2 = l.__r;
      if (C3.prototype && "function" == typeof C3.prototype.render) {
        var L2 = h(C3, a3);
        (H2 = r4.__c = new C3(O3, L2)).__v = r4, H2._dirty = H2.__d = true, H2.props = O3, null == H2.state && (H2.state = {}), null == H2._nextState && null == H2.__s && (H2._nextState = H2.__s = H2.state), H2.context = L2, C3.getDerivedStateFromProps ? H2.state = Object.assign({}, H2.state, C3.getDerivedStateFromProps(H2.props, H2.state)) : H2.componentWillMount && (H2.componentWillMount(), H2.state = H2._nextState !== H2.state ? H2._nextState : H2.__s !== H2.state ? H2.__s : H2.state), M2 && M2(r4), F = H2.render(H2.props, H2.state, H2.context);
      } else
        for (var T2 = h(C3, a3), E = 0; H2.__d && E++ < 25; )
          H2.__d = false, M2 && M2(r4), F = C3.call(r4.__c, O3, T2);
      return H2.getChildContext && (a3 = Object.assign({}, a3, H2.getChildContext())), l.diffed && l.diffed(r4), y(F, a3, c4, false !== c4.shallowHighOrder, d3, m3);
    }
    C3 = (w3 = C3).displayName || w3 !== Function && w3.name || (function(e3) {
      var t3 = (Function.prototype.toString.call(e3).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t3) {
        for (var r5 = -1, n4 = g2.length; n4--; )
          if (g2[n4] === e3) {
            r5 = n4;
            break;
          }
        r5 < 0 && (r5 = g2.push(e3) - 1), t3 = "UnnamedComponent" + r5;
      }
      return t3;
    })(w3);
  }
  var $2, D, N2 = "<" + C3;
  if (O3) {
    var P = Object.keys(O3);
    c4 && true === c4.sortAttributes && P.sort();
    for (var W = 0; W < P.length; W++) {
      var I2 = P[W], R = O3[I2];
      if ("children" !== I2) {
        if (!o2.test(I2) && (c4 && c4.allAttributes || "key" !== I2 && "ref" !== I2 && "__self" !== I2 && "__source" !== I2)) {
          if ("defaultValue" === I2)
            I2 = "value";
          else if ("defaultChecked" === I2)
            I2 = "checked";
          else if ("defaultSelected" === I2)
            I2 = "selected";
          else if ("className" === I2) {
            if (void 0 !== O3.class)
              continue;
            I2 = "class";
          } else
            d3 && i2.test(I2) && (I2 = I2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === I2) {
            if (O3.for)
              continue;
            I2 = "for";
          }
          "style" === I2 && R && "object" == typeof R && (R = p2(R)), "a" === I2[0] && "r" === I2[1] && "boolean" == typeof R && (R = String(R));
          var U = c4.attributeHook && c4.attributeHook(I2, R, a3, c4, j3);
          if (U || "" === U)
            N2 += U;
          else if ("dangerouslySetInnerHTML" === I2)
            D = R && R.__html;
          else if ("textarea" === C3 && "value" === I2)
            $2 = R;
          else if ((R || 0 === R || "" === R) && "function" != typeof R) {
            if (!(true !== R && "" !== R || (R = I2, c4 && c4.xml))) {
              N2 = N2 + " " + I2;
              continue;
            }
            if ("value" === I2) {
              if ("select" === C3) {
                m3 = R;
                continue;
              }
              "option" === C3 && m3 == R && void 0 === O3.selected && (N2 += " selected");
            }
            N2 = N2 + " " + I2 + '="' + l2(R) + '"';
          }
        }
      } else
        $2 = R;
    }
  }
  if (b3) {
    var V = N2.replace(/\n\s*/, " ");
    V === N2 || ~V.indexOf("\n") ? b3 && ~N2.indexOf("\n") && (N2 += "\n") : N2 = V;
  }
  if (N2 += ">", o2.test(C3))
    throw new Error(C3 + " is not a valid HTML tag name in " + N2);
  var q, z2 = n2.test(C3) || c4.voidElements && c4.voidElements.test(C3), Z = [];
  if (D)
    b3 && f2(D) && (D = "\n" + x2 + s2(D, x2)), N2 += D;
  else if (null != $2 && _2(q = [], $2).length) {
    for (var B = b3 && ~N2.indexOf("\n"), G = false, J = 0; J < q.length; J++) {
      var K = q[J];
      if (null != K && false !== K) {
        var Q = y(K, a3, c4, true, "svg" === C3 || "foreignObject" !== C3 && d3, m3);
        if (b3 && !B && f2(Q) && (B = true), Q)
          if (b3) {
            var X = Q.length > 0 && "<" != Q[0];
            G && X ? Z[Z.length - 1] += Q : Z.push(Q), G = X;
          } else
            Z.push(Q);
      }
    }
    if (b3 && B)
      for (var Y = Z.length; Y--; )
        Z[Y] = "\n" + x2 + s2(Z[Y], x2);
  }
  if (Z.length || D)
    N2 += Z.join("");
  else if (c4 && c4.xml)
    return N2.substring(0, N2.length - 1) + " />";
  return !z2 || q || D ? (b3 && ~N2.indexOf("\n") && (N2 += "\n"), N2 = N2 + "</" + C3 + ">") : N2 = N2.replace(/>$/, " />"), N2;
}
__name(y, "y");
__name2(y, "y");
function k2(e3, r4, n4) {
  r4 = r4 || {};
  var o5, i3 = l.__s;
  return l.__s = true, o5 = n4 && (n4.pretty || n4.voidElements || n4.sortAttributes || n4.shallow || n4.allAttributes || n4.xml || n4.attributeHook) ? y(e3, r4, n4) : j2(e3, r4, false, void 0), l.__c && l.__c(e3, x), l.__s = i3, x.length = 0, o5;
}
__name(k2, "k2");
__name2(k2, "k2");
function S(e3, t3) {
  return "className" === e3 ? "class" : "htmlFor" === e3 ? "for" : "defaultValue" === e3 ? "value" : "defaultChecked" === e3 ? "checked" : "defaultSelected" === e3 ? "selected" : t3 && i2.test(e3) ? e3.toLowerCase().replace(/^xlink:?/, "xlink:") : e3;
}
__name(S, "S");
__name2(S, "S");
function w2(e3, t3) {
  return "style" === e3 && null != t3 && "object" == typeof t3 ? p2(t3) : "a" === e3[0] && "r" === e3[1] && "boolean" == typeof t3 ? String(t3) : t3;
}
__name(w2, "w2");
__name2(w2, "w2");
function j2(r4, i3, a3, s5) {
  if (null == r4 || true === r4 || false === r4 || "" === r4)
    return "";
  if ("object" != typeof r4)
    return l2(r4);
  if (C2(r4)) {
    for (var f3 = "", c4 = 0; c4 < r4.length; c4++)
      f3 += j2(r4[c4], i3, a3, s5);
    return f3;
  }
  l.__b && l.__b(r4);
  var u3 = r4.type, p3 = r4.props;
  if ("function" == typeof u3) {
    if (u3 === p)
      return j2(r4.props.children, i3, a3, s5);
    var _4;
    _4 = u3.prototype && "function" == typeof u3.prototype.render ? (function(e3, r5) {
      var n4 = e3.type, o5 = h(n4, r5), i4 = new n4(e3.props, o5);
      e3.__c = i4, i4.__v = e3, i4.__d = true, i4.props = e3.props, null == i4.state && (i4.state = {}), null == i4.__s && (i4.__s = i4.state), i4.context = o5, n4.getDerivedStateFromProps ? i4.state = O2({}, i4.state, n4.getDerivedStateFromProps(i4.props, i4.state)) : i4.componentWillMount && (i4.componentWillMount(), i4.state = i4.__s !== i4.state ? i4.__s : i4.state);
      var a4 = l.__r;
      return a4 && a4(e3), i4.render(i4.props, i4.state, i4.context);
    })(r4, i3) : (function(e3, r5) {
      var n4, o5 = v2(e3, r5), i4 = h(e3.type, r5);
      e3.__c = o5;
      for (var a4 = l.__r, l3 = 0; o5.__d && l3++ < 25; )
        o5.__d = false, a4 && a4(e3), n4 = e3.type.call(o5, e3.props, i4);
      return n4;
    })(r4, i3);
    var d3 = r4.__c;
    d3.getChildContext && (i3 = O2({}, i3, d3.getChildContext()));
    var g3 = j2(_4, i3, a3, s5);
    return l.diffed && l.diffed(r4), g3;
  }
  var y2, m3, b3 = "<";
  if (b3 += u3, p3)
    for (var x2 in y2 = p3.children, p3) {
      var k3 = p3[x2];
      if (!("key" === x2 || "ref" === x2 || "__self" === x2 || "__source" === x2 || "children" === x2 || "className" === x2 && "class" in p3 || "htmlFor" === x2 && "for" in p3 || o2.test(x2))) {
        if (k3 = w2(x2 = S(x2, a3), k3), "dangerouslySetInnerHTML" === x2)
          m3 = k3 && k3.__html;
        else if ("textarea" === u3 && "value" === x2)
          y2 = k3;
        else if ((k3 || 0 === k3 || "" === k3) && "function" != typeof k3) {
          if (true === k3 || "" === k3) {
            k3 = x2, b3 = b3 + " " + x2;
            continue;
          }
          if ("value" === x2) {
            if ("select" === u3) {
              s5 = k3;
              continue;
            }
            "option" !== u3 || s5 != k3 || "selected" in p3 || (b3 += " selected");
          }
          b3 = b3 + " " + x2 + '="' + l2(k3) + '"';
        }
      }
    }
  var A2 = b3;
  if (b3 += ">", o2.test(u3))
    throw new Error(u3 + " is not a valid HTML tag name in " + b3);
  var F = "", H2 = false;
  if (m3)
    F += m3, H2 = true;
  else if ("string" == typeof y2)
    F += l2(y2), H2 = true;
  else if (C2(y2))
    for (var M2 = 0; M2 < y2.length; M2++) {
      var L2 = y2[M2];
      if (null != L2 && false !== L2) {
        var T2 = j2(L2, i3, "svg" === u3 || "foreignObject" !== u3 && a3, s5);
        T2 && (F += T2, H2 = true);
      }
    }
  else if (null != y2 && false !== y2 && true !== y2) {
    var E = j2(y2, i3, "svg" === u3 || "foreignObject" !== u3 && a3, s5);
    E && (F += E, H2 = true);
  }
  if (l.diffed && l.diffed(r4), H2)
    b3 += F;
  else if (n2.test(u3))
    return A2 + " />";
  return b3 + "</" + u3 + ">";
}
__name(j2, "j2");
__name2(j2, "j2");
var r2;
var n2;
var o2;
var i2;
var a2;
var s2;
var f2;
var c2;
var u2;
var g2;
var m2;
var b2;
var x;
var C2;
var O2;
var init_dist = __esm({
  "node_modules/.pnpm/preact-render-to-string@5.2.3_preact@10.11.3/node_modules/preact-render-to-string/dist/index.mjs"() {
    init_preact_module();
    r2 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
    n2 = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;
    o2 = /[\s\n\\/='"\0<>]/;
    i2 = /^xlink:?./;
    a2 = /["&<]/;
    s2 = /* @__PURE__ */ __name2(function(e3, t3) {
      return String(e3).replace(/(\n+)/g, "$1" + (t3 || "	"));
    }, "s2");
    f2 = /* @__PURE__ */ __name2(function(e3, t3, r4) {
      return String(e3).length > (t3 || 40) || !r4 && -1 !== String(e3).indexOf("\n") || -1 !== String(e3).indexOf("<");
    }, "f2");
    c2 = {};
    u2 = /([A-Z])/g;
    g2 = [];
    m2 = { shallow: true };
    k2.render = k2;
    b2 = /* @__PURE__ */ __name2(function(e3, t3) {
      return k2(e3, t3, m2);
    }, "b2");
    x = [];
    C2 = Array.isArray;
    O2 = Object.assign;
    k2.shallowRender = b2;
  }
});
function o3(o5, e3, n4, t3, f3) {
  var l3, s5, u3 = {};
  for (s5 in e3)
    "ref" == s5 ? l3 = e3[s5] : u3[s5] = e3[s5];
  var a3 = { type: o5, props: u3, key: n4, ref: l3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_3, __source: f3, __self: t3 };
  if ("function" == typeof o5 && (l3 = o5.defaultProps))
    for (s5 in l3)
      void 0 === u3[s5] && (u3[s5] = l3[s5]);
  return l.vnode && l.vnode(a3), a3;
}
__name(o3, "o3");
__name2(o3, "o3");
var _3;
var init_jsxRuntime_module = __esm({
  "node_modules/.pnpm/preact@10.11.3/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js"() {
    init_preact_module();
    init_preact_module();
    _3 = 0;
  }
});
function ErrorPage(props) {
  const { url, error: error2 = "default", theme } = props;
  const signinPageUrl = `${url}/signin`;
  const errors = {
    default: {
      status: 200,
      heading: "Error",
      message: o3("p", { children: o3("a", { className: "site", href: url?.origin, children: url?.host }) })
    },
    Configuration: {
      status: 500,
      heading: "Server error",
      message: o3("div", { children: [o3("p", { children: "There is a problem with the server configuration." }), o3("p", { children: "Check the server logs for more information." })] })
    },
    AccessDenied: {
      status: 403,
      heading: "Access Denied",
      message: o3("div", { children: [o3("p", { children: "You do not have permission to sign in." }), o3("p", { children: o3("a", { className: "button", href: signinPageUrl, children: "Sign in" }) })] })
    },
    Verification: {
      status: 403,
      heading: "Unable to sign in",
      message: o3("div", { children: [o3("p", { children: "The sign in link is no longer valid." }), o3("p", { children: "It may have been used already or it may have expired." })] }),
      signin: o3("a", { className: "button", href: signinPageUrl, children: "Sign in" })
    }
  };
  const { status, heading, message: message2, signin } = errors[error2] ?? errors.default;
  return {
    status,
    html: o3("div", { className: "error", children: [theme?.brandColor && o3("style", { dangerouslySetInnerHTML: {
      __html: `
        :root {
          --brand-color: ${theme?.brandColor}
        }
      `
    } }), o3("div", { className: "card", children: [theme?.logo && o3("img", { src: theme?.logo, alt: "Logo", className: "logo" }), o3("h1", { children: heading }), o3("div", { className: "message", children: message2 }), signin] })] })
  };
}
__name(ErrorPage, "ErrorPage");
__name2(ErrorPage, "ErrorPage");
var init_error = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/pages/error.js"() {
    init_jsxRuntime_module();
  }
});
async function webauthnScript(authURL, providerID) {
  const WebAuthnBrowser = window.SimpleWebAuthnBrowser;
  async function fetchOptions(action) {
    const url = new URL(`${authURL}/webauthn-options/${providerID}`);
    if (action)
      url.searchParams.append("action", action);
    const formFields = getFormFields();
    formFields.forEach((field) => {
      url.searchParams.append(field.name, field.value);
    });
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Failed to fetch options", res);
      return;
    }
    return res.json();
  }
  __name(fetchOptions, "fetchOptions");
  __name2(fetchOptions, "fetchOptions");
  function getForm() {
    const formID = `#${providerID}-form`;
    const form = document.querySelector(formID);
    if (!form)
      throw new Error(`Form '${formID}' not found`);
    return form;
  }
  __name(getForm, "getForm");
  __name2(getForm, "getForm");
  function getFormFields() {
    const form = getForm();
    const formFields = Array.from(form.querySelectorAll("input[data-form-field]"));
    return formFields;
  }
  __name(getFormFields, "getFormFields");
  __name2(getFormFields, "getFormFields");
  async function submitForm(action, data) {
    const form = getForm();
    if (action) {
      const actionInput = document.createElement("input");
      actionInput.type = "hidden";
      actionInput.name = "action";
      actionInput.value = action;
      form.appendChild(actionInput);
    }
    if (data) {
      const dataInput = document.createElement("input");
      dataInput.type = "hidden";
      dataInput.name = "data";
      dataInput.value = JSON.stringify(data);
      form.appendChild(dataInput);
    }
    return form.submit();
  }
  __name(submitForm, "submitForm");
  __name2(submitForm, "submitForm");
  async function authenticationFlow(options2, autofill) {
    const authResp = await WebAuthnBrowser.startAuthentication(options2, autofill);
    return await submitForm("authenticate", authResp);
  }
  __name(authenticationFlow, "authenticationFlow");
  __name2(authenticationFlow, "authenticationFlow");
  async function registrationFlow(options2) {
    const formFields = getFormFields();
    formFields.forEach((field) => {
      if (field.required && !field.value) {
        throw new Error(`Missing required field: ${field.name}`);
      }
    });
    const regResp = await WebAuthnBrowser.startRegistration(options2);
    return await submitForm("register", regResp);
  }
  __name(registrationFlow, "registrationFlow");
  __name2(registrationFlow, "registrationFlow");
  async function autofillAuthentication() {
    if (!WebAuthnBrowser.browserSupportsWebAuthnAutofill())
      return;
    const res = await fetchOptions("authenticate");
    if (!res) {
      console.error("Failed to fetch option for autofill authentication");
      return;
    }
    try {
      await authenticationFlow(res.options, true);
    } catch (e3) {
      console.error(e3);
    }
  }
  __name(autofillAuthentication, "autofillAuthentication");
  __name2(autofillAuthentication, "autofillAuthentication");
  async function setupForm() {
    const form = getForm();
    if (!WebAuthnBrowser.browserSupportsWebAuthn()) {
      form.style.display = "none";
      return;
    }
    if (form) {
      form.addEventListener("submit", async (e3) => {
        e3.preventDefault();
        const res = await fetchOptions(void 0);
        if (!res) {
          console.error("Failed to fetch options for form submission");
          return;
        }
        if (res.action === "authenticate") {
          try {
            await authenticationFlow(res.options, false);
          } catch (e4) {
            console.error(e4);
          }
        } else if (res.action === "register") {
          try {
            await registrationFlow(res.options);
          } catch (e4) {
            console.error(e4);
          }
        }
      });
    }
  }
  __name(setupForm, "setupForm");
  __name2(setupForm, "setupForm");
  setupForm();
  autofillAuthentication();
}
__name(webauthnScript, "webauthnScript");
__name2(webauthnScript, "webauthnScript");
var init_webauthn_client = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/webauthn-client.js"() {
  }
});
function hexToRgba(hex, alpha = 1) {
  if (!hex) {
    return;
  }
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  const bigint = parseInt(hex, 16);
  const r4 = bigint >> 16 & 255;
  const g3 = bigint >> 8 & 255;
  const b3 = bigint & 255;
  alpha = Math.min(Math.max(alpha, 0), 1);
  const rgba = `rgba(${r4}, ${g3}, ${b3}, ${alpha})`;
  return rgba;
}
__name(hexToRgba, "hexToRgba");
__name2(hexToRgba, "hexToRgba");
function ConditionalUIScript(providerID) {
  const startConditionalUIScript = `
const currentURL = window.location.href;
const authURL = currentURL.substring(0, currentURL.lastIndexOf('/'));
(${webauthnScript})(authURL, "${providerID}");
`;
  return o3(p, { children: o3("script", { dangerouslySetInnerHTML: { __html: startConditionalUIScript } }) });
}
__name(ConditionalUIScript, "ConditionalUIScript");
__name2(ConditionalUIScript, "ConditionalUIScript");
function SigninPage(props) {
  const { csrfToken, providers = [], callbackUrl, theme, email, error: errorType } = props;
  if (typeof document !== "undefined" && theme?.brandColor) {
    document.documentElement.style.setProperty("--brand-color", theme.brandColor);
  }
  if (typeof document !== "undefined" && theme?.buttonText) {
    document.documentElement.style.setProperty("--button-text-color", theme.buttonText);
  }
  const error2 = errorType && (signinErrors[errorType] ?? signinErrors.default);
  const providerLogoPath = "https://authjs.dev/img/providers";
  const conditionalUIProviderID = providers.find((provider) => provider.type === "webauthn" && provider.enableConditionalUI)?.id;
  return o3("div", { className: "signin", children: [theme?.brandColor && o3("style", { dangerouslySetInnerHTML: {
    __html: `:root {--brand-color: ${theme.brandColor}}`
  } }), theme?.buttonText && o3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
  } }), o3("div", { className: "card", children: [error2 && o3("div", { className: "error", children: o3("p", { children: error2 }) }), theme?.logo && o3("img", { src: theme.logo, alt: "Logo", className: "logo" }), providers.map((provider, i3) => {
    let bg, text2, logo, logoDark, bgDark, textDark;
    if (provider.type === "oauth" || provider.type === "oidc") {
      ;
      ({
        bg = "",
        text: text2 = "",
        logo = "",
        bgDark = bg,
        textDark = text2,
        logoDark = ""
      } = provider.style ?? {});
      logo = logo.startsWith("/") ? providerLogoPath + logo : logo;
      logoDark = logoDark.startsWith("/") ? providerLogoPath + logoDark : logoDark || logo;
      logoDark || (logoDark = logo);
    }
    return o3("div", { className: "provider", children: [provider.type === "oauth" || provider.type === "oidc" ? o3("form", { action: provider.signinUrl, method: "POST", children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), callbackUrl && o3("input", { type: "hidden", name: "callbackUrl", value: callbackUrl }), o3("button", { type: "submit", className: "button", style: {
      "--provider-bg": bg,
      "--provider-dark-bg": bgDark,
      "--provider-color": text2,
      "--provider-dark-color": textDark,
      "--provider-bg-hover": hexToRgba(bg, 0.8),
      "--provider-dark-bg-hover": hexToRgba(bgDark, 0.8)
    }, tabIndex: 0, children: [logo && o3("img", { loading: "lazy", height: 24, width: 24, id: "provider-logo", src: logo }), logoDark && o3("img", { loading: "lazy", height: 24, width: 24, id: "provider-logo-dark", src: logoDark }), o3("span", { children: ["Sign in with ", provider.name] })] })] }) : null, (provider.type === "email" || provider.type === "credentials" || provider.type === "webauthn") && i3 > 0 && providers[i3 - 1].type !== "email" && providers[i3 - 1].type !== "credentials" && providers[i3 - 1].type !== "webauthn" && o3("hr", {}), provider.type === "email" && o3("form", { action: provider.signinUrl, method: "POST", children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), o3("label", { className: "section-header", htmlFor: `input-email-for-${provider.id}-provider`, children: "Email" }), o3("input", { id: `input-email-for-${provider.id}-provider`, autoFocus: true, type: "email", name: "email", value: email, placeholder: "email@example.com", required: true }), o3("button", { id: "submitButton", type: "submit", tabIndex: 0, children: ["Sign in with ", provider.name] })] }), provider.type === "credentials" && o3("form", { action: provider.callbackUrl, method: "POST", children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), Object.keys(provider.credentials).map((credential) => {
      return o3("div", { children: [o3("label", { className: "section-header", htmlFor: `input-${credential}-for-${provider.id}-provider`, children: provider.credentials[credential].label ?? credential }), o3("input", { name: credential, id: `input-${credential}-for-${provider.id}-provider`, type: provider.credentials[credential].type ?? "text", placeholder: provider.credentials[credential].placeholder ?? "", ...provider.credentials[credential] })] }, `input-group-${provider.id}`);
    }), o3("button", { id: "submitButton", type: "submit", tabIndex: 0, children: ["Sign in with ", provider.name] })] }), provider.type === "webauthn" && o3("form", { action: provider.callbackUrl, method: "POST", id: `${provider.id}-form`, children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), Object.keys(provider.formFields).map((field) => {
      return o3("div", { children: [o3("label", { className: "section-header", htmlFor: `input-${field}-for-${provider.id}-provider`, children: provider.formFields[field].label ?? field }), o3("input", { name: field, "data-form-field": true, id: `input-${field}-for-${provider.id}-provider`, type: provider.formFields[field].type ?? "text", placeholder: provider.formFields[field].placeholder ?? "", ...provider.formFields[field] })] }, `input-group-${provider.id}`);
    }), o3("button", { id: `submitButton-${provider.id}`, type: "submit", tabIndex: 0, children: ["Sign in with ", provider.name] })] }), (provider.type === "email" || provider.type === "credentials" || provider.type === "webauthn") && i3 + 1 < providers.length && o3("hr", {})] }, provider.id);
  })] }), conditionalUIProviderID && ConditionalUIScript(conditionalUIProviderID)] });
}
__name(SigninPage, "SigninPage");
__name2(SigninPage, "SigninPage");
var signinErrors;
var init_signin = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/pages/signin.js"() {
    init_jsxRuntime_module();
    init_webauthn_client();
    signinErrors = {
      default: "Unable to sign in.",
      Signin: "Try signing in with a different account.",
      OAuthSignin: "Try signing in with a different account.",
      OAuthCallbackError: "Try signing in with a different account.",
      OAuthCreateAccount: "Try signing in with a different account.",
      EmailCreateAccount: "Try signing in with a different account.",
      Callback: "Try signing in with a different account.",
      OAuthAccountNotLinked: "To confirm your identity, sign in with the same account you used originally.",
      EmailSignin: "The e-mail could not be sent.",
      CredentialsSignin: "Sign in failed. Check the details you provided are correct.",
      SessionRequired: "Please sign in to access this page."
    };
  }
});
function SignoutPage(props) {
  const { url, csrfToken, theme } = props;
  return o3("div", { className: "signout", children: [theme?.brandColor && o3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
  } }), theme?.buttonText && o3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --button-text-color: ${theme.buttonText}
        }
      `
  } }), o3("div", { className: "card", children: [theme?.logo && o3("img", { src: theme.logo, alt: "Logo", className: "logo" }), o3("h1", { children: "Signout" }), o3("p", { children: "Are you sure you want to sign out?" }), o3("form", { action: url?.toString(), method: "POST", children: [o3("input", { type: "hidden", name: "csrfToken", value: csrfToken }), o3("button", { id: "submitButton", type: "submit", children: "Sign out" })] })] })] });
}
__name(SignoutPage, "SignoutPage");
__name2(SignoutPage, "SignoutPage");
var init_signout = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/pages/signout.js"() {
    init_jsxRuntime_module();
  }
});
var styles_default;
var init_styles = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/pages/styles.js"() {
    styles_default = `:root {
  --border-width: 1px;
  --border-radius: 0.5rem;
  --color-error: #c94b4b;
  --color-info: #157efb;
  --color-info-hover: #0f6ddb;
  --color-info-text: #fff;
}

.__next-auth-theme-auto,
.__next-auth-theme-light {
  --color-background: #ececec;
  --color-background-hover: rgba(236, 236, 236, 0.8);
  --color-background-card: #fff;
  --color-text: #000;
  --color-primary: #444;
  --color-control-border: #bbb;
  --color-button-active-background: #f9f9f9;
  --color-button-active-border: #aaa;
  --color-separator: #ccc;
}

.__next-auth-theme-dark {
  --color-background: #161b22;
  --color-background-hover: rgba(22, 27, 34, 0.8);
  --color-background-card: #0d1117;
  --color-text: #fff;
  --color-primary: #ccc;
  --color-control-border: #555;
  --color-button-active-background: #060606;
  --color-button-active-border: #666;
  --color-separator: #444;
}

@media (prefers-color-scheme: dark) {
  .__next-auth-theme-auto {
    --color-background: #161b22;
    --color-background-hover: rgba(22, 27, 34, 0.8);
    --color-background-card: #0d1117;
    --color-text: #fff;
    --color-primary: #ccc;
    --color-control-border: #555;
    --color-button-active-background: #060606;
    --color-button-active-border: #666;
    --color-separator: #444;
  }

  button,
  a.button {
    color: var(--provider-dark-color, var(--color-primary));
    background-color: var(--provider-dark-bg, var(--color-background));
  }
    :is(button,a.button):hover {
      background-color: var(
        --provider-dark-bg-hover,
        var(--color-background-hover)
      ) !important;
    }
  #provider-logo {
    display: none !important;
  }
  #provider-logo-dark {
    width: 25px;
    display: block !important;
  }
}
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji";
}

h1 {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  font-weight: 400;
  color: var(--color-text);
}

p {
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  color: var(--color-text);
}

form {
  margin: 0;
  padding: 0;
}

label {
  font-weight: 500;
  text-align: left;
  margin-bottom: 0.25rem;
  display: block;
  color: var(--color-text);
}

input[type] {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border: var(--border-width) solid var(--color-control-border);
  background: var(--color-background-card);
  font-size: 1rem;
  border-radius: var(--border-radius);
  color: var(--color-text);
}

input[type]:focus {
    box-shadow: none;
  }

p {
  font-size: 1.1rem;
  line-height: 2rem;
}

a.button {
  text-decoration: none;
  line-height: 1rem;
}

a.button:link,
  a.button:visited {
    background-color: var(--color-background);
    color: var(--color-primary);
  }

button span {
  flex-grow: 1;
}

button,
a.button {
  padding: 0.75rem 1rem;
  color: var(--provider-color, var(--color-primary));
  background-color: var(--provider-bg);
  font-size: 1.1rem;
  min-height: 62px;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  transition: all 0.1s ease-in-out;
  font-weight: 500;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

:is(button,a.button):hover {
    background-color: var(--provider-bg-hover, var(--color-background-hover));
    cursor: pointer;
  }

:is(button,a.button):active {
    cursor: pointer;
  }

:is(button,a.button) #provider-logo {
    width: 25px;
    display: block;
  }

:is(button,a.button) #provider-logo-dark {
    display: none;
  }

#submitButton {
  color: var(--button-text-color, var(--color-info-text));
  background-color: var(--brand-color, var(--color-info));
  width: 100%;
}

#submitButton:hover {
    background-color: var(
      --button-hover-bg,
      var(--color-info-hover)
    ) !important;
  }

a.site {
  color: var(--color-primary);
  text-decoration: none;
  font-size: 1rem;
  line-height: 2rem;
}

a.site:hover {
    text-decoration: underline;
  }

.page {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page > div {
    text-align: center;
  }

.error a.button {
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 0.5rem;
  }

.error .message {
    margin-bottom: 1.5rem;
  }

.signin input[type="text"] {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

.signin hr {
    display: block;
    border: 0;
    border-top: 1px solid var(--color-separator);
    margin: 2rem auto 1rem auto;
    overflow: visible;
  }

.signin hr::before {
      content: "or";
      background: var(--color-background-card);
      color: #888;
      padding: 0 0.4rem;
      position: relative;
      top: -0.7rem;
    }

.signin .error {
    background: #f5f5f5;
    font-weight: 500;
    border-radius: 0.3rem;
    background: var(--color-error);
  }

.signin .error p {
      text-align: left;
      padding: 0.5rem 1rem;
      font-size: 0.9rem;
      line-height: 1.2rem;
      color: var(--color-info-text);
    }

.signin > div,
  .signin form {
    display: block;
  }

.signin > div input[type], .signin form input[type] {
      margin-bottom: 0.5rem;
    }

.signin > div button, .signin form button {
      width: 100%;
    }

.signin .provider + .provider {
    margin-top: 1rem;
  }

.logo {
  display: inline-block;
  max-width: 150px;
  margin: 1.25rem 0;
  max-height: 70px;
}

.card {
  background-color: var(--color-background-card);
  border-radius: 2rem;
  padding: 1.25rem 2rem;
}

.card .header {
    color: var(--color-primary);
  }

.section-header {
  color: var(--color-text);
}

@media screen and (min-width: 450px) {
  .card {
    margin: 2rem 0;
    width: 368px;
  }
}
@media screen and (max-width: 450px) {
  .card {
    margin: 1rem 0;
    width: 343px;
  }
}
`;
  }
});
function VerifyRequestPage(props) {
  const { url, theme } = props;
  return o3("div", { className: "verify-request", children: [theme.brandColor && o3("style", { dangerouslySetInnerHTML: {
    __html: `
        :root {
          --brand-color: ${theme.brandColor}
        }
      `
  } }), o3("div", { className: "card", children: [theme.logo && o3("img", { src: theme.logo, alt: "Logo", className: "logo" }), o3("h1", { children: "Check your email" }), o3("p", { children: "A sign in link has been sent to your email address." }), o3("p", { children: o3("a", { className: "site", href: url.origin, children: url.host }) })] })] });
}
__name(VerifyRequestPage, "VerifyRequestPage");
__name2(VerifyRequestPage, "VerifyRequestPage");
var init_verify_request = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/pages/verify-request.js"() {
    init_jsxRuntime_module();
  }
});
function send({ html, title, status, cookies, theme, headTags }) {
  return {
    cookies,
    status,
    headers: { "Content-Type": "text/html" },
    body: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>${styles_default}</style><title>${title}</title>${headTags ?? ""}</head><body class="__next-auth-theme-${theme?.colorScheme ?? "auto"}"><div class="page">${k2(html)}</div></body></html>`
  };
}
__name(send, "send");
__name2(send, "send");
function renderPage(params) {
  const { url, theme, query, cookies, pages, providers } = params;
  return {
    csrf(skip, options2, cookies2) {
      if (!skip) {
        return {
          headers: { "Content-Type": "application/json" },
          body: { csrfToken: options2.csrfToken },
          cookies: cookies2
        };
      }
      options2.logger.warn("csrf-disabled");
      cookies2.push({
        name: options2.cookies.csrfToken.name,
        value: "",
        options: { ...options2.cookies.csrfToken.options, maxAge: 0 }
      });
      return { status: 404, cookies: cookies2 };
    },
    providers(providers2) {
      return {
        headers: { "Content-Type": "application/json" },
        body: providers2.reduce((acc, { id, name, type, signinUrl, callbackUrl }) => {
          acc[id] = { id, name, type, signinUrl, callbackUrl };
          return acc;
        }, {})
      };
    },
    signin(providerId, error2) {
      if (providerId)
        throw new UnknownAction("Unsupported action");
      if (pages?.signIn) {
        let signinUrl = `${pages.signIn}${pages.signIn.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl: params.callbackUrl ?? "/" })}`;
        if (error2)
          signinUrl = `${signinUrl}&${new URLSearchParams({ error: error2 })}`;
        return { redirect: signinUrl, cookies };
      }
      const webauthnProvider = providers?.find((p3) => p3.type === "webauthn" && p3.enableConditionalUI && !!p3.simpleWebAuthnBrowserVersion);
      let simpleWebAuthnBrowserScript = "";
      if (webauthnProvider) {
        const { simpleWebAuthnBrowserVersion } = webauthnProvider;
        simpleWebAuthnBrowserScript = `<script src="https://unpkg.com/@simplewebauthn/browser@${simpleWebAuthnBrowserVersion}/dist/bundle/index.umd.min.js" crossorigin="anonymous"><\/script>`;
      }
      return send({
        cookies,
        theme,
        html: SigninPage({
          csrfToken: params.csrfToken,
          // We only want to render providers
          providers: params.providers?.filter((provider) => (
            // Always render oauth and email type providers
            ["email", "oauth", "oidc"].includes(provider.type) || // Only render credentials type provider if credentials are defined
            provider.type === "credentials" && provider.credentials || // Only render webauthn type provider if formFields are defined
            provider.type === "webauthn" && provider.formFields || // Don't render other provider types
            false
          )),
          callbackUrl: params.callbackUrl,
          theme: params.theme,
          error: error2,
          ...query
        }),
        title: "Sign In",
        headTags: simpleWebAuthnBrowserScript
      });
    },
    signout() {
      if (pages?.signOut)
        return { redirect: pages.signOut, cookies };
      return send({
        cookies,
        theme,
        html: SignoutPage({ csrfToken: params.csrfToken, url, theme }),
        title: "Sign Out"
      });
    },
    verifyRequest(props) {
      if (pages?.verifyRequest)
        return { redirect: pages.verifyRequest, cookies };
      return send({
        cookies,
        theme,
        html: VerifyRequestPage({ url, theme, ...props }),
        title: "Verify Request"
      });
    },
    error(error2) {
      if (pages?.error) {
        return {
          redirect: `${pages.error}${pages.error.includes("?") ? "&" : "?"}error=${error2}`,
          cookies
        };
      }
      return send({
        cookies,
        theme,
        // @ts-expect-error fix error type
        ...ErrorPage({ url, theme, error: error2 }),
        title: "Error"
      });
    }
  };
}
__name(renderPage, "renderPage");
__name2(renderPage, "renderPage");
var init_pages = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/pages/index.js"() {
    init_dist();
    init_error();
    init_signin();
    init_signout();
    init_styles();
    init_verify_request();
    init_errors();
  }
});
function fromDate(time, date = Date.now()) {
  return new Date(date + time * 1e3);
}
__name(fromDate, "fromDate");
__name2(fromDate, "fromDate");
var init_date = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/date.js"() {
  }
});
async function handleLoginOrRegister(sessionToken, _profile, _account, options2) {
  if (!_account?.providerAccountId || !_account.type)
    throw new Error("Missing or invalid provider account");
  if (!["email", "oauth", "oidc", "webauthn"].includes(_account.type))
    throw new Error("Provider not supported");
  const { adapter, jwt: jwt2, events, session: { strategy: sessionStrategy, generateSessionToken } } = options2;
  if (!adapter) {
    return { user: _profile, account: _account };
  }
  const profile = _profile;
  let account = _account;
  const { createUser, updateUser, getUser, getUserByAccount, getUserByEmail, linkAccount, createSession, getSessionAndUser, deleteSession } = adapter;
  let session2 = null;
  let user = null;
  let isNewUser = false;
  const useJwtSession = sessionStrategy === "jwt";
  if (sessionToken) {
    if (useJwtSession) {
      try {
        const salt = options2.cookies.sessionToken.name;
        session2 = await jwt2.decode({ ...jwt2, token: sessionToken, salt });
        if (session2 && "sub" in session2 && session2.sub) {
          user = await getUser(session2.sub);
        }
      } catch {
      }
    } else {
      const userAndSession = await getSessionAndUser(sessionToken);
      if (userAndSession) {
        session2 = userAndSession.session;
        user = userAndSession.user;
      }
    }
  }
  if (account.type === "email") {
    const userByEmail = await getUserByEmail(profile.email);
    if (userByEmail) {
      if (user?.id !== userByEmail.id && !useJwtSession && sessionToken) {
        await deleteSession(sessionToken);
      }
      user = await updateUser({
        id: userByEmail.id,
        emailVerified: /* @__PURE__ */ new Date()
      });
      await events.updateUser?.({ user });
    } else {
      user = await createUser({ ...profile, emailVerified: /* @__PURE__ */ new Date() });
      await events.createUser?.({ user });
      isNewUser = true;
    }
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: user.id,
      expires: fromDate(options2.session.maxAge)
    });
    return { session: session2, user, isNewUser };
  } else if (account.type === "webauthn") {
    const userByAccount2 = await getUserByAccount({
      providerAccountId: account.providerAccountId,
      provider: account.provider
    });
    if (userByAccount2) {
      if (user) {
        if (userByAccount2.id === user.id) {
          const currentAccount2 = { ...account, userId: user.id };
          return { session: session2, user, isNewUser, account: currentAccount2 };
        }
        throw new AccountNotLinked("The account is already associated with another user", { provider: account.provider });
      }
      session2 = useJwtSession ? {} : await createSession({
        sessionToken: generateSessionToken(),
        userId: userByAccount2.id,
        expires: fromDate(options2.session.maxAge)
      });
      const currentAccount = { ...account, userId: userByAccount2.id };
      return { session: session2, user: userByAccount2, isNewUser, account: currentAccount };
    } else {
      if (user) {
        await linkAccount({ ...account, userId: user.id });
        await events.linkAccount?.({ user, account, profile });
        const currentAccount2 = { ...account, userId: user.id };
        return { session: session2, user, isNewUser, account: currentAccount2 };
      }
      const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;
      if (userByEmail) {
        throw new AccountNotLinked("Another account already exists with the same e-mail address", { provider: account.provider });
      } else {
        user = await createUser({ ...profile });
      }
      await events.createUser?.({ user });
      await linkAccount({ ...account, userId: user.id });
      await events.linkAccount?.({ user, account, profile });
      session2 = useJwtSession ? {} : await createSession({
        sessionToken: generateSessionToken(),
        userId: user.id,
        expires: fromDate(options2.session.maxAge)
      });
      const currentAccount = { ...account, userId: user.id };
      return { session: session2, user, isNewUser: true, account: currentAccount };
    }
  }
  const userByAccount = await getUserByAccount({
    providerAccountId: account.providerAccountId,
    provider: account.provider
  });
  if (userByAccount) {
    if (user) {
      if (userByAccount.id === user.id) {
        return { session: session2, user, isNewUser };
      }
      throw new OAuthAccountNotLinked("The account is already associated with another user", { provider: account.provider });
    }
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: userByAccount.id,
      expires: fromDate(options2.session.maxAge)
    });
    return { session: session2, user: userByAccount, isNewUser };
  } else {
    const { provider: p3 } = options2;
    const { type, provider, providerAccountId, userId, ...tokenSet } = account;
    const defaults = { providerAccountId, provider, type, userId };
    account = Object.assign(p3.account(tokenSet) ?? {}, defaults);
    if (user) {
      await linkAccount({ ...account, userId: user.id });
      await events.linkAccount?.({ user, account, profile });
      return { session: session2, user, isNewUser };
    }
    const userByEmail = profile.email ? await getUserByEmail(profile.email) : null;
    if (userByEmail) {
      const provider2 = options2.provider;
      if (provider2?.allowDangerousEmailAccountLinking) {
        user = userByEmail;
      } else {
        throw new OAuthAccountNotLinked("Another account already exists with the same e-mail address", { provider: account.provider });
      }
    } else {
      user = await createUser({ ...profile, emailVerified: null });
    }
    await events.createUser?.({ user });
    await linkAccount({ ...account, userId: user.id });
    await events.linkAccount?.({ user, account, profile });
    session2 = useJwtSession ? {} : await createSession({
      sessionToken: generateSessionToken(),
      userId: user.id,
      expires: fromDate(options2.session.maxAge)
    });
    return { session: session2, user, isNewUser: true };
  }
}
__name(handleLoginOrRegister, "handleLoginOrRegister");
__name2(handleLoginOrRegister, "handleLoginOrRegister");
var init_handle_login = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/callback/handle-login.js"() {
    init_errors();
    init_date();
  }
});
function looseInstanceOf(input, expected) {
  if (input == null) {
    return false;
  }
  try {
    return input instanceof expected || Object.getPrototypeOf(input)[Symbol.toStringTag] === expected.prototype[Symbol.toStringTag];
  } catch {
    return false;
  }
}
__name(looseInstanceOf, "looseInstanceOf");
__name2(looseInstanceOf, "looseInstanceOf");
function buf(input) {
  if (typeof input === "string") {
    return encoder3.encode(input);
  }
  return decoder2.decode(input);
}
__name(buf, "buf");
__name2(buf, "buf");
function encodeBase64Url(input) {
  if (input instanceof ArrayBuffer) {
    input = new Uint8Array(input);
  }
  const arr = [];
  for (let i3 = 0; i3 < input.byteLength; i3 += CHUNK_SIZE2) {
    arr.push(String.fromCharCode.apply(null, input.subarray(i3, i3 + CHUNK_SIZE2)));
  }
  return btoa(arr.join("")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
__name(encodeBase64Url, "encodeBase64Url");
__name2(encodeBase64Url, "encodeBase64Url");
function decodeBase64Url(input) {
  try {
    const binary = atob(input.replace(/-/g, "+").replace(/_/g, "/").replace(/\s/g, ""));
    const bytes = new Uint8Array(binary.length);
    for (let i3 = 0; i3 < binary.length; i3++) {
      bytes[i3] = binary.charCodeAt(i3);
    }
    return bytes;
  } catch (cause) {
    throw new OPE("The input to be decoded is not correctly encoded.", { cause });
  }
}
__name(decodeBase64Url, "decodeBase64Url");
__name2(decodeBase64Url, "decodeBase64Url");
function b64u(input) {
  if (typeof input === "string") {
    return decodeBase64Url(input);
  }
  return encodeBase64Url(input);
}
__name(b64u, "b64u");
__name2(b64u, "b64u");
function isCryptoKey2(key2) {
  return key2 instanceof CryptoKey;
}
__name(isCryptoKey2, "isCryptoKey2");
__name2(isCryptoKey2, "isCryptoKey2");
function isPrivateKey(key2) {
  return isCryptoKey2(key2) && key2.type === "private";
}
__name(isPrivateKey, "isPrivateKey");
__name2(isPrivateKey, "isPrivateKey");
function isPublicKey(key2) {
  return isCryptoKey2(key2) && key2.type === "public";
}
__name(isPublicKey, "isPublicKey");
__name2(isPublicKey, "isPublicKey");
function processDpopNonce(response) {
  try {
    const nonce2 = response.headers.get("dpop-nonce");
    if (nonce2) {
      dpopNonces.set(new URL(response.url).origin, nonce2);
    }
  } catch {
  }
  return response;
}
__name(processDpopNonce, "processDpopNonce");
__name2(processDpopNonce, "processDpopNonce");
function isJsonObject(input) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    return false;
  }
  return true;
}
__name(isJsonObject, "isJsonObject");
__name2(isJsonObject, "isJsonObject");
function prepareHeaders(input) {
  if (looseInstanceOf(input, Headers)) {
    input = Object.fromEntries(input.entries());
  }
  const headers = new Headers(input);
  if (USER_AGENT && !headers.has("user-agent")) {
    headers.set("user-agent", USER_AGENT);
  }
  if (headers.has("authorization")) {
    throw new TypeError('"options.headers" must not include the "authorization" header name');
  }
  if (headers.has("dpop")) {
    throw new TypeError('"options.headers" must not include the "dpop" header name');
  }
  return headers;
}
__name(prepareHeaders, "prepareHeaders");
__name2(prepareHeaders, "prepareHeaders");
function signal(value) {
  if (typeof value === "function") {
    value = value();
  }
  if (!(value instanceof AbortSignal)) {
    throw new TypeError('"options.signal" must return or be an instance of AbortSignal');
  }
  return value;
}
__name(signal, "signal");
__name2(signal, "signal");
async function discoveryRequest(issuerIdentifier, options2) {
  if (!(issuerIdentifier instanceof URL)) {
    throw new TypeError('"issuerIdentifier" must be an instance of URL');
  }
  if (issuerIdentifier.protocol !== "https:" && issuerIdentifier.protocol !== "http:") {
    throw new TypeError('"issuer.protocol" must be "https:" or "http:"');
  }
  const url = new URL(issuerIdentifier.href);
  switch (options2?.algorithm) {
    case void 0:
    case "oidc":
      url.pathname = `${url.pathname}/.well-known/openid-configuration`.replace("//", "/");
      break;
    case "oauth2":
      if (url.pathname === "/") {
        url.pathname = ".well-known/oauth-authorization-server";
      } else {
        url.pathname = `.well-known/oauth-authorization-server/${url.pathname}`.replace("//", "/");
      }
      break;
    default:
      throw new TypeError('"options.algorithm" must be "oidc" (default), or "oauth2"');
  }
  const headers = prepareHeaders(options2?.headers);
  headers.set("accept", "application/json");
  return (options2?.[customFetch] || fetch)(url.href, {
    headers: Object.fromEntries(headers.entries()),
    method: "GET",
    redirect: "manual",
    signal: options2?.signal ? signal(options2.signal) : null
  }).then(processDpopNonce);
}
__name(discoveryRequest, "discoveryRequest");
__name2(discoveryRequest, "discoveryRequest");
function validateString(input) {
  return typeof input === "string" && input.length !== 0;
}
__name(validateString, "validateString");
__name2(validateString, "validateString");
async function processDiscoveryResponse(expectedIssuerIdentifier, response) {
  if (!(expectedIssuerIdentifier instanceof URL)) {
    throw new TypeError('"expectedIssuer" must be an instance of URL');
  }
  if (!looseInstanceOf(response, Response)) {
    throw new TypeError('"response" must be an instance of Response');
  }
  if (response.status !== 200) {
    throw new OPE('"response" is not a conform Authorization Server Metadata response');
  }
  assertReadableResponse(response);
  let json2;
  try {
    json2 = await response.json();
  } catch (cause) {
    throw new OPE('failed to parse "response" body as JSON', { cause });
  }
  if (!isJsonObject(json2)) {
    throw new OPE('"response" body must be a top level object');
  }
  if (!validateString(json2.issuer)) {
    throw new OPE('"response" body "issuer" property must be a non-empty string');
  }
  if (new URL(json2.issuer).href !== expectedIssuerIdentifier.href) {
    throw new OPE('"response" body "issuer" does not match "expectedIssuer"');
  }
  return json2;
}
__name(processDiscoveryResponse, "processDiscoveryResponse");
__name2(processDiscoveryResponse, "processDiscoveryResponse");
function randomBytes() {
  return b64u(crypto.getRandomValues(new Uint8Array(32)));
}
__name(randomBytes, "randomBytes");
__name2(randomBytes, "randomBytes");
function generateRandomCodeVerifier() {
  return randomBytes();
}
__name(generateRandomCodeVerifier, "generateRandomCodeVerifier");
__name2(generateRandomCodeVerifier, "generateRandomCodeVerifier");
function generateRandomState() {
  return randomBytes();
}
__name(generateRandomState, "generateRandomState");
__name2(generateRandomState, "generateRandomState");
function generateRandomNonce() {
  return randomBytes();
}
__name(generateRandomNonce, "generateRandomNonce");
__name2(generateRandomNonce, "generateRandomNonce");
async function calculatePKCECodeChallenge(codeVerifier) {
  if (!validateString(codeVerifier)) {
    throw new TypeError('"codeVerifier" must be a non-empty string');
  }
  return b64u(await crypto.subtle.digest("SHA-256", buf(codeVerifier)));
}
__name(calculatePKCECodeChallenge, "calculatePKCECodeChallenge");
__name2(calculatePKCECodeChallenge, "calculatePKCECodeChallenge");
function getKeyAndKid(input) {
  if (input instanceof CryptoKey) {
    return { key: input };
  }
  if (!(input?.key instanceof CryptoKey)) {
    return {};
  }
  if (input.kid !== void 0 && !validateString(input.kid)) {
    throw new TypeError('"kid" must be a non-empty string');
  }
  return {
    key: input.key,
    kid: input.kid,
    modifyAssertion: input[modifyAssertion]
  };
}
__name(getKeyAndKid, "getKeyAndKid");
__name2(getKeyAndKid, "getKeyAndKid");
function formUrlEncode(token) {
  return encodeURIComponent(token).replace(/%20/g, "+");
}
__name(formUrlEncode, "formUrlEncode");
__name2(formUrlEncode, "formUrlEncode");
function clientSecretBasic(clientId, clientSecret) {
  const username = formUrlEncode(clientId);
  const password = formUrlEncode(clientSecret);
  const credentials = btoa(`${username}:${password}`);
  return `Basic ${credentials}`;
}
__name(clientSecretBasic, "clientSecretBasic");
__name2(clientSecretBasic, "clientSecretBasic");
function psAlg(key2) {
  switch (key2.algorithm.hash.name) {
    case "SHA-256":
      return "PS256";
    case "SHA-384":
      return "PS384";
    case "SHA-512":
      return "PS512";
    default:
      throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name");
  }
}
__name(psAlg, "psAlg");
__name2(psAlg, "psAlg");
function rsAlg(key2) {
  switch (key2.algorithm.hash.name) {
    case "SHA-256":
      return "RS256";
    case "SHA-384":
      return "RS384";
    case "SHA-512":
      return "RS512";
    default:
      throw new UnsupportedOperationError("unsupported RsaHashedKeyAlgorithm hash name");
  }
}
__name(rsAlg, "rsAlg");
__name2(rsAlg, "rsAlg");
function esAlg(key2) {
  switch (key2.algorithm.namedCurve) {
    case "P-256":
      return "ES256";
    case "P-384":
      return "ES384";
    case "P-521":
      return "ES512";
    default:
      throw new UnsupportedOperationError("unsupported EcKeyAlgorithm namedCurve");
  }
}
__name(esAlg, "esAlg");
__name2(esAlg, "esAlg");
function keyToJws(key2) {
  switch (key2.algorithm.name) {
    case "RSA-PSS":
      return psAlg(key2);
    case "RSASSA-PKCS1-v1_5":
      return rsAlg(key2);
    case "ECDSA":
      return esAlg(key2);
    case "Ed25519":
    case "Ed448":
      return "EdDSA";
    default:
      throw new UnsupportedOperationError("unsupported CryptoKey algorithm name");
  }
}
__name(keyToJws, "keyToJws");
__name2(keyToJws, "keyToJws");
function getClockSkew(client) {
  const skew = client?.[clockSkew];
  return typeof skew === "number" && Number.isFinite(skew) ? skew : 0;
}
__name(getClockSkew, "getClockSkew");
__name2(getClockSkew, "getClockSkew");
function getClockTolerance(client) {
  const tolerance = client?.[clockTolerance];
  return typeof tolerance === "number" && Number.isFinite(tolerance) && Math.sign(tolerance) !== -1 ? tolerance : 30;
}
__name(getClockTolerance, "getClockTolerance");
__name2(getClockTolerance, "getClockTolerance");
function epochTime() {
  return Math.floor(Date.now() / 1e3);
}
__name(epochTime, "epochTime");
__name2(epochTime, "epochTime");
function clientAssertion(as, client) {
  const now2 = epochTime() + getClockSkew(client);
  return {
    jti: randomBytes(),
    aud: [as.issuer, as.token_endpoint],
    exp: now2 + 60,
    iat: now2,
    nbf: now2,
    iss: client.client_id,
    sub: client.client_id
  };
}
__name(clientAssertion, "clientAssertion");
__name2(clientAssertion, "clientAssertion");
async function privateKeyJwt(as, client, key2, kid, modifyAssertion2) {
  const header = { alg: keyToJws(key2), kid };
  const payload = clientAssertion(as, client);
  modifyAssertion2?.(header, payload);
  return jwt(header, payload, key2);
}
__name(privateKeyJwt, "privateKeyJwt");
__name2(privateKeyJwt, "privateKeyJwt");
function assertAs(as) {
  if (typeof as !== "object" || as === null) {
    throw new TypeError('"as" must be an object');
  }
  if (!validateString(as.issuer)) {
    throw new TypeError('"as.issuer" property must be a non-empty string');
  }
  return true;
}
__name(assertAs, "assertAs");
__name2(assertAs, "assertAs");
function assertClient(client) {
  if (typeof client !== "object" || client === null) {
    throw new TypeError('"client" must be an object');
  }
  if (!validateString(client.client_id)) {
    throw new TypeError('"client.client_id" property must be a non-empty string');
  }
  return true;
}
__name(assertClient, "assertClient");
__name2(assertClient, "assertClient");
function assertClientSecret(clientSecret) {
  if (!validateString(clientSecret)) {
    throw new TypeError('"client.client_secret" property must be a non-empty string');
  }
  return clientSecret;
}
__name(assertClientSecret, "assertClientSecret");
__name2(assertClientSecret, "assertClientSecret");
function assertNoClientPrivateKey(clientAuthMethod, clientPrivateKey) {
  if (clientPrivateKey !== void 0) {
    throw new TypeError(`"options.clientPrivateKey" property must not be provided when ${clientAuthMethod} client authentication method is used.`);
  }
}
__name(assertNoClientPrivateKey, "assertNoClientPrivateKey");
__name2(assertNoClientPrivateKey, "assertNoClientPrivateKey");
function assertNoClientSecret(clientAuthMethod, clientSecret) {
  if (clientSecret !== void 0) {
    throw new TypeError(`"client.client_secret" property must not be provided when ${clientAuthMethod} client authentication method is used.`);
  }
}
__name(assertNoClientSecret, "assertNoClientSecret");
__name2(assertNoClientSecret, "assertNoClientSecret");
async function clientAuthentication(as, client, body, headers, clientPrivateKey) {
  body.delete("client_secret");
  body.delete("client_assertion_type");
  body.delete("client_assertion");
  switch (client.token_endpoint_auth_method) {
    case void 0:
    case "client_secret_basic": {
      assertNoClientPrivateKey("client_secret_basic", clientPrivateKey);
      headers.set("authorization", clientSecretBasic(client.client_id, assertClientSecret(client.client_secret)));
      break;
    }
    case "client_secret_post": {
      assertNoClientPrivateKey("client_secret_post", clientPrivateKey);
      body.set("client_id", client.client_id);
      body.set("client_secret", assertClientSecret(client.client_secret));
      break;
    }
    case "private_key_jwt": {
      assertNoClientSecret("private_key_jwt", client.client_secret);
      if (clientPrivateKey === void 0) {
        throw new TypeError('"options.clientPrivateKey" must be provided when "client.token_endpoint_auth_method" is "private_key_jwt"');
      }
      const { key: key2, kid, modifyAssertion: modifyAssertion2 } = getKeyAndKid(clientPrivateKey);
      if (!isPrivateKey(key2)) {
        throw new TypeError('"options.clientPrivateKey.key" must be a private CryptoKey');
      }
      body.set("client_id", client.client_id);
      body.set("client_assertion_type", "urn:ietf:params:oauth:client-assertion-type:jwt-bearer");
      body.set("client_assertion", await privateKeyJwt(as, client, key2, kid, modifyAssertion2));
      break;
    }
    case "tls_client_auth":
    case "self_signed_tls_client_auth":
    case "none": {
      assertNoClientSecret(client.token_endpoint_auth_method, client.client_secret);
      assertNoClientPrivateKey(client.token_endpoint_auth_method, clientPrivateKey);
      body.set("client_id", client.client_id);
      break;
    }
    default:
      throw new UnsupportedOperationError("unsupported client token_endpoint_auth_method");
  }
}
__name(clientAuthentication, "clientAuthentication");
__name2(clientAuthentication, "clientAuthentication");
async function jwt(header, payload, key2) {
  if (!key2.usages.includes("sign")) {
    throw new TypeError('CryptoKey instances used for signing assertions must include "sign" in their "usages"');
  }
  const input = `${b64u(buf(JSON.stringify(header)))}.${b64u(buf(JSON.stringify(payload)))}`;
  const signature = b64u(await crypto.subtle.sign(keyToSubtle(key2), key2, buf(input)));
  return `${input}.${signature}`;
}
__name(jwt, "jwt");
__name2(jwt, "jwt");
async function dpopProofJwt(headers, options2, url, htm, clockSkew2, accessToken) {
  const { privateKey, publicKey, nonce: nonce2 = dpopNonces.get(url.origin) } = options2;
  if (!isPrivateKey(privateKey)) {
    throw new TypeError('"DPoP.privateKey" must be a private CryptoKey');
  }
  if (!isPublicKey(publicKey)) {
    throw new TypeError('"DPoP.publicKey" must be a public CryptoKey');
  }
  if (nonce2 !== void 0 && !validateString(nonce2)) {
    throw new TypeError('"DPoP.nonce" must be a non-empty string or undefined');
  }
  if (!publicKey.extractable) {
    throw new TypeError('"DPoP.publicKey.extractable" must be true');
  }
  const now2 = epochTime() + clockSkew2;
  const header = {
    alg: keyToJws(privateKey),
    typ: "dpop+jwt",
    jwk: await publicJwk(publicKey)
  };
  const payload = {
    iat: now2,
    jti: randomBytes(),
    htm,
    nonce: nonce2,
    htu: `${url.origin}${url.pathname}`,
    ath: accessToken ? b64u(await crypto.subtle.digest("SHA-256", buf(accessToken))) : void 0
  };
  options2[modifyAssertion]?.(header, payload);
  headers.set("dpop", await jwt(header, payload, privateKey));
}
__name(dpopProofJwt, "dpopProofJwt");
__name2(dpopProofJwt, "dpopProofJwt");
async function getSetPublicJwkCache(key2) {
  const { kty, e: e3, n: n4, x: x2, y: y2, crv } = await crypto.subtle.exportKey("jwk", key2);
  const jwk = { kty, e: e3, n: n4, x: x2, y: y2, crv };
  jwkCache.set(key2, jwk);
  return jwk;
}
__name(getSetPublicJwkCache, "getSetPublicJwkCache");
__name2(getSetPublicJwkCache, "getSetPublicJwkCache");
async function publicJwk(key2) {
  jwkCache || (jwkCache = /* @__PURE__ */ new WeakMap());
  return jwkCache.get(key2) || getSetPublicJwkCache(key2);
}
__name(publicJwk, "publicJwk");
__name2(publicJwk, "publicJwk");
function validateEndpoint(value, endpoint, useMtlsAlias2) {
  if (typeof value !== "string") {
    if (useMtlsAlias2) {
      throw new TypeError(`"as.mtls_endpoint_aliases.${endpoint}" must be a string`);
    }
    throw new TypeError(`"as.${endpoint}" must be a string`);
  }
  return new URL(value);
}
__name(validateEndpoint, "validateEndpoint");
__name2(validateEndpoint, "validateEndpoint");
function resolveEndpoint(as, endpoint, useMtlsAlias2 = false) {
  if (useMtlsAlias2 && as.mtls_endpoint_aliases && endpoint in as.mtls_endpoint_aliases) {
    return validateEndpoint(as.mtls_endpoint_aliases[endpoint], endpoint, useMtlsAlias2);
  }
  return validateEndpoint(as[endpoint], endpoint, useMtlsAlias2);
}
__name(resolveEndpoint, "resolveEndpoint");
__name2(resolveEndpoint, "resolveEndpoint");
function alias(client, options2) {
  if (client.use_mtls_endpoint_aliases || options2?.[useMtlsAlias]) {
    return true;
  }
  return false;
}
__name(alias, "alias");
__name2(alias, "alias");
function isOAuth2Error(input) {
  const value = input;
  if (typeof value !== "object" || Array.isArray(value) || value === null) {
    return false;
  }
  return value.error !== void 0;
}
__name(isOAuth2Error, "isOAuth2Error");
__name2(isOAuth2Error, "isOAuth2Error");
function unquote(value) {
  if (value.length >= 2 && value[0] === '"' && value[value.length - 1] === '"') {
    return value.slice(1, -1);
  }
  return value;
}
__name(unquote, "unquote");
__name2(unquote, "unquote");
function wwwAuth(scheme, params) {
  const arr = params.split(SPLIT_REGEXP).slice(1);
  if (!arr.length) {
    return { scheme: scheme.toLowerCase(), parameters: {} };
  }
  arr[arr.length - 1] = arr[arr.length - 1].replace(/,$/, "");
  const parameters = {};
  for (let i3 = 1; i3 < arr.length; i3 += 2) {
    const idx = i3;
    if (arr[idx][0] === '"') {
      while (arr[idx].slice(-1) !== '"' && ++i3 < arr.length) {
        arr[idx] += arr[i3];
      }
    }
    const key2 = arr[idx - 1].replace(/^(?:, ?)|=$/g, "").toLowerCase();
    parameters[key2] = unquote(arr[idx]);
  }
  return {
    scheme: scheme.toLowerCase(),
    parameters
  };
}
__name(wwwAuth, "wwwAuth");
__name2(wwwAuth, "wwwAuth");
function parseWwwAuthenticateChallenges(response) {
  if (!looseInstanceOf(response, Response)) {
    throw new TypeError('"response" must be an instance of Response');
  }
  const header = response.headers.get("www-authenticate");
  if (header === null) {
    return void 0;
  }
  const result = [];
  for (const { 1: scheme, index: index3 } of header.matchAll(SCHEMES_REGEXP)) {
    result.push([scheme, index3]);
  }
  if (!result.length) {
    return void 0;
  }
  const challenges = result.map(([scheme, indexOf], i3, others) => {
    const next = others[i3 + 1];
    let parameters;
    if (next) {
      parameters = header.slice(indexOf, next[1]);
    } else {
      parameters = header.slice(indexOf);
    }
    return wwwAuth(scheme, parameters);
  });
  return challenges;
}
__name(parseWwwAuthenticateChallenges, "parseWwwAuthenticateChallenges");
__name2(parseWwwAuthenticateChallenges, "parseWwwAuthenticateChallenges");
async function protectedResourceRequest(accessToken, method, url, headers, body, options2) {
  if (!validateString(accessToken)) {
    throw new TypeError('"accessToken" must be a non-empty string');
  }
  if (!(url instanceof URL)) {
    throw new TypeError('"url" must be an instance of URL');
  }
  headers = prepareHeaders(headers);
  if (options2?.DPoP === void 0) {
    headers.set("authorization", `Bearer ${accessToken}`);
  } else {
    await dpopProofJwt(headers, options2.DPoP, url, method.toUpperCase(), getClockSkew({ [clockSkew]: options2?.[clockSkew] }), accessToken);
    headers.set("authorization", `DPoP ${accessToken}`);
  }
  return (options2?.[customFetch] || fetch)(url.href, {
    body,
    headers: Object.fromEntries(headers.entries()),
    method,
    redirect: "manual",
    signal: options2?.signal ? signal(options2.signal) : null
  }).then(processDpopNonce);
}
__name(protectedResourceRequest, "protectedResourceRequest");
__name2(protectedResourceRequest, "protectedResourceRequest");
async function userInfoRequest(as, client, accessToken, options2) {
  assertAs(as);
  assertClient(client);
  const url = resolveEndpoint(as, "userinfo_endpoint", alias(client, options2));
  const headers = prepareHeaders(options2?.headers);
  if (client.userinfo_signed_response_alg) {
    headers.set("accept", "application/jwt");
  } else {
    headers.set("accept", "application/json");
    headers.append("accept", "application/jwt");
  }
  return protectedResourceRequest(accessToken, "GET", url, headers, null, {
    ...options2,
    [clockSkew]: getClockSkew(client)
  });
}
__name(userInfoRequest, "userInfoRequest");
__name2(userInfoRequest, "userInfoRequest");
async function authenticatedRequest(as, client, method, url, body, headers, options2) {
  await clientAuthentication(as, client, body, headers, options2?.clientPrivateKey);
  headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
  return (options2?.[customFetch] || fetch)(url.href, {
    body,
    headers: Object.fromEntries(headers.entries()),
    method,
    redirect: "manual",
    signal: options2?.signal ? signal(options2.signal) : null
  }).then(processDpopNonce);
}
__name(authenticatedRequest, "authenticatedRequest");
__name2(authenticatedRequest, "authenticatedRequest");
async function tokenEndpointRequest(as, client, grantType, parameters, options2) {
  const url = resolveEndpoint(as, "token_endpoint", alias(client, options2));
  parameters.set("grant_type", grantType);
  const headers = prepareHeaders(options2?.headers);
  headers.set("accept", "application/json");
  if (options2?.DPoP !== void 0) {
    await dpopProofJwt(headers, options2.DPoP, url, "POST", getClockSkew(client));
  }
  return authenticatedRequest(as, client, "POST", url, parameters, headers, options2);
}
__name(tokenEndpointRequest, "tokenEndpointRequest");
__name2(tokenEndpointRequest, "tokenEndpointRequest");
function getValidatedIdTokenClaims(ref) {
  if (!ref.id_token) {
    return void 0;
  }
  const claims = idTokenClaims.get(ref);
  if (!claims) {
    throw new TypeError('"ref" was already garbage collected or did not resolve from the proper sources');
  }
  return claims[0];
}
__name(getValidatedIdTokenClaims, "getValidatedIdTokenClaims");
__name2(getValidatedIdTokenClaims, "getValidatedIdTokenClaims");
async function processGenericAccessTokenResponse(as, client, response, ignoreIdToken = false, ignoreRefreshToken = false) {
  assertAs(as);
  assertClient(client);
  if (!looseInstanceOf(response, Response)) {
    throw new TypeError('"response" must be an instance of Response');
  }
  if (response.status !== 200) {
    let err;
    if (err = await handleOAuthBodyError(response)) {
      return err;
    }
    throw new OPE('"response" is not a conform Token Endpoint response');
  }
  assertReadableResponse(response);
  let json2;
  try {
    json2 = await response.json();
  } catch (cause) {
    throw new OPE('failed to parse "response" body as JSON', { cause });
  }
  if (!isJsonObject(json2)) {
    throw new OPE('"response" body must be a top level object');
  }
  if (!validateString(json2.access_token)) {
    throw new OPE('"response" body "access_token" property must be a non-empty string');
  }
  if (!validateString(json2.token_type)) {
    throw new OPE('"response" body "token_type" property must be a non-empty string');
  }
  json2.token_type = json2.token_type.toLowerCase();
  if (json2.token_type !== "dpop" && json2.token_type !== "bearer") {
    throw new UnsupportedOperationError("unsupported `token_type` value");
  }
  if (json2.expires_in !== void 0 && (typeof json2.expires_in !== "number" || json2.expires_in <= 0)) {
    throw new OPE('"response" body "expires_in" property must be a positive number');
  }
  if (!ignoreRefreshToken && json2.refresh_token !== void 0 && !validateString(json2.refresh_token)) {
    throw new OPE('"response" body "refresh_token" property must be a non-empty string');
  }
  if (json2.scope !== void 0 && typeof json2.scope !== "string") {
    throw new OPE('"response" body "scope" property must be a string');
  }
  if (!ignoreIdToken) {
    if (json2.id_token !== void 0 && !validateString(json2.id_token)) {
      throw new OPE('"response" body "id_token" property must be a non-empty string');
    }
    if (json2.id_token) {
      const { claims, jwt: jwt2 } = await validateJwt(json2.id_token, checkSigningAlgorithm.bind(void 0, client.id_token_signed_response_alg, as.id_token_signing_alg_values_supported), noSignatureCheck, getClockSkew(client), getClockTolerance(client), client[jweDecrypt]).then(validatePresence.bind(void 0, ["aud", "exp", "iat", "iss", "sub"])).then(validateIssuer.bind(void 0, as.issuer)).then(validateAudience.bind(void 0, client.client_id));
      if (Array.isArray(claims.aud) && claims.aud.length !== 1) {
        if (claims.azp === void 0) {
          throw new OPE('ID Token "aud" (audience) claim includes additional untrusted audiences');
        }
        if (claims.azp !== client.client_id) {
          throw new OPE('unexpected ID Token "azp" (authorized party) claim value');
        }
      }
      if (claims.auth_time !== void 0 && (!Number.isFinite(claims.auth_time) || Math.sign(claims.auth_time) !== 1)) {
        throw new OPE('ID Token "auth_time" (authentication time) must be a positive number');
      }
      idTokenClaims.set(json2, [claims, jwt2]);
    }
  }
  return json2;
}
__name(processGenericAccessTokenResponse, "processGenericAccessTokenResponse");
__name2(processGenericAccessTokenResponse, "processGenericAccessTokenResponse");
function validateAudience(expected, result) {
  if (Array.isArray(result.claims.aud)) {
    if (!result.claims.aud.includes(expected)) {
      throw new OPE('unexpected JWT "aud" (audience) claim value');
    }
  } else if (result.claims.aud !== expected) {
    throw new OPE('unexpected JWT "aud" (audience) claim value');
  }
  return result;
}
__name(validateAudience, "validateAudience");
__name2(validateAudience, "validateAudience");
function validateIssuer(expected, result) {
  if (result.claims.iss !== expected) {
    throw new OPE('unexpected JWT "iss" (issuer) claim value');
  }
  return result;
}
__name(validateIssuer, "validateIssuer");
__name2(validateIssuer, "validateIssuer");
function brand(searchParams) {
  branded.add(searchParams);
  return searchParams;
}
__name(brand, "brand");
__name2(brand, "brand");
async function authorizationCodeGrantRequest(as, client, callbackParameters, redirectUri, codeVerifier, options2) {
  assertAs(as);
  assertClient(client);
  if (!branded.has(callbackParameters)) {
    throw new TypeError('"callbackParameters" must be an instance of URLSearchParams obtained from "validateAuthResponse()", or "validateJwtAuthResponse()');
  }
  if (!validateString(redirectUri)) {
    throw new TypeError('"redirectUri" must be a non-empty string');
  }
  if (!validateString(codeVerifier)) {
    throw new TypeError('"codeVerifier" must be a non-empty string');
  }
  const code = getURLSearchParameter(callbackParameters, "code");
  if (!code) {
    throw new OPE('no authorization code in "callbackParameters"');
  }
  const parameters = new URLSearchParams(options2?.additionalParameters);
  parameters.set("redirect_uri", redirectUri);
  parameters.set("code_verifier", codeVerifier);
  parameters.set("code", code);
  return tokenEndpointRequest(as, client, "authorization_code", parameters, options2);
}
__name(authorizationCodeGrantRequest, "authorizationCodeGrantRequest");
__name2(authorizationCodeGrantRequest, "authorizationCodeGrantRequest");
function validatePresence(required, result) {
  for (const claim of required) {
    if (result.claims[claim] === void 0) {
      throw new OPE(`JWT "${claim}" (${jwtClaimNames[claim]}) claim missing`);
    }
  }
  return result;
}
__name(validatePresence, "validatePresence");
__name2(validatePresence, "validatePresence");
async function processAuthorizationCodeOpenIDResponse(as, client, response, expectedNonce, maxAge) {
  const result = await processGenericAccessTokenResponse(as, client, response);
  if (isOAuth2Error(result)) {
    return result;
  }
  if (!validateString(result.id_token)) {
    throw new OPE('"response" body "id_token" property must be a non-empty string');
  }
  maxAge ?? (maxAge = client.default_max_age ?? skipAuthTimeCheck);
  const claims = getValidatedIdTokenClaims(result);
  if ((client.require_auth_time || maxAge !== skipAuthTimeCheck) && claims.auth_time === void 0) {
    throw new OPE('ID Token "auth_time" (authentication time) claim missing');
  }
  if (maxAge !== skipAuthTimeCheck) {
    if (typeof maxAge !== "number" || maxAge < 0) {
      throw new TypeError('"maxAge" must be a non-negative number');
    }
    const now2 = epochTime() + getClockSkew(client);
    const tolerance = getClockTolerance(client);
    if (claims.auth_time + maxAge < now2 - tolerance) {
      throw new OPE("too much time has elapsed since the last End-User authentication");
    }
  }
  switch (expectedNonce) {
    case void 0:
    case expectNoNonce:
      if (claims.nonce !== void 0) {
        throw new OPE('unexpected ID Token "nonce" claim value');
      }
      break;
    default:
      if (!validateString(expectedNonce)) {
        throw new TypeError('"expectedNonce" must be a non-empty string');
      }
      if (claims.nonce === void 0) {
        throw new OPE('ID Token "nonce" claim missing');
      }
      if (claims.nonce !== expectedNonce) {
        throw new OPE('unexpected ID Token "nonce" claim value');
      }
  }
  return result;
}
__name(processAuthorizationCodeOpenIDResponse, "processAuthorizationCodeOpenIDResponse");
__name2(processAuthorizationCodeOpenIDResponse, "processAuthorizationCodeOpenIDResponse");
async function processAuthorizationCodeOAuth2Response(as, client, response) {
  const result = await processGenericAccessTokenResponse(as, client, response, true);
  if (isOAuth2Error(result)) {
    return result;
  }
  if (result.id_token !== void 0) {
    if (typeof result.id_token === "string" && result.id_token.length) {
      throw new OPE("Unexpected ID Token returned, use processAuthorizationCodeOpenIDResponse() for OpenID Connect callback processing");
    }
    delete result.id_token;
  }
  return result;
}
__name(processAuthorizationCodeOAuth2Response, "processAuthorizationCodeOAuth2Response");
__name2(processAuthorizationCodeOAuth2Response, "processAuthorizationCodeOAuth2Response");
function assertReadableResponse(response) {
  if (response.bodyUsed) {
    throw new TypeError('"response" body has been used already');
  }
}
__name(assertReadableResponse, "assertReadableResponse");
__name2(assertReadableResponse, "assertReadableResponse");
async function handleOAuthBodyError(response) {
  if (response.status > 399 && response.status < 500) {
    assertReadableResponse(response);
    try {
      const json2 = await response.json();
      if (isJsonObject(json2) && typeof json2.error === "string" && json2.error.length) {
        if (json2.error_description !== void 0 && typeof json2.error_description !== "string") {
          delete json2.error_description;
        }
        if (json2.error_uri !== void 0 && typeof json2.error_uri !== "string") {
          delete json2.error_uri;
        }
        if (json2.algs !== void 0 && typeof json2.algs !== "string") {
          delete json2.algs;
        }
        if (json2.scope !== void 0 && typeof json2.scope !== "string") {
          delete json2.scope;
        }
        return json2;
      }
    } catch {
    }
  }
  return void 0;
}
__name(handleOAuthBodyError, "handleOAuthBodyError");
__name2(handleOAuthBodyError, "handleOAuthBodyError");
function checkRsaKeyAlgorithm(algorithm) {
  if (typeof algorithm.modulusLength !== "number" || algorithm.modulusLength < 2048) {
    throw new OPE(`${algorithm.name} modulusLength must be at least 2048 bits`);
  }
}
__name(checkRsaKeyAlgorithm, "checkRsaKeyAlgorithm");
__name2(checkRsaKeyAlgorithm, "checkRsaKeyAlgorithm");
function ecdsaHashName(namedCurve) {
  switch (namedCurve) {
    case "P-256":
      return "SHA-256";
    case "P-384":
      return "SHA-384";
    case "P-521":
      return "SHA-512";
    default:
      throw new UnsupportedOperationError();
  }
}
__name(ecdsaHashName, "ecdsaHashName");
__name2(ecdsaHashName, "ecdsaHashName");
function keyToSubtle(key2) {
  switch (key2.algorithm.name) {
    case "ECDSA":
      return {
        name: key2.algorithm.name,
        hash: ecdsaHashName(key2.algorithm.namedCurve)
      };
    case "RSA-PSS": {
      checkRsaKeyAlgorithm(key2.algorithm);
      switch (key2.algorithm.hash.name) {
        case "SHA-256":
        case "SHA-384":
        case "SHA-512":
          return {
            name: key2.algorithm.name,
            saltLength: parseInt(key2.algorithm.hash.name.slice(-3), 10) >> 3
          };
        default:
          throw new UnsupportedOperationError();
      }
    }
    case "RSASSA-PKCS1-v1_5":
      checkRsaKeyAlgorithm(key2.algorithm);
      return key2.algorithm.name;
    case "Ed448":
    case "Ed25519":
      return key2.algorithm.name;
  }
  throw new UnsupportedOperationError();
}
__name(keyToSubtle, "keyToSubtle");
__name2(keyToSubtle, "keyToSubtle");
async function validateJwsSignature(protectedHeader, payload, key2, signature) {
  const input = `${protectedHeader}.${payload}`;
  const verified = await crypto.subtle.verify(keyToSubtle(key2), key2, signature, buf(input));
  if (!verified) {
    throw new OPE("JWT signature verification failed");
  }
}
__name(validateJwsSignature, "validateJwsSignature");
__name2(validateJwsSignature, "validateJwsSignature");
async function validateJwt(jws, checkAlg, getKey, clockSkew2, clockTolerance2, decryptJwt) {
  let { 0: protectedHeader, 1: payload, 2: encodedSignature, length } = jws.split(".");
  if (length === 5) {
    if (decryptJwt !== void 0) {
      jws = await decryptJwt(jws);
      ({ 0: protectedHeader, 1: payload, 2: encodedSignature, length } = jws.split("."));
    } else {
      throw new UnsupportedOperationError("JWE structure JWTs are not supported");
    }
  }
  if (length !== 3) {
    throw new OPE("Invalid JWT");
  }
  let header;
  try {
    header = JSON.parse(buf(b64u(protectedHeader)));
  } catch (cause) {
    throw new OPE("failed to parse JWT Header body as base64url encoded JSON", { cause });
  }
  if (!isJsonObject(header)) {
    throw new OPE("JWT Header must be a top level object");
  }
  checkAlg(header);
  if (header.crit !== void 0) {
    throw new OPE('unexpected JWT "crit" header parameter');
  }
  const signature = b64u(encodedSignature);
  let key2;
  if (getKey !== noSignatureCheck) {
    key2 = await getKey(header);
    await validateJwsSignature(protectedHeader, payload, key2, signature);
  }
  let claims;
  try {
    claims = JSON.parse(buf(b64u(payload)));
  } catch (cause) {
    throw new OPE("failed to parse JWT Payload body as base64url encoded JSON", { cause });
  }
  if (!isJsonObject(claims)) {
    throw new OPE("JWT Payload must be a top level object");
  }
  const now2 = epochTime() + clockSkew2;
  if (claims.exp !== void 0) {
    if (typeof claims.exp !== "number") {
      throw new OPE('unexpected JWT "exp" (expiration time) claim type');
    }
    if (claims.exp <= now2 - clockTolerance2) {
      throw new OPE('unexpected JWT "exp" (expiration time) claim value, timestamp is <= now()');
    }
  }
  if (claims.iat !== void 0) {
    if (typeof claims.iat !== "number") {
      throw new OPE('unexpected JWT "iat" (issued at) claim type');
    }
  }
  if (claims.iss !== void 0) {
    if (typeof claims.iss !== "string") {
      throw new OPE('unexpected JWT "iss" (issuer) claim type');
    }
  }
  if (claims.nbf !== void 0) {
    if (typeof claims.nbf !== "number") {
      throw new OPE('unexpected JWT "nbf" (not before) claim type');
    }
    if (claims.nbf > now2 + clockTolerance2) {
      throw new OPE('unexpected JWT "nbf" (not before) claim value, timestamp is > now()');
    }
  }
  if (claims.aud !== void 0) {
    if (typeof claims.aud !== "string" && !Array.isArray(claims.aud)) {
      throw new OPE('unexpected JWT "aud" (audience) claim type');
    }
  }
  return { header, claims, signature, key: key2, jwt: jws };
}
__name(validateJwt, "validateJwt");
__name2(validateJwt, "validateJwt");
function checkSigningAlgorithm(client, issuer, header) {
  if (client !== void 0) {
    if (header.alg !== client) {
      throw new OPE('unexpected JWT "alg" header parameter');
    }
    return;
  }
  if (Array.isArray(issuer)) {
    if (!issuer.includes(header.alg)) {
      throw new OPE('unexpected JWT "alg" header parameter');
    }
    return;
  }
  if (header.alg !== "RS256") {
    throw new OPE('unexpected JWT "alg" header parameter');
  }
}
__name(checkSigningAlgorithm, "checkSigningAlgorithm");
__name2(checkSigningAlgorithm, "checkSigningAlgorithm");
function getURLSearchParameter(parameters, name) {
  const { 0: value, length } = parameters.getAll(name);
  if (length > 1) {
    throw new OPE(`"${name}" parameter must be provided only once`);
  }
  return value;
}
__name(getURLSearchParameter, "getURLSearchParameter");
__name2(getURLSearchParameter, "getURLSearchParameter");
function validateAuthResponse(as, client, parameters, expectedState) {
  assertAs(as);
  assertClient(client);
  if (parameters instanceof URL) {
    parameters = parameters.searchParams;
  }
  if (!(parameters instanceof URLSearchParams)) {
    throw new TypeError('"parameters" must be an instance of URLSearchParams, or URL');
  }
  if (getURLSearchParameter(parameters, "response")) {
    throw new OPE('"parameters" contains a JARM response, use validateJwtAuthResponse() instead of validateAuthResponse()');
  }
  const iss = getURLSearchParameter(parameters, "iss");
  const state2 = getURLSearchParameter(parameters, "state");
  if (!iss && as.authorization_response_iss_parameter_supported) {
    throw new OPE('response parameter "iss" (issuer) missing');
  }
  if (iss && iss !== as.issuer) {
    throw new OPE('unexpected "iss" (issuer) response parameter value');
  }
  switch (expectedState) {
    case void 0:
    case expectNoState:
      if (state2 !== void 0) {
        throw new OPE('unexpected "state" response parameter encountered');
      }
      break;
    case skipStateCheck:
      break;
    default:
      if (!validateString(expectedState)) {
        throw new OPE('"expectedState" must be a non-empty string');
      }
      if (state2 === void 0) {
        throw new OPE('response parameter "state" missing');
      }
      if (state2 !== expectedState) {
        throw new OPE('unexpected "state" response parameter value');
      }
  }
  const error2 = getURLSearchParameter(parameters, "error");
  if (error2) {
    return {
      error: error2,
      error_description: getURLSearchParameter(parameters, "error_description"),
      error_uri: getURLSearchParameter(parameters, "error_uri")
    };
  }
  const id_token = getURLSearchParameter(parameters, "id_token");
  const token = getURLSearchParameter(parameters, "token");
  if (id_token !== void 0 || token !== void 0) {
    throw new UnsupportedOperationError("implicit and hybrid flows are not supported");
  }
  return brand(new URLSearchParams(parameters));
}
__name(validateAuthResponse, "validateAuthResponse");
__name2(validateAuthResponse, "validateAuthResponse");
var USER_AGENT;
var clockSkew;
var clockTolerance;
var customFetch;
var modifyAssertion;
var jweDecrypt;
var jwksCache;
var useMtlsAlias;
var encoder3;
var decoder2;
var CHUNK_SIZE2;
var LRU;
var UnsupportedOperationError;
var OperationProcessingError;
var OPE;
var dpopNonces;
var jwkCache;
var SPLIT_REGEXP;
var SCHEMES_REGEXP;
var skipSubjectCheck;
var idTokenClaims;
var branded;
var jwtClaimNames;
var expectNoNonce;
var skipAuthTimeCheck;
var noSignatureCheck;
var skipStateCheck;
var expectNoState;
var init_build = __esm({
  "node_modules/.pnpm/oauth4webapi@2.17.0/node_modules/oauth4webapi/build/index.js"() {
    if (typeof navigator === "undefined" || !"Cloudflare-Workers"?.startsWith?.("Mozilla/5.0 ")) {
      const NAME = "oauth4webapi";
      const VERSION = "v2.17.0";
      USER_AGENT = `${NAME}/${VERSION}`;
    }
    clockSkew = /* @__PURE__ */ Symbol();
    clockTolerance = /* @__PURE__ */ Symbol();
    customFetch = /* @__PURE__ */ Symbol();
    modifyAssertion = /* @__PURE__ */ Symbol();
    jweDecrypt = /* @__PURE__ */ Symbol();
    jwksCache = /* @__PURE__ */ Symbol();
    useMtlsAlias = /* @__PURE__ */ Symbol();
    encoder3 = new TextEncoder();
    decoder2 = new TextDecoder();
    CHUNK_SIZE2 = 32768;
    LRU = class {
      static {
        __name(this, "LRU");
      }
      static {
        __name2(this, "LRU");
      }
      constructor(maxSize) {
        this.cache = /* @__PURE__ */ new Map();
        this._cache = /* @__PURE__ */ new Map();
        this.maxSize = maxSize;
      }
      get(key2) {
        let v3 = this.cache.get(key2);
        if (v3) {
          return v3;
        }
        if (v3 = this._cache.get(key2)) {
          this.update(key2, v3);
          return v3;
        }
        return void 0;
      }
      has(key2) {
        return this.cache.has(key2) || this._cache.has(key2);
      }
      set(key2, value) {
        if (this.cache.has(key2)) {
          this.cache.set(key2, value);
        } else {
          this.update(key2, value);
        }
        return this;
      }
      delete(key2) {
        if (this.cache.has(key2)) {
          return this.cache.delete(key2);
        }
        if (this._cache.has(key2)) {
          return this._cache.delete(key2);
        }
        return false;
      }
      update(key2, value) {
        this.cache.set(key2, value);
        if (this.cache.size >= this.maxSize) {
          this._cache = this.cache;
          this.cache = /* @__PURE__ */ new Map();
        }
      }
    };
    UnsupportedOperationError = class extends Error {
      static {
        __name(this, "UnsupportedOperationError");
      }
      static {
        __name2(this, "UnsupportedOperationError");
      }
      constructor(message2) {
        super(message2 ?? "operation not supported");
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    OperationProcessingError = class extends Error {
      static {
        __name(this, "OperationProcessingError");
      }
      static {
        __name2(this, "OperationProcessingError");
      }
      constructor(message2, options2) {
        super(message2, options2);
        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
      }
    };
    OPE = OperationProcessingError;
    dpopNonces = new LRU(100);
    SPLIT_REGEXP = /((?:,|, )?[0-9a-zA-Z!#$%&'*+-.^_`|~]+=)/;
    SCHEMES_REGEXP = /(?:^|, ?)([0-9a-zA-Z!#$%&'*+\-.^_`|~]+)(?=$|[ ,])/g;
    skipSubjectCheck = /* @__PURE__ */ Symbol();
    idTokenClaims = /* @__PURE__ */ new WeakMap();
    branded = /* @__PURE__ */ new WeakSet();
    jwtClaimNames = {
      aud: "audience",
      c_hash: "code hash",
      client_id: "client id",
      exp: "expiration time",
      iat: "issued at",
      iss: "issuer",
      jti: "jwt id",
      nonce: "nonce",
      s_hash: "state hash",
      sub: "subject",
      ath: "access token hash",
      htm: "http method",
      htu: "http uri",
      cnf: "confirmation"
    };
    expectNoNonce = /* @__PURE__ */ Symbol();
    skipAuthTimeCheck = /* @__PURE__ */ Symbol();
    noSignatureCheck = /* @__PURE__ */ Symbol();
    skipStateCheck = /* @__PURE__ */ Symbol();
    expectNoState = /* @__PURE__ */ Symbol();
  }
});
async function signCookie(type, value, maxAge, options2, data) {
  const { cookies, logger: logger2 } = options2;
  logger2.debug(`CREATE_${type.toUpperCase()}`, { value, maxAge });
  const expires = /* @__PURE__ */ new Date();
  expires.setTime(expires.getTime() + maxAge * 1e3);
  const token = { value };
  if (type === "state" && data)
    token.data = data;
  const name = cookies[type].name;
  return {
    name,
    value: await encode3({ ...options2.jwt, maxAge, token, salt: name }),
    options: { ...cookies[type].options, expires }
  };
}
__name(signCookie, "signCookie");
__name2(signCookie, "signCookie");
function decodeState(value) {
  try {
    const decoder3 = new TextDecoder();
    return JSON.parse(decoder3.decode(base64url_exports.decode(value)));
  } catch {
  }
}
__name(decodeState, "decodeState");
__name2(decodeState, "decodeState");
function handleState(query, provider, isOnRedirectProxy) {
  let randomState;
  let proxyRedirect;
  if (provider.redirectProxyUrl && !query?.state) {
    throw new InvalidCheck("Missing state in query, but required for redirect proxy");
  }
  const state2 = decodeState(query?.state);
  randomState = state2?.random;
  if (isOnRedirectProxy) {
    if (!state2?.origin)
      return { randomState };
    proxyRedirect = `${state2.origin}?${new URLSearchParams(query)}`;
  }
  return { randomState, proxyRedirect };
}
__name(handleState, "handleState");
__name2(handleState, "handleState");
var PKCE_MAX_AGE;
var pkce;
var STATE_MAX_AGE;
var state;
var NONCE_MAX_AGE;
var nonce;
var WEBAUTHN_CHALLENGE_MAX_AGE;
var webauthnChallenge;
var init_checks = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/callback/oauth/checks.js"() {
    init_browser();
    init_build();
    init_errors();
    init_jwt();
    PKCE_MAX_AGE = 60 * 15;
    pkce = {
      async create(options2) {
        const code_verifier = generateRandomCodeVerifier();
        const value = await calculatePKCECodeChallenge(code_verifier);
        const maxAge = PKCE_MAX_AGE;
        const cookie = await signCookie("pkceCodeVerifier", code_verifier, maxAge, options2);
        return { cookie, value };
      },
      /**
       * Returns code_verifier if the provider is configured to use PKCE,
       * and clears the container cookie afterwards.
       * An error is thrown if the code_verifier is missing or invalid.
       * @see https://www.rfc-editor.org/rfc/rfc7636
       * @see https://danielfett.de/2020/05/16/pkce-vs-nonce-equivalent-or-not/#pkce
       */
      async use(cookies, resCookies, options2) {
        const { provider } = options2;
        if (!provider?.checks?.includes("pkce"))
          return;
        const codeVerifier = cookies?.[options2.cookies.pkceCodeVerifier.name];
        if (!codeVerifier)
          throw new InvalidCheck("PKCE code_verifier cookie was missing.");
        const value = await decode3({
          ...options2.jwt,
          token: codeVerifier,
          salt: options2.cookies.pkceCodeVerifier.name
        });
        if (!value?.value)
          throw new InvalidCheck("PKCE code_verifier value could not be parsed.");
        resCookies.push({
          name: options2.cookies.pkceCodeVerifier.name,
          value: "",
          options: { ...options2.cookies.pkceCodeVerifier.options, maxAge: 0 }
        });
        return value.value;
      }
    };
    STATE_MAX_AGE = 60 * 15;
    state = {
      async create(options2, data) {
        const { provider } = options2;
        if (!provider.checks.includes("state")) {
          if (data) {
            throw new InvalidCheck("State data was provided but the provider is not configured to use state.");
          }
          return;
        }
        const encodedState = base64url_exports.encode(JSON.stringify({ ...data, random: generateRandomState() }));
        const maxAge = STATE_MAX_AGE;
        const cookie = await signCookie("state", encodedState, maxAge, options2, data);
        return { cookie, value: encodedState };
      },
      /**
       * Returns state if the provider is configured to use state,
       * and clears the container cookie afterwards.
       * An error is thrown if the state is missing or invalid.
       * @see https://www.rfc-editor.org/rfc/rfc6749#section-10.12
       * @see https://www.rfc-editor.org/rfc/rfc6749#section-4.1.1
       */
      async use(cookies, resCookies, options2, paramRandom) {
        const { provider } = options2;
        if (!provider.checks.includes("state"))
          return;
        const state2 = cookies?.[options2.cookies.state.name];
        if (!state2)
          throw new InvalidCheck("State cookie was missing.");
        const encodedState = await decode3({
          ...options2.jwt,
          token: state2,
          salt: options2.cookies.state.name
        });
        if (!encodedState?.value)
          throw new InvalidCheck("State (cookie) value could not be parsed.");
        const decodedState = decodeState(encodedState.value);
        if (!decodedState)
          throw new InvalidCheck("State (encoded) value could not be parsed.");
        if (decodedState.random !== paramRandom)
          throw new InvalidCheck(`Random state values did not match. Expected: ${decodedState.random}. Got: ${paramRandom}`);
        resCookies.push({
          name: options2.cookies.state.name,
          value: "",
          options: { ...options2.cookies.state.options, maxAge: 0 }
        });
        return encodedState.value;
      }
    };
    NONCE_MAX_AGE = 60 * 15;
    nonce = {
      async create(options2) {
        if (!options2.provider.checks.includes("nonce"))
          return;
        const value = generateRandomNonce();
        const maxAge = NONCE_MAX_AGE;
        const cookie = await signCookie("nonce", value, maxAge, options2);
        return { cookie, value };
      },
      /**
       * Returns nonce if the provider is configured to use nonce,
       * and clears the container cookie afterwards.
       * An error is thrown if the nonce is missing or invalid.
       * @see https://openid.net/specs/openid-connect-core-1_0.html#NonceNotes
       * @see https://danielfett.de/2020/05/16/pkce-vs-nonce-equivalent-or-not/#nonce
       */
      async use(cookies, resCookies, options2) {
        const { provider } = options2;
        if (!provider?.checks?.includes("nonce"))
          return;
        const nonce2 = cookies?.[options2.cookies.nonce.name];
        if (!nonce2)
          throw new InvalidCheck("Nonce cookie was missing.");
        const value = await decode3({
          ...options2.jwt,
          token: nonce2,
          salt: options2.cookies.nonce.name
        });
        if (!value?.value)
          throw new InvalidCheck("Nonce value could not be parsed.");
        resCookies.push({
          name: options2.cookies.nonce.name,
          value: "",
          options: { ...options2.cookies.nonce.options, maxAge: 0 }
        });
        return value.value;
      }
    };
    WEBAUTHN_CHALLENGE_MAX_AGE = 60 * 15;
    webauthnChallenge = {
      async create(options2, challenge, registerData) {
        const maxAge = WEBAUTHN_CHALLENGE_MAX_AGE;
        const data = { challenge, registerData };
        const cookie = await signCookie("webauthnChallenge", JSON.stringify(data), maxAge, options2);
        return { cookie };
      },
      /**
       * Returns challenge if present,
       */
      async use(options2, cookies, resCookies) {
        const challenge = cookies?.[options2.cookies.webauthnChallenge.name];
        if (!challenge)
          throw new InvalidCheck("Challenge cookie missing.");
        const value = await decode3({
          ...options2.jwt,
          token: challenge,
          salt: options2.cookies.webauthnChallenge.name
        });
        if (!value?.value)
          throw new InvalidCheck("Challenge value could not be parsed.");
        const cookie = {
          name: options2.cookies.webauthnChallenge.name,
          value: "",
          options: { ...options2.cookies.webauthnChallenge.options, maxAge: 0 }
        };
        resCookies.push(cookie);
        return JSON.parse(value.value);
      }
    };
  }
});
async function handleOAuth(query, cookies, options2, randomState) {
  const { logger: logger2, provider } = options2;
  let as;
  const { token, userinfo } = provider;
  if ((!token?.url || token.url.host === "authjs.dev") && (!userinfo?.url || userinfo.url.host === "authjs.dev")) {
    const issuer = new URL(provider.issuer);
    const discoveryResponse = await discoveryRequest(issuer);
    const discoveredAs = await processDiscoveryResponse(issuer, discoveryResponse);
    if (!discoveredAs.token_endpoint)
      throw new TypeError("TODO: Authorization server did not provide a token endpoint.");
    if (!discoveredAs.userinfo_endpoint)
      throw new TypeError("TODO: Authorization server did not provide a userinfo endpoint.");
    as = discoveredAs;
  } else {
    as = {
      issuer: provider.issuer ?? "https://authjs.dev",
      // TODO: review fallback issuer
      token_endpoint: token?.url.toString(),
      userinfo_endpoint: userinfo?.url.toString()
    };
  }
  const client = {
    client_id: provider.clientId,
    client_secret: provider.clientSecret,
    ...provider.client
  };
  const resCookies = [];
  const state2 = await state.use(cookies, resCookies, options2, randomState);
  const codeGrantParams = validateAuthResponse(as, client, new URLSearchParams(query), provider.checks.includes("state") ? state2 : skipStateCheck);
  if (isOAuth2Error(codeGrantParams)) {
    const cause = { providerId: provider.id, ...codeGrantParams };
    logger2.debug("OAuthCallbackError", cause);
    throw new OAuthCallbackError("OAuth Provider returned an error", cause);
  }
  const codeVerifier = await pkce.use(cookies, resCookies, options2);
  let redirect_uri = provider.callbackUrl;
  if (!options2.isOnRedirectProxy && provider.redirectProxyUrl) {
    redirect_uri = provider.redirectProxyUrl;
  }
  let codeGrantResponse = await authorizationCodeGrantRequest(
    as,
    client,
    codeGrantParams,
    redirect_uri,
    codeVerifier ?? "auth"
    // TODO: review fallback code verifier
  );
  if (provider.token?.conform) {
    codeGrantResponse = await provider.token.conform(codeGrantResponse.clone()) ?? codeGrantResponse;
  }
  let challenges;
  if (challenges = parseWwwAuthenticateChallenges(codeGrantResponse)) {
    for (const challenge of challenges) {
      console.log("challenge", challenge);
    }
    throw new Error("TODO: Handle www-authenticate challenges as needed");
  }
  let profile = {};
  let tokens;
  if (provider.type === "oidc") {
    const nonce2 = await nonce.use(cookies, resCookies, options2);
    const result = await processAuthorizationCodeOpenIDResponse(as, client, codeGrantResponse, nonce2 ?? expectNoNonce);
    if (isOAuth2Error(result)) {
      console.log("error", result);
      throw new Error("TODO: Handle OIDC response body error");
    }
    profile = getValidatedIdTokenClaims(result);
    tokens = result;
  } else {
    tokens = await processAuthorizationCodeOAuth2Response(as, client, codeGrantResponse);
    if (isOAuth2Error(tokens)) {
      console.log("error", tokens);
      throw new Error("TODO: Handle OAuth 2.0 response body error");
    }
    if (userinfo?.request) {
      const _profile = await userinfo.request({ tokens, provider });
      if (_profile instanceof Object)
        profile = _profile;
    } else if (userinfo?.url) {
      const userinfoResponse = await userInfoRequest(as, client, tokens.access_token);
      profile = await userinfoResponse.json();
    } else {
      throw new TypeError("No userinfo endpoint configured");
    }
  }
  if (tokens.expires_in) {
    tokens.expires_at = Math.floor(Date.now() / 1e3) + Number(tokens.expires_in);
  }
  const profileResult = await getUserAndAccount(profile, provider, tokens, logger2);
  return { ...profileResult, profile, cookies: resCookies };
}
__name(handleOAuth, "handleOAuth");
__name2(handleOAuth, "handleOAuth");
async function getUserAndAccount(OAuthProfile, provider, tokens, logger2) {
  try {
    const userFromProfile = await provider.profile(OAuthProfile, tokens);
    const user = {
      ...userFromProfile,
      id: crypto.randomUUID(),
      email: userFromProfile.email?.toLowerCase()
    };
    return {
      user,
      account: {
        ...tokens,
        provider: provider.id,
        type: provider.type,
        providerAccountId: userFromProfile.id ?? crypto.randomUUID()
      }
    };
  } catch (e3) {
    logger2.debug("getProfile error details", OAuthProfile);
    logger2.error(new OAuthProfileParseError(e3, { provider: provider.id }));
  }
}
__name(getUserAndAccount, "getUserAndAccount");
__name2(getUserAndAccount, "getUserAndAccount");
var init_callback = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/callback/oauth/callback.js"() {
    init_checks();
    init_build();
    init_errors();
  }
});
function inferWebAuthnOptions(action, loggedIn, userInfoResponse) {
  const { user, exists = false } = userInfoResponse ?? {};
  switch (action) {
    case "authenticate": {
      return "authenticate";
    }
    case "register": {
      if (user && loggedIn === exists)
        return "register";
      break;
    }
    case void 0: {
      if (!loggedIn) {
        if (user) {
          if (exists) {
            return "authenticate";
          } else {
            return "register";
          }
        } else {
          return "authenticate";
        }
      }
      break;
    }
  }
  return null;
}
__name(inferWebAuthnOptions, "inferWebAuthnOptions");
__name2(inferWebAuthnOptions, "inferWebAuthnOptions");
async function getRegistrationResponse(options2, request, user, resCookies) {
  const regOptions = await getRegistrationOptions(options2, request, user);
  const { cookie } = await webauthnChallenge.create(options2, regOptions.challenge, user);
  return {
    status: 200,
    cookies: [...resCookies ?? [], cookie],
    body: {
      action: "register",
      options: regOptions
    },
    headers: {
      "Content-Type": "application/json"
    }
  };
}
__name(getRegistrationResponse, "getRegistrationResponse");
__name2(getRegistrationResponse, "getRegistrationResponse");
async function getAuthenticationResponse(options2, request, user, resCookies) {
  const authOptions = await getAuthenticationOptions(options2, request, user);
  const { cookie } = await webauthnChallenge.create(options2, authOptions.challenge);
  return {
    status: 200,
    cookies: [...resCookies ?? [], cookie],
    body: {
      action: "authenticate",
      options: authOptions
    },
    headers: {
      "Content-Type": "application/json"
    }
  };
}
__name(getAuthenticationResponse, "getAuthenticationResponse");
__name2(getAuthenticationResponse, "getAuthenticationResponse");
async function verifyAuthenticate(options2, request, resCookies) {
  const { adapter, provider } = options2;
  const data = request.body && typeof request.body.data === "string" ? JSON.parse(request.body.data) : void 0;
  if (!data || typeof data !== "object" || !("id" in data) || typeof data.id !== "string") {
    throw new AuthError("Invalid WebAuthn Authentication response");
  }
  const credentialID = toBase64(fromBase64(data.id));
  const authenticator = await adapter.getAuthenticator(credentialID);
  if (!authenticator) {
    throw new AuthError(`WebAuthn authenticator not found in database: ${JSON.stringify({
      credentialID
    })}`);
  }
  const { challenge: expectedChallenge } = await webauthnChallenge.use(options2, request.cookies, resCookies);
  let verification;
  try {
    const relayingParty = provider.getRelayingParty(options2, request);
    verification = await provider.simpleWebAuthn.verifyAuthenticationResponse({
      ...provider.verifyAuthenticationOptions,
      expectedChallenge,
      response: data,
      authenticator: fromAdapterAuthenticator(authenticator),
      expectedOrigin: relayingParty.origin,
      expectedRPID: relayingParty.id
    });
  } catch (e3) {
    throw new WebAuthnVerificationError(e3);
  }
  const { verified, authenticationInfo } = verification;
  if (!verified) {
    throw new WebAuthnVerificationError("WebAuthn authentication response could not be verified.");
  }
  try {
    const { newCounter } = authenticationInfo;
    await adapter.updateAuthenticatorCounter(authenticator.credentialID, newCounter);
  } catch (e3) {
    throw new AdapterError(`Failed to update authenticator counter. This may cause future authentication attempts to fail. ${JSON.stringify({
      credentialID,
      oldCounter: authenticator.counter,
      newCounter: authenticationInfo.newCounter
    })}`, e3);
  }
  const account = await adapter.getAccount(authenticator.providerAccountId, provider.id);
  if (!account) {
    throw new AuthError(`WebAuthn account not found in database: ${JSON.stringify({
      credentialID,
      providerAccountId: authenticator.providerAccountId
    })}`);
  }
  const user = await adapter.getUser(account.userId);
  if (!user) {
    throw new AuthError(`WebAuthn user not found in database: ${JSON.stringify({
      credentialID,
      providerAccountId: authenticator.providerAccountId,
      userID: account.userId
    })}`);
  }
  return {
    account,
    user
  };
}
__name(verifyAuthenticate, "verifyAuthenticate");
__name2(verifyAuthenticate, "verifyAuthenticate");
async function verifyRegister(options2, request, resCookies) {
  const { provider } = options2;
  const data = request.body && typeof request.body.data === "string" ? JSON.parse(request.body.data) : void 0;
  if (!data || typeof data !== "object" || !("id" in data) || typeof data.id !== "string") {
    throw new AuthError("Invalid WebAuthn Registration response");
  }
  const { challenge: expectedChallenge, registerData: user } = await webauthnChallenge.use(options2, request.cookies, resCookies);
  if (!user) {
    throw new AuthError("Missing user registration data in WebAuthn challenge cookie");
  }
  let verification;
  try {
    const relayingParty = provider.getRelayingParty(options2, request);
    verification = await provider.simpleWebAuthn.verifyRegistrationResponse({
      ...provider.verifyRegistrationOptions,
      expectedChallenge,
      response: data,
      expectedOrigin: relayingParty.origin,
      expectedRPID: relayingParty.id
    });
  } catch (e3) {
    throw new WebAuthnVerificationError(e3);
  }
  if (!verification.verified || !verification.registrationInfo) {
    throw new WebAuthnVerificationError("WebAuthn registration response could not be verified");
  }
  const account = {
    providerAccountId: toBase64(verification.registrationInfo.credentialID),
    provider: options2.provider.id,
    type: provider.type
  };
  const authenticator = {
    providerAccountId: account.providerAccountId,
    counter: verification.registrationInfo.counter,
    credentialID: toBase64(verification.registrationInfo.credentialID),
    credentialPublicKey: toBase64(verification.registrationInfo.credentialPublicKey),
    credentialBackedUp: verification.registrationInfo.credentialBackedUp,
    credentialDeviceType: verification.registrationInfo.credentialDeviceType,
    transports: transportsToString(data.response.transports)
  };
  return {
    user,
    account,
    authenticator
  };
}
__name(verifyRegister, "verifyRegister");
__name2(verifyRegister, "verifyRegister");
async function getAuthenticationOptions(options2, request, user) {
  const { provider, adapter } = options2;
  const authenticators = user && user["id"] ? await adapter.listAuthenticatorsByUserId(user.id) : null;
  const relayingParty = provider.getRelayingParty(options2, request);
  return await provider.simpleWebAuthn.generateAuthenticationOptions({
    ...provider.authenticationOptions,
    rpID: relayingParty.id,
    allowCredentials: authenticators?.map((a3) => ({
      id: fromBase64(a3.credentialID),
      type: "public-key",
      transports: stringToTransports(a3.transports)
    }))
  });
}
__name(getAuthenticationOptions, "getAuthenticationOptions");
__name2(getAuthenticationOptions, "getAuthenticationOptions");
async function getRegistrationOptions(options2, request, user) {
  const { provider, adapter } = options2;
  const authenticators = user["id"] ? await adapter.listAuthenticatorsByUserId(user.id) : null;
  const userID = randomString(32);
  const relayingParty = provider.getRelayingParty(options2, request);
  return await provider.simpleWebAuthn.generateRegistrationOptions({
    ...provider.registrationOptions,
    userID,
    userName: user.email,
    userDisplayName: user.name ?? void 0,
    rpID: relayingParty.id,
    rpName: relayingParty.name,
    excludeCredentials: authenticators?.map((a3) => ({
      id: fromBase64(a3.credentialID),
      type: "public-key",
      transports: stringToTransports(a3.transports)
    }))
  });
}
__name(getRegistrationOptions, "getRegistrationOptions");
__name2(getRegistrationOptions, "getRegistrationOptions");
function assertInternalOptionsWebAuthn(options2) {
  const { provider, adapter } = options2;
  if (!adapter)
    throw new MissingAdapter("An adapter is required for the WebAuthn provider");
  if (!provider || provider.type !== "webauthn") {
    throw new InvalidProvider("Provider must be WebAuthn");
  }
  return { ...options2, provider, adapter };
}
__name(assertInternalOptionsWebAuthn, "assertInternalOptionsWebAuthn");
__name2(assertInternalOptionsWebAuthn, "assertInternalOptionsWebAuthn");
function fromAdapterAuthenticator(authenticator) {
  return {
    ...authenticator,
    credentialDeviceType: authenticator.credentialDeviceType,
    transports: stringToTransports(authenticator.transports),
    credentialID: fromBase64(authenticator.credentialID),
    credentialPublicKey: fromBase64(authenticator.credentialPublicKey)
  };
}
__name(fromAdapterAuthenticator, "fromAdapterAuthenticator");
__name2(fromAdapterAuthenticator, "fromAdapterAuthenticator");
function fromBase64(base642) {
  return new Uint8Array(Buffer.from(base642, "base64"));
}
__name(fromBase64, "fromBase64");
__name2(fromBase64, "fromBase64");
function toBase64(bytes) {
  return Buffer.from(bytes).toString("base64");
}
__name(toBase64, "toBase64");
__name2(toBase64, "toBase64");
function transportsToString(transports) {
  return transports?.join(",");
}
__name(transportsToString, "transportsToString");
__name2(transportsToString, "transportsToString");
function stringToTransports(tstring) {
  return tstring ? tstring.split(",") : void 0;
}
__name(stringToTransports, "stringToTransports");
__name2(stringToTransports, "stringToTransports");
var init_webauthn_utils = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/webauthn-utils.js"() {
    init_errors();
    init_checks();
    init_web2();
  }
});
async function callback(request, options2, sessionStore, cookies) {
  if (!options2.provider)
    throw new InvalidProvider("Callback route called without provider");
  const { query, body, method, headers } = request;
  const { provider, adapter, url, callbackUrl, pages, jwt: jwt2, events, callbacks, session: { strategy: sessionStrategy, maxAge: sessionMaxAge }, logger: logger2 } = options2;
  const useJwtSession = sessionStrategy === "jwt";
  try {
    if (provider.type === "oauth" || provider.type === "oidc") {
      const { proxyRedirect, randomState } = handleState(query, provider, options2.isOnRedirectProxy);
      if (proxyRedirect) {
        logger2.debug("proxy redirect", { proxyRedirect, randomState });
        return { redirect: proxyRedirect };
      }
      const authorizationResult = await handleOAuth(query, request.cookies, options2, randomState);
      if (authorizationResult.cookies.length) {
        cookies.push(...authorizationResult.cookies);
      }
      logger2.debug("authorization result", authorizationResult);
      const { user: userFromProvider, account, profile: OAuthProfile } = authorizationResult;
      if (!userFromProvider || !account || !OAuthProfile) {
        return { redirect: `${url}/signin`, cookies };
      }
      let userByAccount;
      if (adapter) {
        const { getUserByAccount } = adapter;
        userByAccount = await getUserByAccount({
          providerAccountId: account.providerAccountId,
          provider: provider.id
        });
      }
      const redirect2 = await handleAuthorized({
        user: userByAccount ?? userFromProvider,
        account,
        profile: OAuthProfile
      }, options2);
      if (redirect2)
        return { redirect: redirect2, cookies };
      const { user, session: session2, isNewUser } = await handleLoginOrRegister(sessionStore.value, userFromProvider, account, options2);
      if (useJwtSession) {
        const defaultToken = {
          name: user.name,
          email: user.email,
          picture: user.image,
          sub: user.id?.toString()
        };
        const token = await callbacks.jwt({
          token: defaultToken,
          user,
          account,
          profile: OAuthProfile,
          isNewUser,
          trigger: isNewUser ? "signUp" : "signIn"
        });
        if (token === null) {
          cookies.push(...sessionStore.clean());
        } else {
          const salt = options2.cookies.sessionToken.name;
          const newToken = await jwt2.encode({ ...jwt2, token, salt });
          const cookieExpires = /* @__PURE__ */ new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
          const sessionCookies = sessionStore.chunk(newToken, {
            expires: cookieExpires
          });
          cookies.push(...sessionCookies);
        }
      } else {
        cookies.push({
          name: options2.cookies.sessionToken.name,
          value: session2.sessionToken,
          options: {
            ...options2.cookies.sessionToken.options,
            expires: session2.expires
          }
        });
      }
      await events.signIn?.({
        user,
        account,
        profile: OAuthProfile,
        isNewUser
      });
      if (isNewUser && pages.newUser) {
        return {
          redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl })}`,
          cookies
        };
      }
      return { redirect: callbackUrl, cookies };
    } else if (provider.type === "email") {
      const token = query?.token;
      const identifier = query?.email;
      if (!token || !identifier) {
        const e3 = new TypeError("Missing token or email. The sign-in URL was manually opened without token/identifier or the link was not sent correctly in the email.", { cause: { hasToken: !!token, hasEmail: !!identifier } });
        e3.name = "Configuration";
        throw e3;
      }
      const secret = provider.secret ?? options2.secret;
      const invite = await adapter.useVerificationToken({
        identifier,
        token: await createHash(`${token}${secret}`)
      });
      const hasInvite = !!invite;
      const expired = invite ? invite.expires.valueOf() < Date.now() : void 0;
      const invalidInvite = !hasInvite || expired;
      if (invalidInvite)
        throw new Verification({ hasInvite, expired });
      const user = await adapter.getUserByEmail(identifier) ?? {
        id: crypto.randomUUID(),
        email: identifier,
        emailVerified: null
      };
      const account = {
        providerAccountId: user.email,
        userId: user.id,
        type: "email",
        provider: provider.id
      };
      const redirect2 = await handleAuthorized({ user, account }, options2);
      if (redirect2)
        return { redirect: redirect2, cookies };
      const { user: loggedInUser, session: session2, isNewUser } = await handleLoginOrRegister(sessionStore.value, user, account, options2);
      if (useJwtSession) {
        const defaultToken = {
          name: loggedInUser.name,
          email: loggedInUser.email,
          picture: loggedInUser.image,
          sub: loggedInUser.id?.toString()
        };
        const token2 = await callbacks.jwt({
          token: defaultToken,
          user: loggedInUser,
          account,
          isNewUser,
          trigger: isNewUser ? "signUp" : "signIn"
        });
        if (token2 === null) {
          cookies.push(...sessionStore.clean());
        } else {
          const salt = options2.cookies.sessionToken.name;
          const newToken = await jwt2.encode({ ...jwt2, token: token2, salt });
          const cookieExpires = /* @__PURE__ */ new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
          const sessionCookies = sessionStore.chunk(newToken, {
            expires: cookieExpires
          });
          cookies.push(...sessionCookies);
        }
      } else {
        cookies.push({
          name: options2.cookies.sessionToken.name,
          value: session2.sessionToken,
          options: {
            ...options2.cookies.sessionToken.options,
            expires: session2.expires
          }
        });
      }
      await events.signIn?.({ user: loggedInUser, account, isNewUser });
      if (isNewUser && pages.newUser) {
        return {
          redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl })}`,
          cookies
        };
      }
      return { redirect: callbackUrl, cookies };
    } else if (provider.type === "credentials" && method === "POST") {
      const credentials = body ?? {};
      Object.entries(query ?? {}).forEach(([k3, v3]) => url.searchParams.set(k3, v3));
      const userFromAuthorize = await provider.authorize(
        credentials,
        // prettier-ignore
        new Request(url, { headers, method, body: JSON.stringify(body) })
      );
      const user = userFromAuthorize;
      if (!user)
        throw new CredentialsSignin();
      else
        user.id = user.id?.toString() ?? crypto.randomUUID();
      const account = {
        providerAccountId: user.id,
        type: "credentials",
        provider: provider.id
      };
      const redirect2 = await handleAuthorized({ user, account, credentials }, options2);
      if (redirect2)
        return { redirect: redirect2, cookies };
      const defaultToken = {
        name: user.name,
        email: user.email,
        picture: user.image,
        sub: user.id
      };
      const token = await callbacks.jwt({
        token: defaultToken,
        user,
        account,
        isNewUser: false,
        trigger: "signIn"
      });
      if (token === null) {
        cookies.push(...sessionStore.clean());
      } else {
        const salt = options2.cookies.sessionToken.name;
        const newToken = await jwt2.encode({ ...jwt2, token, salt });
        const cookieExpires = /* @__PURE__ */ new Date();
        cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
        const sessionCookies = sessionStore.chunk(newToken, {
          expires: cookieExpires
        });
        cookies.push(...sessionCookies);
      }
      await events.signIn?.({ user, account });
      return { redirect: callbackUrl, cookies };
    } else if (provider.type === "webauthn" && method === "POST") {
      const action = request.body?.action;
      if (typeof action !== "string" || action !== "authenticate" && action !== "register") {
        throw new AuthError("Invalid action parameter");
      }
      const localOptions = assertInternalOptionsWebAuthn(options2);
      let user;
      let account;
      let authenticator;
      switch (action) {
        case "authenticate": {
          const verified = await verifyAuthenticate(localOptions, request, cookies);
          user = verified.user;
          account = verified.account;
          break;
        }
        case "register": {
          const verified = await verifyRegister(options2, request, cookies);
          user = verified.user;
          account = verified.account;
          authenticator = verified.authenticator;
          break;
        }
      }
      await handleAuthorized({ user, account }, options2);
      const { user: loggedInUser, isNewUser, session: session2, account: currentAccount } = await handleLoginOrRegister(sessionStore.value, user, account, options2);
      if (!currentAccount) {
        throw new AuthError("Error creating or finding account");
      }
      if (authenticator && loggedInUser.id) {
        await localOptions.adapter.createAuthenticator({ ...authenticator, userId: loggedInUser.id });
      }
      if (useJwtSession) {
        const defaultToken = {
          name: loggedInUser.name,
          email: loggedInUser.email,
          picture: loggedInUser.image,
          sub: loggedInUser.id?.toString()
        };
        const token = await callbacks.jwt({
          token: defaultToken,
          user: loggedInUser,
          account: currentAccount,
          isNewUser,
          trigger: isNewUser ? "signUp" : "signIn"
        });
        if (token === null) {
          cookies.push(...sessionStore.clean());
        } else {
          const salt = options2.cookies.sessionToken.name;
          const newToken = await jwt2.encode({ ...jwt2, token, salt });
          const cookieExpires = /* @__PURE__ */ new Date();
          cookieExpires.setTime(cookieExpires.getTime() + sessionMaxAge * 1e3);
          const sessionCookies = sessionStore.chunk(newToken, {
            expires: cookieExpires
          });
          cookies.push(...sessionCookies);
        }
      } else {
        cookies.push({
          name: options2.cookies.sessionToken.name,
          value: session2.sessionToken,
          options: {
            ...options2.cookies.sessionToken.options,
            expires: session2.expires
          }
        });
      }
      await events.signIn?.({ user: loggedInUser, account: currentAccount, isNewUser });
      if (isNewUser && pages.newUser) {
        return {
          redirect: `${pages.newUser}${pages.newUser.includes("?") ? "&" : "?"}${new URLSearchParams({ callbackUrl })}`,
          cookies
        };
      }
      return { redirect: callbackUrl, cookies };
    }
    throw new InvalidProvider(`Callback for provider type (${provider.type}) is not supported`);
  } catch (e3) {
    if (e3 instanceof AuthError)
      throw e3;
    const error2 = new CallbackRouteError(e3, { provider: provider.id });
    logger2.debug("callback route error details", { method, query, body });
    throw error2;
  }
}
__name(callback, "callback");
__name2(callback, "callback");
async function handleAuthorized(params, config) {
  let authorized;
  const { signIn: signIn3, redirect: redirect2 } = config.callbacks;
  try {
    authorized = await signIn3(params);
  } catch (e3) {
    if (e3 instanceof AuthError)
      throw e3;
    throw new AccessDenied(e3);
  }
  if (!authorized)
    throw new AccessDenied("AccessDenied");
  if (typeof authorized !== "string")
    return;
  return await redirect2({ url: authorized, baseUrl: config.url.origin });
}
__name(handleAuthorized, "handleAuthorized");
__name2(handleAuthorized, "handleAuthorized");
var init_callback2 = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/callback/index.js"() {
    init_errors();
    init_handle_login();
    init_callback();
    init_checks();
    init_web2();
    init_webauthn_utils();
  }
});
async function session(options2, sessionStore, cookies, isUpdate, newSession) {
  const { adapter, jwt: jwt2, events, callbacks, logger: logger2, session: { strategy: sessionStrategy, maxAge: sessionMaxAge } } = options2;
  const response = {
    body: null,
    headers: { "Content-Type": "application/json" },
    cookies
  };
  const sessionToken = sessionStore.value;
  if (!sessionToken)
    return response;
  if (sessionStrategy === "jwt") {
    try {
      const salt = options2.cookies.sessionToken.name;
      const payload = await jwt2.decode({ ...jwt2, token: sessionToken, salt });
      if (!payload)
        throw new Error("Invalid JWT");
      const token = await callbacks.jwt({
        token: payload,
        ...isUpdate && { trigger: "update" },
        session: newSession
      });
      const newExpires = fromDate(sessionMaxAge);
      if (token !== null) {
        const session2 = {
          user: { name: token.name, email: token.email, image: token.picture },
          expires: newExpires.toISOString()
        };
        const newSession2 = await callbacks.session({ session: session2, token });
        response.body = newSession2;
        const newToken = await jwt2.encode({ ...jwt2, token, salt });
        const sessionCookies = sessionStore.chunk(newToken, {
          expires: newExpires
        });
        response.cookies?.push(...sessionCookies);
        await events.session?.({ session: newSession2, token });
      } else {
        response.cookies?.push(...sessionStore.clean());
      }
    } catch (e3) {
      logger2.error(new JWTSessionError(e3));
      response.cookies?.push(...sessionStore.clean());
    }
    return response;
  }
  try {
    const { getSessionAndUser, deleteSession, updateSession } = adapter;
    let userAndSession = await getSessionAndUser(sessionToken);
    if (userAndSession && userAndSession.session.expires.valueOf() < Date.now()) {
      await deleteSession(sessionToken);
      userAndSession = null;
    }
    if (userAndSession) {
      const { user, session: session2 } = userAndSession;
      const sessionUpdateAge = options2.session.updateAge;
      const sessionIsDueToBeUpdatedDate = session2.expires.valueOf() - sessionMaxAge * 1e3 + sessionUpdateAge * 1e3;
      const newExpires = fromDate(sessionMaxAge);
      if (sessionIsDueToBeUpdatedDate <= Date.now()) {
        await updateSession({
          sessionToken,
          expires: newExpires
        });
      }
      const sessionPayload = await callbacks.session({
        // TODO: user already passed below,
        // remove from session object in https://github.com/nextauthjs/next-auth/pull/9702
        // @ts-expect-error
        session: { ...session2, user },
        user,
        newSession,
        ...isUpdate ? { trigger: "update" } : {}
      });
      response.body = sessionPayload;
      response.cookies?.push({
        name: options2.cookies.sessionToken.name,
        value: sessionToken,
        options: {
          ...options2.cookies.sessionToken.options,
          expires: newExpires
        }
      });
      await events.session?.({ session: sessionPayload });
    } else if (sessionToken) {
      response.cookies?.push(...sessionStore.clean());
    }
  } catch (e3) {
    logger2.error(new SessionTokenError(e3));
  }
  return response;
}
__name(session, "session");
__name2(session, "session");
var init_session = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/session.js"() {
    init_errors();
    init_date();
  }
});
async function getAuthorizationUrl(query, options2) {
  const { logger: logger2, provider } = options2;
  let url = provider.authorization?.url;
  let as;
  if (!url || url.host === "authjs.dev") {
    const issuer = new URL(provider.issuer);
    const discoveryResponse = await discoveryRequest(issuer);
    const as2 = await processDiscoveryResponse(issuer, discoveryResponse);
    if (!as2.authorization_endpoint) {
      throw new TypeError("Authorization server did not provide an authorization endpoint.");
    }
    url = new URL(as2.authorization_endpoint);
  }
  const authParams = url.searchParams;
  let redirect_uri = provider.callbackUrl;
  let data;
  if (!options2.isOnRedirectProxy && provider.redirectProxyUrl) {
    redirect_uri = provider.redirectProxyUrl;
    data = { origin: provider.callbackUrl };
    logger2.debug("using redirect proxy", { redirect_uri, data });
  }
  const params = Object.assign({
    response_type: "code",
    // clientId can technically be undefined, should we check this in assert.ts or rely on the Authorization Server to do it?
    client_id: provider.clientId,
    redirect_uri,
    // @ts-expect-error TODO:
    ...provider.authorization?.params
  }, Object.fromEntries(provider.authorization?.url.searchParams ?? []), query);
  for (const k3 in params)
    authParams.set(k3, params[k3]);
  const cookies = [];
  const state2 = await state.create(options2, data);
  if (state2) {
    authParams.set("state", state2.value);
    cookies.push(state2.cookie);
  }
  if (provider.checks?.includes("pkce")) {
    if (as && !as.code_challenge_methods_supported?.includes("S256")) {
      if (provider.type === "oidc")
        provider.checks = ["nonce"];
    } else {
      const { value, cookie } = await pkce.create(options2);
      authParams.set("code_challenge", value);
      authParams.set("code_challenge_method", "S256");
      cookies.push(cookie);
    }
  }
  const nonce2 = await nonce.create(options2);
  if (nonce2) {
    authParams.set("nonce", nonce2.value);
    cookies.push(nonce2.cookie);
  }
  if (provider.type === "oidc" && !url.searchParams.has("scope")) {
    url.searchParams.set("scope", "openid profile email");
  }
  logger2.debug("authorization url is ready", { url, cookies, provider });
  return { redirect: url.toString(), cookies };
}
__name(getAuthorizationUrl, "getAuthorizationUrl");
__name2(getAuthorizationUrl, "getAuthorizationUrl");
var init_authorization_url = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/signin/authorization-url.js"() {
    init_checks();
    init_build();
  }
});
async function sendToken(request, options2) {
  const { body } = request;
  const { provider, callbacks, adapter } = options2;
  const normalizer = provider.normalizeIdentifier ?? defaultNormalizer;
  const email = normalizer(body?.email);
  const defaultUser = { id: crypto.randomUUID(), email, emailVerified: null };
  const user = await adapter.getUserByEmail(email) ?? defaultUser;
  const account = {
    providerAccountId: email,
    userId: user.id,
    type: "email",
    provider: provider.id
  };
  let authorized;
  try {
    authorized = await callbacks.signIn({
      user,
      account,
      email: { verificationRequest: true }
    });
  } catch (e3) {
    throw new AccessDenied(e3);
  }
  if (!authorized)
    throw new AccessDenied("AccessDenied");
  if (typeof authorized === "string") {
    return {
      redirect: await callbacks.redirect({
        url: authorized,
        baseUrl: options2.url.origin
      })
    };
  }
  const { callbackUrl, theme } = options2;
  const token = await provider.generateVerificationToken?.() ?? randomString(32);
  const ONE_DAY_IN_SECONDS = 86400;
  const expires = new Date(Date.now() + (provider.maxAge ?? ONE_DAY_IN_SECONDS) * 1e3);
  const secret = provider.secret ?? options2.secret;
  const baseUrl = new URL(options2.basePath, options2.url.origin);
  const sendRequest = provider.sendVerificationRequest({
    identifier: email,
    token,
    expires,
    url: `${baseUrl}/callback/${provider.id}?${new URLSearchParams({
      callbackUrl,
      token,
      email
    })}`,
    provider,
    theme,
    request: toRequest(request)
  });
  const createToken = adapter.createVerificationToken?.({
    identifier: email,
    token: await createHash(`${token}${secret}`),
    expires
  });
  await Promise.all([sendRequest, createToken]);
  return {
    redirect: `${baseUrl}/verify-request?${new URLSearchParams({
      provider: provider.id,
      type: provider.type
    })}`
  };
}
__name(sendToken, "sendToken");
__name2(sendToken, "sendToken");
function defaultNormalizer(email) {
  if (!email)
    throw new Error("Missing email from request body.");
  let [local, domain] = email.toLowerCase().trim().split("@");
  domain = domain.split(",")[0];
  return `${local}@${domain}`;
}
__name(defaultNormalizer, "defaultNormalizer");
__name2(defaultNormalizer, "defaultNormalizer");
var init_send_token = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/signin/send-token.js"() {
    init_web2();
    init_errors();
  }
});
async function signIn(request, cookies, options2) {
  const signInUrl = `${options2.url.origin}${options2.basePath}/signin`;
  if (!options2.provider)
    return { redirect: signInUrl, cookies };
  switch (options2.provider.type) {
    case "oauth":
    case "oidc": {
      const { redirect: redirect2, cookies: authCookies } = await getAuthorizationUrl(request.query, options2);
      if (authCookies)
        cookies.push(...authCookies);
      return { redirect: redirect2, cookies };
    }
    case "email": {
      const response = await sendToken(request, options2);
      return { ...response, cookies };
    }
    default:
      return { redirect: signInUrl, cookies };
  }
}
__name(signIn, "signIn");
__name2(signIn, "signIn");
var init_signin2 = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/signin/index.js"() {
    init_authorization_url();
    init_send_token();
  }
});
async function signOut(cookies, sessionStore, options2) {
  const { jwt: jwt2, events, callbackUrl: redirect2, logger: logger2, session: session2 } = options2;
  const sessionToken = sessionStore.value;
  if (!sessionToken)
    return { redirect: redirect2, cookies };
  try {
    if (session2.strategy === "jwt") {
      const salt = options2.cookies.sessionToken.name;
      const token = await jwt2.decode({ ...jwt2, token: sessionToken, salt });
      await events.signOut?.({ token });
    } else {
      const session3 = await options2.adapter?.deleteSession(sessionToken);
      await events.signOut?.({ session: session3 });
    }
  } catch (e3) {
    logger2.error(new SignOutError(e3));
  }
  cookies.push(...sessionStore.clean());
  return { redirect: redirect2, cookies };
}
__name(signOut, "signOut");
__name2(signOut, "signOut");
var init_signout2 = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/signout.js"() {
    init_errors();
  }
});
async function getLoggedInUser(options2, sessionStore) {
  const { adapter, jwt: jwt2, session: { strategy: sessionStrategy } } = options2;
  const sessionToken = sessionStore.value;
  if (!sessionToken)
    return null;
  if (sessionStrategy === "jwt") {
    const salt = options2.cookies.sessionToken.name;
    const payload = await jwt2.decode({ ...jwt2, token: sessionToken, salt });
    if (payload && payload.sub) {
      return {
        id: payload.sub,
        name: payload.name,
        email: payload.email,
        image: payload.picture
      };
    }
  } else {
    const userAndSession = await adapter?.getSessionAndUser(sessionToken);
    if (userAndSession) {
      return userAndSession.user;
    }
  }
  return null;
}
__name(getLoggedInUser, "getLoggedInUser");
__name2(getLoggedInUser, "getLoggedInUser");
var init_session2 = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/session.js"() {
  }
});
async function webAuthnOptions(request, options2, sessionStore, cookies) {
  const narrowOptions = assertInternalOptionsWebAuthn(options2);
  const { provider } = narrowOptions;
  const { action } = request.query ?? {};
  if (action !== "register" && action !== "authenticate" && typeof action !== "undefined") {
    return {
      status: 400,
      body: { error: "Invalid action" },
      cookies,
      headers: {
        "Content-Type": "application/json"
      }
    };
  }
  const sessionUser = await getLoggedInUser(options2, sessionStore);
  const getUserInfoResponse = sessionUser ? {
    user: sessionUser,
    exists: true
  } : await provider.getUserInfo(options2, request);
  const userInfo = getUserInfoResponse?.user;
  const decision = inferWebAuthnOptions(action, !!sessionUser, getUserInfoResponse);
  switch (decision) {
    case "authenticate":
      return getAuthenticationResponse(narrowOptions, request, userInfo, cookies);
    case "register":
      if (typeof userInfo?.email === "string") {
        return getRegistrationResponse(narrowOptions, request, userInfo, cookies);
      }
    default:
      return {
        status: 400,
        body: { error: "Invalid request" },
        cookies,
        headers: {
          "Content-Type": "application/json"
        }
      };
  }
}
__name(webAuthnOptions, "webAuthnOptions");
__name2(webAuthnOptions, "webAuthnOptions");
var init_webauthn_options = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/webauthn-options.js"() {
    init_session2();
    init_webauthn_utils();
  }
});
var init_actions2 = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/actions/index.js"() {
    init_callback2();
    init_session();
    init_signin2();
    init_signout2();
    init_webauthn_options();
  }
});
async function AuthInternal(request, authOptions) {
  const { action, providerId, error: error2, method } = request;
  const csrfDisabled = authOptions.skipCSRFCheck === skipCSRFCheck;
  const { options: options2, cookies } = await init({
    authOptions,
    action,
    providerId,
    url: request.url,
    callbackUrl: request.body?.callbackUrl ?? request.query?.callbackUrl,
    csrfToken: request.body?.csrfToken,
    cookies: request.cookies,
    isPost: method === "POST",
    csrfDisabled
  });
  const sessionStore = new SessionStore(options2.cookies.sessionToken, request.cookies, options2.logger);
  if (method === "GET") {
    const render = renderPage({ ...options2, query: request.query, cookies });
    switch (action) {
      case "callback":
        return await callback(request, options2, sessionStore, cookies);
      case "csrf":
        return render.csrf(csrfDisabled, options2, cookies);
      case "error":
        return render.error(error2);
      case "providers":
        return render.providers(options2.providers);
      case "session":
        return await session(options2, sessionStore, cookies);
      case "signin":
        return render.signin(providerId, error2);
      case "signout":
        return render.signout();
      case "verify-request":
        return render.verifyRequest();
      case "webauthn-options":
        return await webAuthnOptions(request, options2, sessionStore, cookies);
      default:
    }
  } else {
    const { csrfTokenVerified } = options2;
    switch (action) {
      case "callback":
        if (options2.provider.type === "credentials")
          validateCSRF(action, csrfTokenVerified);
        return await callback(request, options2, sessionStore, cookies);
      case "session":
        validateCSRF(action, csrfTokenVerified);
        return await session(options2, sessionStore, cookies, true, request.body?.data);
      case "signin":
        validateCSRF(action, csrfTokenVerified);
        return await signIn(request, cookies, options2);
      case "signout":
        validateCSRF(action, csrfTokenVerified);
        return await signOut(cookies, sessionStore, options2);
      default:
    }
  }
  throw new UnknownAction(`Cannot handle action: ${action}`);
}
__name(AuthInternal, "AuthInternal");
__name2(AuthInternal, "AuthInternal");
var skipCSRFCheck;
var raw;
var init_lib = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/index.js"() {
    init_errors();
    init_cookie();
    init_init();
    init_pages();
    init_actions2();
    init_csrf_token();
    skipCSRFCheck = /* @__PURE__ */ Symbol("skip-csrf-check");
    raw = /* @__PURE__ */ Symbol("return-type-raw");
  }
});
function setEnvDefaults(envObject, config) {
  try {
    const url = envObject.AUTH_URL;
    if (url && !config.basePath)
      config.basePath = new URL(url).pathname;
  } catch {
  } finally {
    config.basePath ?? (config.basePath = `/auth`);
  }
  if (!config.secret?.length) {
    config.secret = [];
    const secret = envObject.AUTH_SECRET;
    if (secret)
      config.secret.push(secret);
    for (const i3 of [1, 2, 3]) {
      const secret2 = envObject[`AUTH_SECRET_${i3}`];
      if (secret2)
        config.secret.unshift(secret2);
    }
  }
  if (!config.secret?.length) {
    throw new MissingSecret("Missing secret, please set AUTH_SECRET or config.secret");
  }
  config.redirectProxyUrl ?? (config.redirectProxyUrl = envObject.AUTH_REDIRECT_PROXY_URL);
  config.trustHost ?? (config.trustHost = !!(envObject.AUTH_URL ?? envObject.AUTH_TRUST_HOST ?? envObject.VERCEL ?? envObject.CF_PAGES ?? envObject.NODE_ENV !== "production"));
  config.providers = config.providers.map((p3) => {
    const finalProvider = typeof p3 === "function" ? p3({}) : p3;
    const ID = finalProvider.id.toUpperCase();
    if (finalProvider.type === "oauth" || finalProvider.type === "oidc") {
      finalProvider.clientId ?? (finalProvider.clientId = envObject[`AUTH_${ID}_ID`]);
      finalProvider.clientSecret ?? (finalProvider.clientSecret = envObject[`AUTH_${ID}_SECRET`]);
      if (finalProvider.type === "oidc") {
        finalProvider.issuer ?? (finalProvider.issuer = envObject[`AUTH_${ID}_ISSUER`]);
      }
    } else if (finalProvider.type === "email") {
      finalProvider.apiKey ?? (finalProvider.apiKey = envObject[`AUTH_${ID}_KEY`]);
    }
    return finalProvider;
  });
}
__name(setEnvDefaults, "setEnvDefaults");
__name2(setEnvDefaults, "setEnvDefaults");
function createActionURL(action, protocol, headers, envObject, basePath) {
  let envUrl = envObject.AUTH_URL ?? envObject.NEXTAUTH_URL;
  let url;
  if (envUrl) {
    url = new URL(envUrl);
    if (basePath && basePath !== "/" && url.pathname !== "/") {
      logger.warn(url.pathname === basePath ? "env-url-basepath-redundant" : "env-url-basepath-mismatch");
      url.pathname = "/";
    }
  } else {
    const detectedHost = headers.get("x-forwarded-host") ?? headers.get("host");
    const detectedProtocol = headers.get("x-forwarded-proto") ?? protocol ?? "https";
    const _protocol = detectedProtocol.endsWith(":") ? detectedProtocol : detectedProtocol + ":";
    url = new URL(`${_protocol}//${detectedHost}`);
  }
  const sanitizedUrl = url.toString().replace(/\/$/, "");
  if (basePath) {
    const sanitizedBasePath = basePath?.replace(/(^\/|\/$)/g, "") ?? "";
    return new URL(`${sanitizedUrl}/${sanitizedBasePath}/${action}`);
  }
  return new URL(`${sanitizedUrl}/${action}`);
}
__name(createActionURL, "createActionURL");
__name2(createActionURL, "createActionURL");
var init_env = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/lib/utils/env.js"() {
    init_errors();
    init_logger();
  }
});
async function Auth(request, config) {
  setLogger(config.logger, config.debug);
  const internalRequest = await toInternalRequest(request, config);
  if (!internalRequest)
    return Response.json(`Bad request.`, { status: 400 });
  const warningsOrError = assertConfig(internalRequest, config);
  if (Array.isArray(warningsOrError)) {
    warningsOrError.forEach(logger.warn);
  } else if (warningsOrError) {
    logger.error(warningsOrError);
    const htmlPages = /* @__PURE__ */ new Set([
      "signin",
      "signout",
      "error",
      "verify-request"
    ]);
    if (!htmlPages.has(internalRequest.action) || internalRequest.method !== "GET") {
      const message2 = "There was a problem with the server configuration. Check the server logs for more information.";
      return Response.json({ message: message2 }, { status: 500 });
    }
    const { pages, theme } = config;
    const authOnErrorPage = pages?.error && internalRequest.url.searchParams.get("callbackUrl")?.startsWith(pages.error);
    if (!pages?.error || authOnErrorPage) {
      if (authOnErrorPage) {
        logger.error(new ErrorPageLoop(`The error page ${pages?.error} should not require authentication`));
      }
      const page2 = renderPage({ theme }).error("Configuration");
      return toResponse(page2);
    }
    return Response.redirect(`${pages.error}?error=Configuration`);
  }
  const isRedirect = request.headers?.has("X-Auth-Return-Redirect");
  const isRaw = config.raw === raw;
  try {
    const internalResponse = await AuthInternal(internalRequest, config);
    if (isRaw)
      return internalResponse;
    const response = toResponse(internalResponse);
    const url = response.headers.get("Location");
    if (!isRedirect || !url)
      return response;
    return Response.json({ url }, { headers: response.headers });
  } catch (e3) {
    const error2 = e3;
    logger.error(error2);
    const isAuthError = error2 instanceof AuthError;
    if (isAuthError && isRaw && !isRedirect)
      throw error2;
    if (request.method === "POST" && internalRequest.action === "session")
      return Response.json(null, { status: 400 });
    const isClientSafeErrorType = isClientError(error2);
    const type = isClientSafeErrorType ? error2.type : "Configuration";
    const params = new URLSearchParams({ error: type });
    if (error2 instanceof CredentialsSignin)
      params.set("code", error2.code);
    const pageKind = isAuthError && error2.kind || "error";
    const pagePath = config.pages?.[pageKind] ?? `${config.basePath}/${pageKind.toLowerCase()}`;
    const url = `${internalRequest.url.origin}${pagePath}?${params}`;
    if (isRedirect)
      return Response.json({ url });
    return Response.redirect(url);
  }
}
__name(Auth, "Auth");
__name2(Auth, "Auth");
var init_core = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/index.js"() {
    init_assert();
    init_errors();
    init_lib();
    init_env();
    init_pages();
    init_logger();
    init_web2();
    init_actions();
  }
});
function Strava(options2) {
  return {
    id: "strava",
    name: "Strava",
    type: "oauth",
    authorization: {
      url: "https://www.strava.com/api/v3/oauth/authorize",
      params: {
        scope: "read",
        approval_prompt: "auto",
        response_type: "code"
      }
    },
    token: {
      url: "https://www.strava.com/api/v3/oauth/token"
    },
    userinfo: "https://www.strava.com/api/v3/athlete",
    client: {
      token_endpoint_auth_method: "client_secret_post"
    },
    profile(profile) {
      return {
        id: profile.id,
        name: `${profile.firstname} ${profile.lastname}`,
        email: null,
        image: profile.profile
      };
    },
    options: options2
  };
}
__name(Strava, "Strava");
__name2(Strava, "Strava");
var init_strava = __esm({
  "node_modules/.pnpm/@auth+core@0.28.2/node_modules/@auth/core/providers/strava.js"() {
  }
});
var hooks_server_exports = {};
__export(hooks_server_exports, {
  handle: /* @__PURE__ */ __name2(() => handle, "handle")
});
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve: resolve2 }) => resolve2(event);
  return ({ event, resolve: resolve2 }) => {
    return apply_handle(0, event, {});
    function apply_handle(i3, event2, parent_options) {
      const handle2 = handlers[i3];
      return handle2({
        event: event2,
        resolve: /* @__PURE__ */ __name2((event3, options2) => {
          const transformPageChunk = /* @__PURE__ */ __name2(async ({ html, done }) => {
            if (options2?.transformPageChunk) {
              html = await options2.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          }, "transformPageChunk");
          const filterSerializedResponseHeaders = parent_options?.filterSerializedResponseHeaders ?? options2?.filterSerializedResponseHeaders;
          const preload = parent_options?.preload ?? options2?.preload;
          return i3 < length - 1 ? apply_handle(i3 + 1, event3, {
            transformPageChunk,
            filterSerializedResponseHeaders,
            preload
          }) : resolve2(event3, { transformPageChunk, filterSerializedResponseHeaders, preload });
        }, "resolve")
      });
    }
    __name(apply_handle, "apply_handle");
    __name2(apply_handle, "apply_handle");
  };
}
__name(sequence, "sequence");
__name2(sequence, "sequence");
function setEnvDefaults2(envObject, config) {
  if (building)
    return;
  setEnvDefaults(envObject, config);
  config.trustHost ??= dev;
  config.basePath = `${base}/auth`;
}
__name(setEnvDefaults2, "setEnvDefaults2");
__name2(setEnvDefaults2, "setEnvDefaults2");
async function signIn$1(provider, options2 = {}, authorizationParams, config, event) {
  const { request, url: { protocol } } = event;
  const headers = new Headers(request.headers);
  const { redirect: shouldRedirect = true, redirectTo, ...rest } = options2 instanceof FormData ? Object.fromEntries(options2) : options2;
  const callbackUrl = redirectTo?.toString() ?? headers.get("Referer") ?? "/";
  const base2 = createActionURL("signin", protocol, headers, private_env, config.basePath);
  if (!provider) {
    const url2 = `${base2}?${new URLSearchParams({ callbackUrl })}`;
    if (shouldRedirect)
      redirect(302, url2);
    return url2;
  }
  let url = `${base2}/${provider}?${new URLSearchParams(authorizationParams)}`;
  let foundProvider = void 0;
  for (const _provider of config.providers) {
    const { id } = typeof _provider === "function" ? _provider() : _provider;
    if (id === provider) {
      foundProvider = id;
      break;
    }
  }
  if (!foundProvider) {
    const url2 = `${base2}?${new URLSearchParams({ callbackUrl })}`;
    if (shouldRedirect)
      redirect(302, url2);
    return url2;
  }
  if (foundProvider === "credentials") {
    url = url.replace("signin", "callback");
  }
  headers.set("Content-Type", "application/x-www-form-urlencoded");
  const body = new URLSearchParams({ ...rest, callbackUrl });
  const req = new Request(url, { method: "POST", headers, body });
  const res = await Auth(req, { ...config, raw, skipCSRFCheck });
  for (const c4 of res?.cookies ?? []) {
    event.cookies.set(c4.name, c4.value, { path: "/", ...c4.options });
  }
  if (shouldRedirect) {
    return redirect(302, res.redirect);
  }
  return res.redirect;
}
__name(signIn$1, "signIn$1");
__name2(signIn$1, "signIn$1");
async function signOut$1(options2, config, event) {
  const { request, url: { protocol } } = event;
  const headers = new Headers(request.headers);
  headers.set("Content-Type", "application/x-www-form-urlencoded");
  const url = createActionURL("signout", protocol, headers, private_env, config.basePath);
  const callbackUrl = options2?.redirectTo ?? headers.get("Referer") ?? "/";
  const body = new URLSearchParams({ callbackUrl });
  const req = new Request(url, { method: "POST", headers, body });
  const res = await Auth(req, { ...config, raw, skipCSRFCheck });
  for (const c4 of res?.cookies ?? [])
    event.cookies.set(c4.name, c4.value, { path: "/", ...c4.options });
  if (options2?.redirect ?? true)
    return redirect(302, res.redirect);
  return res;
}
__name(signOut$1, "signOut$1");
__name2(signOut$1, "signOut$1");
async function auth(event, config) {
  setEnvDefaults2(private_env, config);
  config.trustHost ??= true;
  const { request: req, url: { protocol } } = event;
  const sessionUrl = createActionURL("session", protocol, req.headers, private_env, config.basePath);
  const request = new Request(sessionUrl, {
    headers: { cookie: req.headers.get("cookie") ?? "" }
  });
  const response = await Auth(request, config);
  const authCookies = parse_1(response.headers.getSetCookie());
  for (const cookie of authCookies) {
    const { name, value, ...options2 } = cookie;
    event.cookies.set(name, value, { path: "/", ...options2 });
  }
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}
__name(auth, "auth");
__name2(auth, "auth");
function SvelteKitAuth(config) {
  return {
    signIn: /* @__PURE__ */ __name2(async (event) => {
      const { request } = event;
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults2(private_env, _config);
      const formData = await request.formData();
      const { providerId: provider, ...options2 } = Object.fromEntries(formData);
      let authorizationParams = {};
      let _options = {};
      for (const key2 in options2) {
        if (key2.startsWith(authorizationParamsPrefix)) {
          authorizationParams[key2.slice(authorizationParamsPrefix.length)] = options2[key2];
        } else {
          _options[key2] = options2[key2];
        }
      }
      await signIn$1(provider, _options, authorizationParams, _config, event);
    }, "signIn"),
    signOut: /* @__PURE__ */ __name2(async (event) => {
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults2(private_env, _config);
      const options2 = Object.fromEntries(await event.request.formData());
      await signOut$1(options2, _config, event);
    }, "signOut"),
    async handle({ event, resolve: resolve2 }) {
      const _config = typeof config === "object" ? config : await config(event);
      setEnvDefaults2(private_env, _config);
      const { url, request } = event;
      event.locals.auth ??= () => auth(event, _config);
      event.locals.getSession ??= event.locals.auth;
      const action = url.pathname.slice(
        // @ts-expect-error - basePath is defined in setEnvDefaults
        _config.basePath.length + 1
      ).split("/")[0];
      if (isAuthAction(action) && url.pathname.startsWith(_config.basePath + "/")) {
        return Auth(request, _config);
      }
      return resolve2(event);
    }
  };
}
__name(SvelteKitAuth, "SvelteKitAuth");
__name2(SvelteKitAuth, "SvelteKitAuth");
var dev;
var authorizationParamsPrefix;
var PUBLIC_STRAVA_ID;
var STRAVA_SECRET;
var AUTH_SECRET;
var handle$1;
var signIn2;
var signOut2;
var contentSecurityPolicy;
var securityHeaders;
var handle;
var init_hooks_server = __esm({
  ".svelte-kit/output/server/chunks/hooks.server.js"() {
    init_internal();
    init_core();
    init_set_cookie();
    init_errors();
    init_strava();
    dev = BROWSER;
    authorizationParamsPrefix = "authorizationParams-";
    PUBLIC_STRAVA_ID = "dummy";
    STRAVA_SECRET = "dummy";
    AUTH_SECRET = "dummy";
    ({ handle: handle$1, signIn: signIn2, signOut: signOut2 } = SvelteKitAuth({
      providers: [
        Strava({
          clientId: PUBLIC_STRAVA_ID,
          clientSecret: STRAVA_SECRET,
          authorization: { params: { scope: "read,activity:read,activity:read_all" } }
        })
      ],
      callbacks: {
        async jwt({ token, account }) {
          if (account) {
            token.accessToken = account.access_token;
          }
          return token;
        },
        async session({ session: session2, token, user }) {
          session2.access_token = token.accessToken;
          return session2;
        }
      },
      basePath: "/auth",
      secret: AUTH_SECRET
    }));
    contentSecurityPolicy = [
      "default-src 'self' blob: data: https://*.basemaps.cartocdn.com",
      "font-src 'self'",
      "img-src 'self' https://*.basemaps.cartocdn.com data: blob:",
      "object-src 'none'",
      "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com blob: data:",
      "style-src 'self' 'unsafe-inline'"
    ].join("; ");
    securityHeaders = /* @__PURE__ */ __name2(async ({ event, resolve: resolve2 }) => {
      const response = await resolve2(event);
      const securedResponse = new Response(response.body, response);
      securedResponse.headers.set("X-Content-Type-Options", "nosniff");
      securedResponse.headers.set("X-Frame-Options", "DENY");
      securedResponse.headers.set("Content-Security-Policy", contentSecurityPolicy);
      return securedResponse;
    }, "securityHeaders");
    handle = sequence(securityHeaders, handle$1);
  }
});
function reset2() {
  base = initial.base;
  assets = initial.assets;
}
__name(reset2, "reset2");
__name2(reset2, "reset2");
function set_private_env(environment) {
  private_env = environment;
}
__name(set_private_env, "set_private_env");
__name2(set_private_env, "set_private_env");
function set_public_env(environment) {
  public_env = environment;
}
__name(set_public_env, "set_public_env");
__name2(set_public_env, "set_public_env");
function get_hooks() {
  return Promise.resolve().then(() => (init_hooks_server(), hooks_server_exports));
}
__name(get_hooks, "get_hooks");
__name2(get_hooks, "get_hooks");
var base;
var assets;
var initial;
var private_env;
var public_env;
var building;
var Root;
var options;
var init_internal = __esm({
  ".svelte-kit/output/server/chunks/internal.js"() {
    init_ssr();
    init_ssr2();
    base = "";
    assets = base;
    initial = { base, assets };
    private_env = {};
    public_env = {};
    building = false;
    Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { stores } = $$props;
      let { page: page2 } = $$props;
      let { constructors } = $$props;
      let { components = [] } = $$props;
      let { form } = $$props;
      let { data_0 = null } = $$props;
      let { data_1 = null } = $$props;
      {
        setContext("__svelte__", stores);
      }
      afterUpdate(stores.page.notify);
      if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
        $$bindings.stores(stores);
      if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
        $$bindings.page(page2);
      if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
        $$bindings.constructors(constructors);
      if ($$props.components === void 0 && $$bindings.components && components !== void 0)
        $$bindings.components(components);
      if ($$props.form === void 0 && $$bindings.form && form !== void 0)
        $$bindings.form(form);
      if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
        $$bindings.data_0(data_0);
      if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
        $$bindings.data_1(data_1);
      let $$settled;
      let $$rendered;
      let previous_head = $$result.head;
      do {
        $$settled = true;
        $$result.head = previous_head;
        {
          stores.page.set(page2);
        }
        $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
          $$result,
          { data: data_0, this: components[0] },
          {
            this: /* @__PURE__ */ __name2(($$value) => {
              components[0] = $$value;
              $$settled = false;
            }, "this")
          },
          {
            default: /* @__PURE__ */ __name2(() => {
              return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
                $$result,
                { data: data_1, form, this: components[1] },
                {
                  this: /* @__PURE__ */ __name2(($$value) => {
                    components[1] = $$value;
                    $$settled = false;
                  }, "this")
                },
                {}
              )}`;
            }, "default")
          }
        )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
          $$result,
          { data: data_0, form, this: components[0] },
          {
            this: /* @__PURE__ */ __name2(($$value) => {
              components[0] = $$value;
              $$settled = false;
            }, "this")
          },
          {}
        )}`} ${``}`;
      } while (!$$settled);
      return $$rendered;
    });
    options = {
      app_template_contains_nonce: false,
      csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
      csrf_check_origin: true,
      track_server_fetches: false,
      embedded: false,
      env_public_prefix: "PUBLIC_",
      env_private_prefix: "",
      hooks: null,
      // added lazily, via `get_hooks`
      preload_strategy: "modulepreload",
      root: Root,
      service_worker: false,
      templates: {
        app: /* @__PURE__ */ __name2(({ head, body, assets: assets2, nonce: nonce2, env }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />\n		' + head + '\n	</head>\n	<style type="text/css">\n		html,\n		body {\n			margin: 0;\n			padding: 0;\n			width: 100vw;\n			height: 100vh;\n			/* mobile viewport bug fix */\n			min-height: -webkit-fill-available;\n		}\n\n		html {\n			overflow-y: hidden !important;\n			height: -webkit-fill-available;\n		}\n	</style>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents; width: 100vw; height: 100vh">' + body + "</div>\n	</body>\n</html>\n", "app"),
        error: /* @__PURE__ */ __name2(({ status, message: message2 }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message2 + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message2 + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n", "error")
      },
      version_hash: "30z5"
    };
  }
});
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
__name(readable, "readable");
__name2(readable, "readable");
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i3 = 0; i3 < subscriber_queue.length; i3 += 2) {
            subscriber_queue[i3][0](subscriber_queue[i3 + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  __name(set, "set");
  __name2(set, "set");
  function update(fn) {
    set(fn(value));
  }
  __name(update, "update");
  __name2(update, "update");
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set, update) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  __name(subscribe2, "subscribe2");
  __name2(subscribe2, "subscribe2");
  return { set, update, subscribe: subscribe2 };
}
__name(writable, "writable");
__name2(writable, "writable");
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  if (!stores_array.every(Boolean)) {
    throw new Error("derived() expects stores as input, got a falsy value");
  }
  const auto = fn.length < 2;
  return readable(initial_value, (set, update) => {
    let started = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = /* @__PURE__ */ __name2(() => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set, update);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    }, "sync");
    const unsubscribers = stores_array.map(
      (store, i3) => subscribe(
        store,
        (value) => {
          values[i3] = value;
          pending &= ~(1 << i3);
          if (started) {
            sync();
          }
        },
        () => {
          pending |= 1 << i3;
        }
      )
    );
    started = true;
    sync();
    return /* @__PURE__ */ __name2(/* @__PURE__ */ __name(function stop() {
      run_all(unsubscribers);
      cleanup();
      started = false;
    }, "stop"), "stop");
  });
}
__name(derived, "derived");
__name2(derived, "derived");
var subscriber_queue;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    init_ssr();
    subscriber_queue = [];
  }
});
var layout_ts_exports = {};
var init_layout_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.ts.js"() {
  }
});
var layout_server_ts_exports = {};
__export(layout_server_ts_exports, {
  load: /* @__PURE__ */ __name2(() => load, "load")
});
var load;
var init_layout_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.server.ts.js"() {
    load = /* @__PURE__ */ __name2(async (event) => {
      return {
        session: await event.locals.auth()
      };
    }, "load");
  }
});
function withoutTransition(action) {
  if (typeof document === "undefined")
    return;
  clearTimeout(timeoutAction);
  clearTimeout(timeoutEnable);
  const style = document.createElement("style");
  const css2 = document.createTextNode(`* {
     -webkit-transition: none !important;
     -moz-transition: none !important;
     -o-transition: none !important;
     -ms-transition: none !important;
     transition: none !important;
  }`);
  style.appendChild(css2);
  const disable = /* @__PURE__ */ __name2(() => document.head.appendChild(style), "disable");
  const enable = /* @__PURE__ */ __name2(() => document.head.removeChild(style), "enable");
  if (typeof window.getComputedStyle !== "undefined") {
    disable();
    action();
    window.getComputedStyle(style).opacity;
    enable();
    return;
  }
  if (typeof window.requestAnimationFrame !== "undefined") {
    disable();
    action();
    window.requestAnimationFrame(enable);
    return;
  }
  disable();
  timeoutAction = window.setTimeout(() => {
    action();
    timeoutEnable = window.setTimeout(enable, 120);
  }, 120);
}
__name(withoutTransition, "withoutTransition");
__name2(withoutTransition, "withoutTransition");
function createUserPrefersMode() {
  const defaultValue = "system";
  const storage = isBrowser ? localStorage : noopStorage;
  const initialValue = storage.getItem(localStorageKey);
  let value = isValidMode(initialValue) ? initialValue : defaultValue;
  const { subscribe: subscribe2, set: _set } = writable(value, () => {
    if (!isBrowser)
      return;
    const handler = /* @__PURE__ */ __name2((e3) => {
      if (e3.key !== localStorageKey)
        return;
      const newValue = e3.newValue;
      if (isValidMode(newValue)) {
        _set(value = newValue);
      } else {
        _set(value = defaultValue);
      }
    }, "handler");
    addEventListener("storage", handler);
    return () => removeEventListener("storage", handler);
  });
  function set(v3) {
    _set(value = v3);
    storage.setItem(localStorageKey, value);
  }
  __name(set, "set");
  __name2(set, "set");
  return {
    subscribe: subscribe2,
    set
  };
}
__name(createUserPrefersMode, "createUserPrefersMode");
__name2(createUserPrefersMode, "createUserPrefersMode");
function createSystemMode() {
  const defaultValue = void 0;
  let track = true;
  const { subscribe: subscribe2, set } = writable(defaultValue, () => {
    if (!isBrowser)
      return;
    const handler = /* @__PURE__ */ __name2((e3) => {
      if (!track)
        return;
      set(e3.matches ? "light" : "dark");
    }, "handler");
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    mediaQueryState.addEventListener("change", handler);
    return () => mediaQueryState.removeEventListener("change", handler);
  });
  function query() {
    if (!isBrowser)
      return;
    const mediaQueryState = window.matchMedia("(prefers-color-scheme: light)");
    set(mediaQueryState.matches ? "light" : "dark");
  }
  __name(query, "query");
  __name2(query, "query");
  function tracking(active) {
    track = active;
  }
  __name(tracking, "tracking");
  __name2(tracking, "tracking");
  return {
    subscribe: subscribe2,
    query,
    tracking
  };
}
__name(createSystemMode, "createSystemMode");
__name2(createSystemMode, "createSystemMode");
function createDerivedMode() {
  const { subscribe: subscribe2 } = derived([userPrefersMode, systemPrefersMode, themeColors, disableTransitions], ([$userPrefersMode, $systemPrefersMode, $themeColors, $disableTransitions]) => {
    if (!isBrowser)
      return void 0;
    const derivedMode2 = $userPrefersMode === "system" ? $systemPrefersMode : $userPrefersMode;
    function update() {
      const htmlEl = document.documentElement;
      const themeColorEl = document.querySelector('meta[name="theme-color"]');
      if (derivedMode2 === "light") {
        htmlEl.classList.remove("dark");
        htmlEl.style.colorScheme = "light";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.light);
        }
      } else {
        htmlEl.classList.add("dark");
        htmlEl.style.colorScheme = "dark";
        if (themeColorEl && $themeColors) {
          themeColorEl.setAttribute("content", $themeColors.dark);
        }
      }
    }
    __name(update, "update");
    __name2(update, "update");
    if ($disableTransitions) {
      withoutTransition(update);
    } else {
      update();
    }
    return derivedMode2;
  });
  return {
    subscribe: subscribe2
  };
}
__name(createDerivedMode, "createDerivedMode");
__name2(createDerivedMode, "createDerivedMode");
function isValidMode(value) {
  if (typeof value !== "string")
    return false;
  return modes.includes(value);
}
__name(isValidMode, "isValidMode");
__name2(isValidMode, "isValidMode");
var timeoutAction;
var timeoutEnable;
var noopStorage;
var isBrowser;
var modes;
var localStorageKey;
var userPrefersMode;
var systemPrefersMode;
var themeColors;
var disableTransitions;
var derivedMode;
var durationUnitRegex;
var range;
var css;
var SyncLoader;
var WordmarkLogo;
var Loading;
var init_Loading = __esm({
  ".svelte-kit/output/server/chunks/Loading.js"() {
    init_chunks();
    init_ssr();
    noopStorage = {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getItem: /* @__PURE__ */ __name2((_key) => null, "getItem"),
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      setItem: /* @__PURE__ */ __name2((_key, _value) => {
      }, "setItem")
    };
    isBrowser = typeof document !== "undefined";
    modes = ["dark", "light", "system"];
    localStorageKey = "mode-watcher-mode";
    userPrefersMode = createUserPrefersMode();
    systemPrefersMode = createSystemMode();
    themeColors = writable(void 0);
    disableTransitions = writable(true);
    derivedMode = createDerivedMode();
    durationUnitRegex = /[a-zA-Z]/;
    range = /* @__PURE__ */ __name2((size, startAt = 0) => [...Array(size).keys()].map((i3) => i3 + startAt), "range");
    css = {
      code: ".wrapper.svelte-kks203{height:var(--size);width:var(--size);display:flex;align-items:center;justify-content:center}.dot.svelte-kks203{height:var(--dotSize);width:var(--dotSize);background-color:var(--color);margin:2px;display:inline-block;border-radius:100%;animation:svelte-kks203-sync var(--duration) ease-in-out infinite alternate both running}.pause-animation.svelte-kks203{animation-play-state:paused}@keyframes svelte-kks203-sync{33%{transform:translateY(10px)}66%{transform:translateY(-10px)}100%{transform:translateY(0)}}",
      map: null
    };
    SyncLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { color = "#FF3E00" } = $$props;
      let { unit = "px" } = $$props;
      let { duration = "0.6s" } = $$props;
      let { size = "60" } = $$props;
      let { pause = false } = $$props;
      let durationUnit = duration.match(durationUnitRegex)?.[0] ?? "s";
      let durationNum = duration.replace(durationUnitRegex, "");
      if ($$props.color === void 0 && $$bindings.color && color !== void 0)
        $$bindings.color(color);
      if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
        $$bindings.unit(unit);
      if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
        $$bindings.duration(duration);
      if ($$props.size === void 0 && $$bindings.size && size !== void 0)
        $$bindings.size(size);
      if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
        $$bindings.pause(pause);
      $$result.css.add(css);
      return `<div class="wrapper svelte-kks203" style="${"--size:" + escape(size, true) + escape(unit, true) + "; --duration: " + escape(duration, true) + ";"}">${each(range(3, 1), (i3) => {
        return `<div class="${["dot svelte-kks203", pause ? "pause-animation" : ""].join(" ").trim()}" style="${"--dotSize:" + escape(+size * 0.25, true) + escape(unit, true) + "; --color:" + escape(color, true) + "; animation-delay: " + escape(i3 * (+durationNum / 10), true) + escape(durationUnit, true) + ";"}"></div>`;
      })} </div>`;
    });
    WordmarkLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<svg class="text-[#313c47]" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 150 150" enable-background="new 0 0 150 150" xml:space="preserve"><defs><path id="topPath" d="M 75, 75 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " transform="rotate(0, 75, 75)"></path><path id="bottomPath" d="M 75, 75 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " transform="scale(1.15, -1.15) translate (-10, -141) rotate(0, 75, 75)"></path></defs><g><use xlink:href="#bottomPath" fill="none"></use><use xlink:href="#bottomPath" fill="none"></use><text fill="currentColor" text-anchor="middle"><textPath class="tracking-wide" xlink:href="#topPath" startOffset="25%">ACTIVITY HEATMAP</textPath></text><text fill="currentColor" text-anchor="middle"><textPath class="tracking-widest" xlink:href="#bottomPath" startOffset="25%">FOR STRAVA</textPath></text></g></svg> <svg class="-mt-[250px]" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" width="200px" height="200px" viewBox="0 0 1350 1350"><path d="M651.2 421.7 464.8 791.4l-39.4 79.2-.6 2.4 73.7-.2 73.7-.3 51.4-98.4 51.7-98.8c.2-.2 23.6 44.1 52 98.4l51.5 98.8 74.2.3 74.2.2-.6-2.3c-1.1-4.6-249.5-495.2-250.8-495.5-.8-.1-9.7 16.7-24.6 46.5" fill="#2c343c"></path><path d="m671.4 7.5-1.4 4-2.4 6.8a6003 6003 0 0 0-25 67.7L618 152.5a2038 2038 0 0 0-15.4 42.2l-.7 2.2-4.7.6a534 534 0 0 0-63 15.7 343 343 0 0 0-41.4 14.4 268 268 0 0 0-28.9 12.7 531 531 0 0 0-42.4 23.2 487 487 0 0 0-63.1 46l-13.7 12.9A517 517 0 0 0 287 387a584 584 0 0 0-25.3 38.4c-8.6 11.4-30.3 56.4-38.7 80.1-1.5 4.4-3.5 9.6-4.4 11.6s-1.7 4.7-2 6-1.8 6.7-3.4 11.9a380 380 0 0 0-10.2 39l-2.4 13.3-1.3 6.9 2.9-.6c1.6-.3 6.3-2 10.4-3.6s8.1-3 8.8-3 5-1.6 9.6-3.5 9-3.5 9.5-3.5c1 0 6.3-2 15-5.5a367 367 0 0 0 22.5-8l14.1-5.1c1-.4 2.4-3.4 3.7-7.7 22.6-79.3 87.7-164.8 161-211.5l14-9c3.7-2.3 7-4.2 7.5-4.2s2-.8 3.5-1.9 6.3-3.6 10.7-5.8a375 375 0 0 1 94-34.1A368 368 0 0 1 612 282l19.5-2.7c6-.8 18.5-1.9 27.7-2.3s17-1 17.3-1.2.2-61.6-.2-136.2L675.7 4h-1.4c-.8 0-2 1.6-2.9 3.5m85 194.7c.3 1.6 2 6.3 3.6 10.4s3 8.1 3 8.8 1.6 5 3.5 9.6 3.5 9 3.5 9.5c0 1 2 6.3 5.5 15a367 367 0 0 0 8 22.5l5.1 14.1c.5 1.5 5.1 3.4 10.7 4.4 1 .3 5.3 1.8 9.4 3.5s8 3 8.7 3 3 1 5.1 2 6.3 3 9.2 4a475 475 0 0 1 47.3 24l9.5 6a156 156 0 0 1 20.5 14 428 428 0 0 1 100.2 106l7.4 12c1.6 2.4 3.6 5.8 4.4 7.5l6.8 12.4c2.9 5.2 5.2 9.8 5.2 10.4s1.3 3.5 3 6.6a254 254 0 0 1 11.5 27.6c1.8 5 4 10.7 5 12.8s1.3 3.7 1 3.7.7 3.3 2 7.3a459 459 0 0 1 12.4 52.7l2.7 19.5c.8 6 1.9 18.5 2.3 27.7s1 17 1.2 17.3 61.4.2 135.7-.2l135.3-.6-.3-1.6c-.3-1.5-5.7-3.8-23.3-10l-35.3-13-27.8-10.1a269 269 0 0 0-17.9-6.9L1213 624l-24.5-9c-36.6-13-36-12.8-36.9-18.2a593 593 0 0 0-24.5-91.8c-18.5-51.9-57-115.6-92.1-152.5l-12.3-13A550 550 0 0 0 963 287a584 584 0 0 0-38.4-25.3c-11.4-8.6-56.4-30.3-80.1-38.7-4.4-1.5-9.6-3.5-11.6-4.4s-4.7-1.7-6-2-6.7-1.8-11.9-3.4a380 380 0 0 0-39-10.2l-13.3-2.4-6.9-1.3zM98.7 673.8l-94.8.2.3 1.7c.2 1 2.1 2.4 4.3 3.2l10 3.7L86 707.5l66.5 24.5a2038 2038 0 0 0 42.2 15.4l2.2.7.6 4.7a552 552 0 0 0 15.7 63 343 343 0 0 0 14.4 41.4 268 268 0 0 0 12.7 28.9 531 531 0 0 0 23.2 42.4 487 487 0 0 0 46 63.1l12.9 13.7A517 517 0 0 0 387 1063a584 584 0 0 0 38.4 25.3c11.4 8.6 56.4 30.3 80.1 38.7 4.4 1.5 9.6 3.5 11.6 4.4s4.7 1.7 6 2 6.7 1.8 11.9 3.4a380 380 0 0 0 39 10.2l13.3 2.4 6.9 1.3-.6-2.9c-.3-1.6-2-6.3-3.6-10.4s-3-8.1-3-8.8-1.6-5-3.5-9.6-3.5-9-3.5-9.5c0-1-2-6.3-5.5-15a367 367 0 0 0-8-22.5l-5.1-14.1c-.5-1.5-5.1-3.4-10.7-4.5-1-.2-5.3-1.7-9.4-3.4s-8-3-8.7-3-3-1-5.1-2-6.3-3-9.2-4a475 475 0 0 1-47.3-24c-.3-.3-4.5-3-9.5-6s-10.1-6.2-11.5-7.4-5.4-4.2-9-6.6a428 428 0 0 1-95-98 451 451 0 0 1-29.6-51.3 46 46 0 0 0-3-6.7C294.7 804.7 277 731 277 688.4c0-5-.3-10.6-.6-12.3l-.6-3.1-41.2.2zm1042.4 85-11 3.8c-2.5.8-7.9 2.7-12 4.4s-8 3-8.6 3.1c-.9 0-6.2 2-14.9 5.5a367 367 0 0 0-22.5 8l-14.1 5.1c-1.5.5-3.4 5.1-4.5 10.7-.2 1-1.7 5.3-3.4 9.4s-3 8-3 8.7-1 3-2 5.1-3 6.3-4 9.2a475 475 0 0 1-24 47.3l-6 9.5a156 156 0 0 1-14 20.5 428 428 0 0 1-106 100.2l-12 7.4a75 75 0 0 1-7.5 4.4l-12.4 6.8c-5.2 2.9-9.8 5.2-10.4 5.2s-3.5 1.3-6.6 3a254 254 0 0 1-27.6 11.5c-5 1.8-10.7 4-12.7 5s-3.8 1.3-3.8 1-3.3.7-7.2 2c-9.8 3.4-42.3 11-52.8 12.4l-19.5 2.7c-6 .8-18.5 1.9-27.7 2.3s-17 1-17.3 1.2-.2 61.4.2 135.7l.6 135.3 1.6-.3c1.5-.3 3.8-5.7 10-23.3l13-35.3 10.1-27.8a269 269 0 0 0 6.9-17.9l10-27.6 9-24.5a733 733 0 0 1 12.9-34.3l1-1.9 6.3-1a505 505 0 0 0 60.6-14.5 343 343 0 0 0 41.4-14.4 268 268 0 0 0 28.9-12.7 531 531 0 0 0 42.4-23.2c28.4-15.7 72.7-52.4 102.1-84.6 15.6-17.1 15.2-16.5 29-34.9a480 480 0 0 0 58.3-100l5.6-13a553 553 0 0 0 24.5-84l2.5-12.8c.6-1.8-2.2-1.4-9.5 1.4" fill="#242c34"></path></svg>`;
    });
    Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<div class="absolute w-screen h-screen top-0 left-0 z-50 flex flex-col items-center justify-center bg-background overflow-x-hidden">${validate_component(WordmarkLogo, "WordmarkLogo").$$render($$result, {}, {}, {})} <div class="mt-[75px] flex flex-col items-center text-muted-foreground">${validate_component(SyncLoader, "SyncLoader").$$render(
        $$result,
        {
          size: "60",
          color: "#313c47",
          unit: "px",
          duration: "1s"
        },
        {},
        {}
      )} <h2 class="py-4 mx-4" data-svelte-h="svelte-1nwapev">The\xA0page\xA0is\xA0now\xA0loading. This\xA0shouldn&#39;t\xA0take\xA0long.</h2> <h3 data-svelte-h="svelte-1b5xtjs">Experiencing\xA0issues?</h3> <h3 data-svelte-h="svelte-hfq9ex">Report\xA0them\xA0on\xA0<a href="https://github.com/sudolev/StravaMultiMapper" target="_blank" rel="noopener noreferrer">GitHub</a>\xA0or\xA0<a href="https://discord.gg/5P3AYFrwQG" target="_blank" rel="noopener noreferrer">Discord</a>.</h3></div></div>`;
    });
  }
});
var getStores;
var page;
var navigating;
var init_stores = __esm({
  ".svelte-kit/output/server/chunks/stores.js"() {
    init_ssr();
    getStores = /* @__PURE__ */ __name2(() => {
      const stores = getContext("__svelte__");
      return {
        /** @type {typeof page} */
        page: {
          subscribe: stores.page.subscribe
        },
        /** @type {typeof navigating} */
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        /** @type {typeof updated} */
        updated: stores.updated
      };
    }, "getStores");
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    navigating = {
      subscribe(fn) {
        const store = getStores().navigating;
        return store.subscribe(fn);
      }
    };
  }
});
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: /* @__PURE__ */ __name2(() => Layout, "default")
});
function setInitialMode(defaultMode, themeColors2) {
  const rootEl = document.documentElement;
  const mode = localStorage.getItem("mode-watcher-mode") || defaultMode;
  const light = mode === "light" || mode === "system" && window.matchMedia("(prefers-color-scheme: light)").matches;
  rootEl.classList[light ? "remove" : "add"]("dark");
  rootEl.style.colorScheme = light ? "light" : "dark";
  if (themeColors2) {
    const themeMetaEl = document.querySelector('meta[name="theme-color"]');
    if (themeMetaEl) {
      themeMetaEl.setAttribute("content", mode === "light" ? themeColors2.light : themeColors2.dark);
    }
  }
  localStorage.setItem("mode-watcher-mode", mode);
}
__name(setInitialMode, "setInitialMode");
__name2(setInitialMode, "setInitialMode");
var Mode_watcher;
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_layout.svelte.js"() {
    init_ssr();
    init_Loading();
    init_stores();
    Mode_watcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { track = true } = $$props;
      let { defaultMode = "system" } = $$props;
      let { themeColors: themeColors$1 = void 0 } = $$props;
      let { disableTransitions: disableTransitions$1 = true } = $$props;
      themeColors.set(themeColors$1);
      disableTransitions.set(disableTransitions$1);
      const args = `"${defaultMode}"${themeColors$1 ? `, ${JSON.stringify(themeColors$1)}` : ""}`;
      if ($$props.track === void 0 && $$bindings.track && track !== void 0)
        $$bindings.track(track);
      if ($$props.defaultMode === void 0 && $$bindings.defaultMode && defaultMode !== void 0)
        $$bindings.defaultMode(defaultMode);
      if ($$props.themeColors === void 0 && $$bindings.themeColors && themeColors$1 !== void 0)
        $$bindings.themeColors(themeColors$1);
      if ($$props.disableTransitions === void 0 && $$bindings.disableTransitions && disableTransitions$1 !== void 0)
        $$bindings.disableTransitions(disableTransitions$1);
      return `${$$result.head += `<!-- HEAD_svelte-cpyj77_START -->${themeColors$1 ? `   <meta name="theme-color"${add_attribute("content", themeColors$1.dark, 0)}>` : ``}<!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(` + setInitialMode.toString() + `)(` + args + `);<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-cpyj77_END -->`, ""}`;
    });
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $navigating, $$unsubscribe_navigating;
      $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
      $$unsubscribe_navigating();
      return `${validate_component(Mode_watcher, "ModeWatcher").$$render(
        $$result,
        {
          themeColors: { dark: "black", light: "white" }
        },
        {},
        {}
      )} ${$navigating ? `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {})}` : ``} ${slots.default ? slots.default({}) : ``}`;
    });
  }
});
var __exports = {};
__export(__exports, {
  component: /* @__PURE__ */ __name2(() => component, "component"),
  fonts: /* @__PURE__ */ __name2(() => fonts, "fonts"),
  imports: /* @__PURE__ */ __name2(() => imports, "imports"),
  index: /* @__PURE__ */ __name2(() => index, "index"),
  server: /* @__PURE__ */ __name2(() => layout_server_ts_exports, "server"),
  server_id: /* @__PURE__ */ __name2(() => server_id, "server_id"),
  stylesheets: /* @__PURE__ */ __name2(() => stylesheets, "stylesheets"),
  universal: /* @__PURE__ */ __name2(() => layout_ts_exports, "universal"),
  universal_id: /* @__PURE__ */ __name2(() => universal_id, "universal_id")
});
var index;
var component_cache;
var component;
var universal_id;
var server_id;
var imports;
var stylesheets;
var fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    init_layout_ts();
    init_layout_server_ts();
    index = 0;
    component = /* @__PURE__ */ __name2(async () => component_cache ??= (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default, "component");
    universal_id = "src/routes/+layout.ts";
    server_id = "src/routes/+layout.server.ts";
    imports = ["_app/immutable/nodes/0.2c0a836f.js", "_app/immutable/chunks/scheduler.12a40e31.js", "_app/immutable/chunks/index.95fd5629.js", "_app/immutable/chunks/Loading.6b617603.js", "_app/immutable/chunks/singletons.df650f58.js", "_app/immutable/chunks/stores.4419ef84.js"];
    stylesheets = ["_app/immutable/assets/0.bfbd0d30.css", "_app/immutable/assets/Loading.02b33ba8.css"];
    fonts = [];
  }
});
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: /* @__PURE__ */ __name2(() => Error2, "default")
});
var Error2;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_ssr();
    init_stores();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
    });
  }
});
var __exports2 = {};
__export(__exports2, {
  component: /* @__PURE__ */ __name2(() => component2, "component"),
  fonts: /* @__PURE__ */ __name2(() => fonts2, "fonts"),
  imports: /* @__PURE__ */ __name2(() => imports2, "imports"),
  index: /* @__PURE__ */ __name2(() => index2, "index"),
  stylesheets: /* @__PURE__ */ __name2(() => stylesheets2, "stylesheets")
});
var index2;
var component_cache2;
var component2;
var imports2;
var stylesheets2;
var fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = /* @__PURE__ */ __name2(async () => component_cache2 ??= (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default, "component2");
    imports2 = ["_app/immutable/nodes/1.4252fa5c.js", "_app/immutable/chunks/scheduler.12a40e31.js", "_app/immutable/chunks/index.95fd5629.js", "_app/immutable/chunks/stores.4419ef84.js", "_app/immutable/chunks/singletons.df650f58.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});
init_set_cookie();
init_internal();
init_chunks();
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var ENDPOINT_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD"];
var PAGE_METHODS = ["GET", "POST", "HEAD"];
function negotiate(accept, types2) {
  const parts = [];
  accept.split(",").forEach((str, i3) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i: i3 });
    }
  });
  parts.sort((a3, b3) => {
    if (a3.q !== b3.q) {
      return b3.q - a3.q;
    }
    if (a3.subtype === "*" !== (b3.subtype === "*")) {
      return a3.subtype === "*" ? 1 : -1;
    }
    if (a3.type === "*" !== (b3.type === "*")) {
      return a3.type === "*" ? 1 : -1;
    }
    return a3.i - b3.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types2) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
__name(negotiate, "negotiate");
__name2(negotiate, "negotiate");
function is_content_type(request, ...types2) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types2.includes(type.toLowerCase());
}
__name(is_content_type, "is_content_type");
__name2(is_content_type, "is_content_type");
function is_form_content_type(request) {
  return is_content_type(
    request,
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
  );
}
__name(is_form_content_type, "is_form_content_type");
__name2(is_form_content_type, "is_form_content_type");
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  const values_needing_match = values.filter((value) => value !== void 0);
  let buffered = 0;
  for (let i3 = 0; i3 < params.length; i3 += 1) {
    const param = params[i3];
    let value = values[i3 - buffered];
    if (param.chained && param.rest && buffered) {
      value = values.slice(i3 - buffered, i3 + 1).filter((s22) => s22).join("/");
      buffered = 0;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i3 + 1];
      const next_value = values[i3 + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value && param.chained) {
        buffered = 0;
      }
      if (!next_param && !next_value && Object.keys(result).length === values_needing_match.length) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
__name(exec, "exec");
__name2(exec, "exec");
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
__name(coalesce_to_error, "coalesce_to_error");
__name2(coalesce_to_error, "coalesce_to_error");
function normalize_error(error2) {
  return (
    /** @type {import('../runtime/control.js').Redirect | import('../runtime/control.js').HttpError | Error} */
    error2
  );
}
__name(normalize_error, "normalize_error");
__name2(normalize_error, "normalize_error");
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
__name(method_not_allowed, "method_not_allowed");
__name2(method_not_allowed, "method_not_allowed");
function allowed_methods(mod) {
  const allowed = ENDPOINT_METHODS.filter((method) => method in mod);
  if ("GET" in mod || "HEAD" in mod)
    allowed.push("HEAD");
  return allowed;
}
__name(allowed_methods, "allowed_methods");
__name2(allowed_methods, "allowed_methods");
function static_error_page(options2, status, message2) {
  let page2 = options2.templates.error({ status, message: message2 });
  return text(page2, {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
__name(static_error_page, "static_error_page");
__name2(static_error_page, "static_error_page");
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
__name(handle_fatal_error, "handle_fatal_error");
__name2(handle_fatal_error, "handle_fatal_error");
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  }
  return await options2.hooks.handleError({ error: error2, event }) ?? {
    message: event.route.id === null && error2 instanceof NotFound ? "Not Found" : "Internal Error"
  };
}
__name(handle_error_and_jsonify, "handle_error_and_jsonify");
__name2(handle_error_and_jsonify, "handle_error_and_jsonify");
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
__name(redirect_response, "redirect_response");
__name2(redirect_response, "redirect_response");
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
__name(clarify_devalue_error, "clarify_devalue_error");
__name2(clarify_devalue_error, "clarify_devalue_error");
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push('"parent":1');
  if (node.uses?.route)
    uses.push('"route":1');
  if (node.uses?.url)
    uses.push('"url":1');
  return `"uses":{${uses.join(",")}}`;
}
__name(stringify_uses, "stringify_uses");
__name2(stringify_uses, "stringify_uses");
function warn_with_callsite(message2, offset = 0) {
  console.warn(message2);
}
__name(warn_with_callsite, "warn_with_callsite");
__name2(warn_with_callsite, "warn_with_callsite");
async function render_endpoint(event, mod, state2) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method] || mod.fallback;
  if (method === "HEAD" && mod.GET && !mod.HEAD) {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state2.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state2.prerendering && !prerender) {
    if (state2.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    let response = await handler(
      /** @type {import('@sveltejs/kit').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state2.prerendering) {
      response = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers)
      });
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return new Response(void 0, {
        status: e3.status,
        headers: { location: e3.location }
      });
    }
    throw e3;
  }
}
__name(render_endpoint, "render_endpoint");
__name2(render_endpoint, "render_endpoint");
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (ENDPOINT_METHODS.includes(method) && !PAGE_METHODS.includes(method)) {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
__name(is_endpoint_request, "is_endpoint_request");
__name2(is_endpoint_request, "is_endpoint_request");
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
__name(compact, "compact");
__name2(compact, "compact");
var SCHEME = /^[a-z][a-z\d+\-.]+:/i;
var absolute = /^([a-z]+:)?\/?\//;
function resolve(base2, path) {
  if (SCHEME.test(path))
    return path;
  if (path[0] === "#")
    return base2 + path;
  const base_match = absolute.exec(base2);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base2}"`);
  }
  const baseparts = path_match ? [] : base2.slice(base_match[0].length).split("/");
  const pathparts = path_match ? path.slice(path_match[0].length).split("/") : path.split("/");
  baseparts.pop();
  for (let i3 = 0; i3 < pathparts.length; i3 += 1) {
    const part = pathparts[i3];
    if (part === ".")
      continue;
    else if (part === "..")
      baseparts.pop();
    else
      baseparts.push(part);
  }
  const prefix = path_match && path_match[0] || base_match && base_match[0] || "";
  return `${prefix}${baseparts.join("/")}`;
}
__name(resolve, "resolve");
__name2(resolve, "resolve");
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
__name(normalize_path, "normalize_path");
__name2(normalize_path, "normalize_path");
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
__name(decode_pathname, "decode_pathname");
__name2(decode_pathname, "decode_pathname");
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
__name(decode_params, "decode_params");
__name2(decode_params, "decode_params");
var tracked_url_properties = (
  /** @type {const} */
  [
    "href",
    "pathname",
    "search",
    "searchParams",
    "toString",
    "toJSON"
  ]
);
function make_trackable(url, callback2) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    Object.defineProperty(tracked, property, {
      get() {
        callback2();
        return url[property];
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
__name(make_trackable, "make_trackable");
__name2(make_trackable, "make_trackable");
function disable_hash(url) {
  allow_nodejs_console_log(url);
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
__name(disable_hash, "disable_hash");
__name2(disable_hash, "disable_hash");
function disable_search(url) {
  allow_nodejs_console_log(url);
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
__name(disable_search, "disable_search");
__name2(disable_search, "disable_search");
function allow_nodejs_console_log(url) {
  {
    url[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(new URL(url), opts);
    };
  }
}
__name(allow_nodejs_console_log, "allow_nodejs_console_log");
__name2(allow_nodejs_console_log, "allow_nodejs_console_log");
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
__name(has_data_suffix, "has_data_suffix");
__name2(has_data_suffix, "has_data_suffix");
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
__name(add_data_suffix, "add_data_suffix");
__name2(add_data_suffix, "add_data_suffix");
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
__name(strip_data_suffix, "strip_data_suffix");
__name2(strip_data_suffix, "strip_data_suffix");
var escaped = {
  "<": "\\u003C",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  static {
    __name(this, "DevalueError");
  }
  static {
    __name2(this, "DevalueError");
  }
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message2, keys) {
    super(message2);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
__name(is_primitive, "is_primitive");
__name2(is_primitive, "is_primitive");
var object_proto_names = /* @__PURE__ */ Object.getOwnPropertyNames(
  Object.prototype
).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
__name(is_plain_object, "is_plain_object");
__name2(is_plain_object, "is_plain_object");
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
__name(get_type, "get_type");
__name2(get_type, "get_type");
function get_escaped_char(char) {
  switch (char) {
    case '"':
      return '\\"';
    case "<":
      return "\\u003C";
    case "\\":
      return "\\\\";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\b":
      return "\\b";
    case "\f":
      return "\\f";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return char < " " ? `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}` : "";
  }
}
__name(get_escaped_char, "get_escaped_char");
__name2(get_escaped_char, "get_escaped_char");
function stringify_string(str) {
  let result = "";
  let last_pos = 0;
  const len = str.length;
  for (let i3 = 0; i3 < len; i3 += 1) {
    const char = str[i3];
    const replacement = get_escaped_char(char);
    if (replacement) {
      result += str.slice(last_pos, i3) + replacement;
      last_pos = i3 + 1;
    }
  }
  return `"${last_pos === 0 ? str : result + str.slice(last_pos)}"`;
}
__name(stringify_string, "stringify_string");
__name2(stringify_string, "stringify_string");
var chars$1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i3) => {
            keys.push(`[${i3}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive$1(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  __name(walk, "walk");
  __name2(walk, "walk");
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a3, b3) => b3[1] - a3[1]).forEach((entry, i3) => {
    names.set(entry[0], get_name(i3));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive$1(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v3, i3) => i3 in thing ? stringify2(v3) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  __name(stringify2, "stringify2");
  __name2(stringify2, "stringify2");
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive$1(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v3, i3) => {
            statements.push(`${name}[${i3}]=${stringify2(v3)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v3) => `add(${stringify2(v3)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k3, v3]) => `set(${stringify2(k3)}, ${stringify2(v3)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
__name(uneval, "uneval");
__name2(uneval, "uneval");
function get_name(num) {
  let name = "";
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
__name(get_name, "get_name");
__name2(get_name, "get_name");
function escape_unsafe_char(c4) {
  return escaped[c4] || c4;
}
__name(escape_unsafe_char, "escape_unsafe_char");
__name2(escape_unsafe_char, "escape_unsafe_char");
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
__name(escape_unsafe_chars, "escape_unsafe_chars");
__name2(escape_unsafe_chars, "escape_unsafe_chars");
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
__name(safe_key, "safe_key");
__name2(safe_key, "safe_key");
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
__name(safe_prop, "safe_prop");
__name2(safe_prop, "safe_prop");
function stringify_primitive$1(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}
__name(stringify_primitive$1, "stringify_primitive$1");
__name2(stringify_primitive$1, "stringify_primitive$1");
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p3 = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index22 = p3++;
    indexes.set(thing, index22);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index22] = `["${key2}",${flatten(value2)}]`;
        return index22;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          const valid = !isNaN(thing.getDate());
          str = `["Date","${valid ? thing.toISOString() : ""}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i3 = 0; i3 < thing.length; i3 += 1) {
            if (i3 > 0)
              str += ",";
            if (i3 in thing) {
              keys.push(`[${i3}]`);
              str += flatten(thing[i3]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
            keys.pop();
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index22] = str;
    return index22;
  }
  __name(flatten, "flatten");
  __name2(flatten, "flatten");
  const index3 = flatten(value);
  if (index3 < 0)
    return `${index3}`;
  return `[${stringified.join(",")}]`;
}
__name(stringify, "stringify");
__name2(stringify, "stringify");
function stringify_primitive(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}
__name(stringify_primitive, "stringify_primitive");
__name2(stringify_primitive, "stringify_primitive");
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
__name(is_action_json_request, "is_action_json_request");
__name2(is_action_json_request, "is_action_json_request");
async function handle_action_json_request(event, options2, server2) {
  const actions2 = server2?.actions;
  if (!actions2) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions2);
  try {
    const data = await call_action(event, actions2);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return action_json_redirect(err);
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
__name(handle_action_json_request, "handle_action_json_request");
__name2(handle_action_json_request, "handle_action_json_request");
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error('Cannot "throw fail()". Use "return fail()"') : error2;
}
__name(check_incorrect_fail_use, "check_incorrect_fail_use");
__name2(check_incorrect_fail_use, "check_incorrect_fail_use");
function action_json_redirect(redirect2) {
  return action_json({
    type: "redirect",
    status: redirect2.status,
    location: redirect2.location
  });
}
__name(action_json_redirect, "action_json_redirect");
__name2(action_json_redirect, "action_json_redirect");
function action_json(data, init22) {
  return json(data, init22);
}
__name(action_json, "action_json");
__name2(action_json, "action_json");
function is_action_request(event) {
  return event.request.method === "POST";
}
__name(is_action_request, "is_action_request");
__name2(is_action_request, "is_action_request");
async function handle_action_request(event, server2) {
  const actions2 = server2?.actions;
  if (!actions2) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions2);
  try {
    const data = await call_action(event, actions2);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e3) {
    const err = normalize_error(e3);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
__name(handle_action_request, "handle_action_request");
__name2(handle_action_request, "handle_action_request");
function check_named_default_separate(actions2) {
  if (actions2.default && Object.keys(actions2).length > 1) {
    throw new Error(
      "When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions"
    );
  }
}
__name(check_named_default_separate, "check_named_default_separate");
__name2(check_named_default_separate, "check_named_default_separate");
async function call_action(event, actions2) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions2[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")})`
    );
  }
  return action(event);
}
__name(call_action, "call_action");
__name2(call_action, "call_action");
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
__name(uneval_action_response, "uneval_action_response");
__name2(uneval_action_response, "uneval_action_response");
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
__name(stringify_action_response, "stringify_action_response");
__name2(stringify_action_response, "stringify_action_response");
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e3) {
    const error2 = (
      /** @type {any} */
      e3
    );
    if ("path" in error2) {
      let message2 = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message2 += ` (data.${error2.path})`;
      throw new Error(message2);
    }
    throw error2;
  }
}
__name(try_deserialize, "try_deserialize");
__name2(try_deserialize, "try_deserialize");
async function unwrap_promises(object, id) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
__name(unwrap_promises, "unwrap_promises");
__name2(unwrap_promises, "unwrap_promises");
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var TRAILING_SLASH_PARAM = "x-sveltekit-trailing-slash";
async function load_server_data({
  event,
  state: state2,
  node,
  parent,
  // TODO 2.0: Remove this
  track_server_fetches
}) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state2.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: /* @__PURE__ */ __name2((info, init22) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      if (track_server_fetches) {
        uses.dependencies.add(url2.href);
      }
      return event.fetch(info, init22);
    }, "fetch"),
    /** @param {string[]} deps */
    depends: /* @__PURE__ */ __name2((...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    }, "depends"),
    params: new Proxy(event.params, {
      get: /* @__PURE__ */ __name2((target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }, "get")
    }),
    parent: /* @__PURE__ */ __name2(async () => {
      uses.parent = true;
      return parent();
    }, "parent"),
    route: new Proxy(event.route, {
      get: /* @__PURE__ */ __name2((target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }, "get")
    }),
    url
  });
  const data = result ? await unwrap_promises(result, node.server_id) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
__name(load_server_data, "load_server_data");
__name2(load_server_data, "load_server_data");
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state: state2,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state2, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: /* @__PURE__ */ __name2(() => {
    }, "depends"),
    parent
  });
  const data = result ? await unwrap_promises(result, node.universal_id) : null;
  return data;
}
__name(load_data, "load_data");
__name2(load_data, "load_data");
function b64_encode(buffer) {
  if (globalThis.Buffer) {
    return Buffer.from(buffer).toString("base64");
  }
  const little_endian = new Uint8Array(new Uint16Array([1]).buffer)[0] > 0;
  return btoa(
    new TextDecoder(little_endian ? "utf-16le" : "utf-16be").decode(
      new Uint16Array(new Uint8Array(buffer))
    )
  );
}
__name(b64_encode, "b64_encode");
__name2(b64_encode, "b64_encode");
function create_universal_fetch(event, state2, fetched, csr, resolve_opts) {
  const universal_fetch = /* @__PURE__ */ __name2(async (input, init22) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    const cloned_headers = input instanceof Request && [...input.headers].length ? new Headers(input.headers) : init22?.headers;
    let response = await event.fetch(input, init22);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state2.prerendering) {
        dependency = { response, body: null };
        state2.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init22?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function push_fetched(body, is_b64) {
          const status_number = Number(response2.status);
          if (isNaN(status_number)) {
            throw new Error(
              `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
            );
          }
          fetched.push({
            url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
            method: event.request.method,
            request_body: (
              /** @type {string | ArrayBufferView | undefined} */
              input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init22?.body
            ),
            request_headers: cloned_headers,
            response_body: body,
            response: response2,
            is_b64
          });
        }
        __name(push_fetched, "push_fetched");
        __name2(push_fetched, "push_fetched");
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            if (buffer instanceof ArrayBuffer) {
              await push_fetched(b64_encode(buffer), true);
            }
            return buffer;
          };
        }
        async function text2() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            await push_fetched(body, false);
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        __name(text2, "text2");
        __name2(text2, "text2");
        if (key2 === "text") {
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  }, "universal_fetch");
  return (input, init22) => {
    const response = universal_fetch(input, init22);
    response.catch(() => {
    });
    return response;
  };
}
__name(create_universal_fetch, "create_universal_fetch");
__name2(create_universal_fetch, "create_universal_fetch");
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder3 = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder3.decode(value);
  }
  return result;
}
__name(stream_to_string, "stream_to_string");
__name2(stream_to_string, "stream_to_string");
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i3 = value.length;
      while (i3)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i3);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i3 = buffer.length;
      while (i3)
        hash2 = hash2 * 33 ^ buffer[--i3];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
__name(hash, "hash");
__name2(hash, "hash");
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
__name(escape_html_attr, "escape_html_attr");
__name2(escape_html_attr, "escape_html_attr");
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let varyAny = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    else if (key2 === "age")
      age = value;
    else if (key2 === "vary" && value.trim() === "*")
      varyAny = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.is_b64) {
    attrs.push("data-b64");
  }
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !varyAny) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
__name(serialize_data, "serialize_data");
__name2(serialize_data, "serialize_data");
var s3 = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init2.slice(0);
  const array2 = encode$1(data);
  for (let i3 = 0; i3 < array2.length; i3 += 16) {
    const w3 = array2.subarray(i3, i3 + 16);
    let tmp;
    let a3;
    let b3;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i22 = 0; i22 < 64; i22++) {
      if (i22 < 16) {
        tmp = w3[i22];
      } else {
        a3 = w3[i22 + 1 & 15];
        b3 = w3[i22 + 14 & 15];
        tmp = w3[i22 & 15] = (a3 >>> 7 ^ a3 >>> 18 ^ a3 >>> 3 ^ a3 << 25 ^ a3 << 14) + (b3 >>> 17 ^ b3 >>> 19 ^ b3 >>> 10 ^ b3 << 15 ^ b3 << 13) + w3[i22 & 15] + w3[i22 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i22];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
__name(sha256, "sha256");
__name2(sha256, "sha256");
var init2 = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x2) {
    return (x2 - Math.floor(x2)) * 4294967296;
  }
  __name(frac, "frac");
  __name2(frac, "frac");
  let prime = 2;
  for (let i3 = 0; i3 < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i3 < 8) {
        init2[i3] = frac(prime ** (1 / 2));
      }
      key[i3] = frac(prime ** (1 / 3));
      i3++;
    }
  }
}
__name(precompute, "precompute");
__name2(precompute, "precompute");
function reverse_endianness(bytes) {
  for (let i3 = 0; i3 < bytes.length; i3 += 4) {
    const a3 = bytes[i3 + 0];
    const b3 = bytes[i3 + 1];
    const c4 = bytes[i3 + 2];
    const d3 = bytes[i3 + 3];
    bytes[i3 + 0] = d3;
    bytes[i3 + 1] = c4;
    bytes[i3 + 2] = b3;
    bytes[i3 + 3] = a3;
  }
}
__name(reverse_endianness, "reverse_endianness");
__name2(reverse_endianness, "reverse_endianness");
function encode$1(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
__name(encode$1, "encode$1");
__name2(encode$1, "encode$1");
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes) {
  const l3 = bytes.length;
  let result = "";
  let i3;
  for (i3 = 2; i3 < l3; i3 += 3) {
    result += chars[bytes[i3 - 2] >> 2];
    result += chars[(bytes[i3 - 2] & 3) << 4 | bytes[i3 - 1] >> 4];
    result += chars[(bytes[i3 - 1] & 15) << 2 | bytes[i3] >> 6];
    result += chars[bytes[i3] & 63];
  }
  if (i3 === l3 + 1) {
    result += chars[bytes[i3 - 2] >> 2];
    result += chars[(bytes[i3 - 2] & 3) << 4];
    result += "==";
  }
  if (i3 === l3) {
    result += chars[bytes[i3 - 2] >> 2];
    result += chars[(bytes[i3 - 2] & 3) << 4 | bytes[i3 - 1] >> 4];
    result += chars[(bytes[i3 - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
__name(base64, "base64");
__name2(base64, "base64");
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
__name(generate_nonce, "generate_nonce");
__name2(generate_nonce, "generate_nonce");
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  static {
    __name(this, "BaseProvider");
  }
  static {
    __name2(this, "BaseProvider");
  }
  /** @type {boolean} */
  #use_hashes;
  /** @type {boolean} */
  #script_needs_csp;
  /** @type {boolean} */
  #style_needs_csp;
  /** @type {import('types').CspDirectives} */
  #directives;
  /** @type {import('types').Csp.Source[]} */
  #script_src;
  /** @type {import('types').Csp.Source[]} */
  #style_src;
  /** @type {string} */
  #nonce;
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce2) {
    this.#use_hashes = use_hashes;
    this.#directives = directives;
    const d3 = this.#directives;
    this.#script_src = [];
    this.#style_src = [];
    const effective_script_src = d3["script-src"] || d3["default-src"];
    const effective_style_src = d3["style-src"] || d3["default-src"];
    this.#script_needs_csp = !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.#style_needs_csp = !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce2;
  }
  /** @param {string} content */
  add_script(content) {
    if (this.#script_needs_csp) {
      if (this.#use_hashes) {
        this.#script_src.push(`sha256-${sha256(content)}`);
      } else if (this.#script_src.length === 0) {
        this.#script_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (this.#style_needs_csp) {
      if (this.#use_hashes) {
        this.#style_src.push(`sha256-${sha256(content)}`);
      } else if (this.#style_src.length === 0) {
        this.#style_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...this.#style_src
      ];
    }
    if (this.#script_src.length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...this.#script_src
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
var CspProvider = class extends BaseProvider {
  static {
    __name(this, "CspProvider");
  }
  static {
    __name2(this, "CspProvider");
  }
  get_meta() {
    const content = this.get_header(true);
    if (!content) {
      return;
    }
    return `<meta http-equiv="content-security-policy" content=${escape_html_attr(content)}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  static {
    __name(this, "CspReportOnlyProvider");
  }
  static {
    __name2(this, "CspReportOnlyProvider");
  }
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce2) {
    super(use_hashes, directives, nonce2);
    if (Object.values(directives).filter((v3) => !!v3).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  static {
    __name(this, "Csp");
  }
  static {
    __name2(this, "Csp");
  }
  /** @readonly */
  nonce = generate_nonce();
  /** @type {CspProvider} */
  csp_provider;
  /** @type {CspReportOnlyProvider} */
  report_only_provider;
  /**
   * @param {import('./types.js').CspConfig} config
   * @param {import('./types.js').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f3, r4) => {
    fulfil = f3;
    reject = r4;
  });
  return { promise, fulfil, reject };
}
__name(defer, "defer");
__name2(defer, "defer");
function create_async_iterator() {
  const deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: /* @__PURE__ */ __name2(async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }, "next")
        };
      }
    },
    push: /* @__PURE__ */ __name2((value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    }, "push"),
    done: /* @__PURE__ */ __name2(() => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }, "done")
  };
}
__name(create_async_iterator, "create_async_iterator");
__name2(create_async_iterator, "create_async_iterator");
var updated = {
  ...readable(false),
  check: /* @__PURE__ */ __name2(() => false, "check")
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state: state2,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state2.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = new Set(client.imports);
  const stylesheets3 = new Set(client.stylesheets);
  const fonts3 = new Set(client.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s3(base);
  if (!state2.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/").slice(2);
    base$1 = segments.map(() => "..").join("/") || ".";
    base_expression = `new URL(${s3(base$1)}, location).pathname.slice(0, -1)`;
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i3 = 0; i3 < branch.length; i3 += 1) {
      data2 = { ...data2, ...branch[i3].data };
      props[`data_${i3}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset2();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets3.add(url);
      for (const url of node.fonts)
        fonts3.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k3, v3]) => inline_styles.set(k3, v3));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state2.prerendering
  });
  const prefixed = /* @__PURE__ */ __name2((path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  }, "prefixed");
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets3) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts3) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b3) => b3.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state2.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state2.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      assets && `assets: ${s3(assets)}`,
      `base: ${base_expression}`,
      `env: ${s3(public_env)}`
    ].filter(Boolean);
    if (chunks) {
      blocks.push("const deferred = new Map();");
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = ["app", "element"];
    blocks.push("const element = document.currentScript.parentElement;");
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        "data",
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s3(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s3(prefixed(client.start))}),
						import(${s3(prefixed(client.app))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state2.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state2.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state2.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
__name(render_response, "render_response");
__name2(render_response, "render_response");
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e3) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  __name(replacer, "replacer");
  __name2(replacer, "replacer");
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
__name(get_data, "get_data");
__name2(get_data, "get_data");
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {Value} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
__name(get_option, "get_option");
__name2(get_option, "get_option");
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state: state2,
  status,
  error: error2,
  resolve_opts
}) {
  if (event.request.headers.get("x-sveltekit-error")) {
    return static_error_page(
      options2,
      status,
      /** @type {Error} */
      error2.message
    );
  }
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state2.error = true;
      const server_data_promise = load_server_data({
        event,
        state: state2,
        node: default_layout,
        parent: /* @__PURE__ */ __name2(async () => ({}), "parent"),
        track_server_fetches: options2.track_server_fetches
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: /* @__PURE__ */ __name2(async () => ({}), "parent"),
        resolve_opts,
        server_data_promise,
        state: state2,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state: state2,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e3) {
    if (e3 instanceof Redirect) {
      return redirect_response(e3.status, e3.location);
    }
    return static_error_page(
      options2,
      e3 instanceof HttpError ? e3.status : 500,
      (await handle_error_and_jsonify(event, options2, e3)).message
    );
  }
}
__name(respond_with_error, "respond_with_error");
__name2(respond_with_error, "respond_with_error");
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
__name(once, "once");
__name2(once, "once");
var encoder4 = new TextEncoder();
async function render_data(event, route, options2, manifest2, state2, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n4, i3) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n4 == void 0 ? n4 : await manifest2._.nodes[n4]();
          return load_server_data({
            event: new_event,
            state: state2,
            node,
            parent: /* @__PURE__ */ __name2(async () => {
              const data2 = {};
              for (let j3 = 0; j3 < i3; j3 += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j3]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }, "parent"),
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e3) {
          aborted = true;
          throw e3;
        }
      });
    });
    const promises = functions.map(async (fn, i3) => {
      if (!invalidated[i3]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p3, i3) => p3.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i3 + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder4.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder4.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e3) {
    const error2 = normalize_error(e3);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
__name(render_data, "render_data");
__name2(render_data, "render_data");
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
__name(json_response, "json_response");
__name2(json_response, "json_response");
function redirect_json_response(redirect2) {
  return json_response({
    type: "redirect",
    location: redirect2.location
  });
}
__name(redirect_json_response, "redirect_json_response");
__name2(redirect_json_response, "redirect_json_response");
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: /* @__PURE__ */ __name2((thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e3) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e3
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e3) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }, "Promise")
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e3) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e3
    ));
  }
}
__name(get_data_json, "get_data_json");
__name2(get_data_json, "get_data_json");
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state2, resolve_opts) {
  if (state2.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n4) => n4 == void 0 ? n4 : manifest2._.nodes[n4]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state2.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state2.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false && !state2.prerendering) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state: state2,
        resolve_opts
      });
    }
    const branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i3) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state: state2,
            node,
            parent: /* @__PURE__ */ __name2(async () => {
              const data = {};
              for (let j3 = 0; j3 < i3; j3 += 1) {
                const parent = await server_promises[j3];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }, "parent"),
            track_server_fetches: options2.track_server_fetches
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i3) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: /* @__PURE__ */ __name2(async () => {
              const data = {};
              for (let j3 = 0; j3 < i3; j3 += 1) {
                Object.assign(data, await load_promises[j3]);
              }
              return data;
            }, "parent"),
            resolve_opts,
            server_data_promise: server_promises[i3],
            state: state2,
            csr
          });
        } catch (e3) {
          load_error = /** @type {Error} */
          e3;
          throw load_error;
        }
      });
    });
    for (const p3 of server_promises)
      p3.catch(() => {
      });
    for (const p3 of load_promises)
      p3.catch(() => {
      });
    for (let i3 = 0; i3 < nodes.length; i3 += 1) {
      const node = nodes[i3];
      if (node) {
        try {
          const server_data = await server_promises[i3];
          const data = await load_promises[i3];
          branch.push({ node, server_data, data });
        } catch (e3) {
          const err = normalize_error(e3);
          if (err instanceof Redirect) {
            if (state2.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state2.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i3--) {
            if (page2.errors[i3]) {
              const index3 = (
                /** @type {number} */
                page2.errors[i3]
              );
              const node2 = await manifest2._.nodes[index3]();
              let j3 = i3;
              while (!branch[j3])
                j3 -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state: state2,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j3 + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state2.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state2.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: get_option(nodes, "ssr") ?? true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e3) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      status: 500,
      error: e3,
      resolve_opts
    });
  }
}
__name(render_page, "render_page");
__name2(render_page, "render_page");
var parse_12 = parse4;
var serialize_1 = serialize2;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse4(str, options2) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  var obj = {};
  var opt = options2 || {};
  var dec = opt.decode || decode4;
  var index3 = 0;
  while (index3 < str.length) {
    var eqIdx = str.indexOf("=", index3);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(";", index3);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index3 = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index3, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index3 = endIdx + 1;
  }
  return obj;
}
__name(parse4, "parse4");
__name2(parse4, "parse4");
function serialize2(name, val, options2) {
  var opt = options2 || {};
  var enc2 = opt.encode || encode4;
  if (typeof enc2 !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  var value = enc2(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError("argument val is invalid");
  }
  var str = name + "=" + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
__name(serialize2, "serialize2");
__name2(serialize2, "serialize2");
function decode4(str) {
  return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
}
__name(decode4, "decode4");
__name2(decode4, "decode4");
function encode4(val) {
  return encodeURIComponent(val);
}
__name(encode4, "encode4");
__name2(encode4, "encode4");
function isDate(val) {
  return __toString.call(val) === "[object Date]" || val instanceof Date;
}
__name(isDate, "isDate");
__name2(isDate, "isDate");
function tryDecode(str, decode22) {
  try {
    return decode22(str);
  } catch (e3) {
    return str;
  }
}
__name(tryDecode, "tryDecode");
__name2(tryDecode, "tryDecode");
function deprecate_missing_path(opts, method) {
  if (opts.path === void 0) {
    warn_with_callsite(
      `Calling \`cookies.${method}(...)\` without specifying a \`path\` is deprecated, and will be disallowed in SvelteKit 2.0. Relative paths can be used`,
      1
    );
  }
  if (opts.path === "") {
    warn_with_callsite(
      `Calling \`cookies.${method}(...)\` with \`path: ''\` will behave differently in SvelteKit 2.0. Instead of using the browser default behaviour, it will set the cookie path to the current pathname`,
      1
    );
  }
}
__name(deprecate_missing_path, "deprecate_missing_path");
__name2(deprecate_missing_path, "deprecate_missing_path");
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = parse_12(header, { decode: /* @__PURE__ */ __name2((value) => value, "decode") });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('@sveltejs/kit').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c4 = new_cookies[name];
      if (c4 && domain_matches(url.hostname, c4.options.domain) && path_matches(url.pathname, c4.options.path)) {
        return c4.value;
      }
      const decoder3 = opts?.decode || decodeURIComponent;
      const req_cookies = parse_12(header, { decode: decoder3 });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder3 = opts?.decode || decodeURIComponent;
      const cookies2 = parse_12(header, { decode: decoder3 });
      for (const c4 of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c4.options.domain) && path_matches(url.pathname, c4.options.path)) {
          cookies2[c4.name] = c4.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      deprecate_missing_path(opts, "set");
      set_internal(name, value, { ...defaults, ...opts });
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      deprecate_missing_path(opts, "delete");
      cookies.set(name, "", {
        path: default_path,
        // TODO 2.0 remove this
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts = {}) {
      deprecate_missing_path(opts, "serialize");
      return serialize_1(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder22 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder22(cookie.value);
    }
    if (header2) {
      const parsed = parse_12(header2, { decode: /* @__PURE__ */ __name2((value) => value, "decode") });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  __name(get_cookie_header, "get_cookie_header");
  __name2(get_cookie_header, "get_cookie_header");
  function set_internal(name, value, opts) {
    let path = opts.path;
    if (!opts.domain || opts.domain === url.hostname) {
      if (path) {
        if (path[0] === ".")
          path = resolve(url.pathname, path);
      } else {
        path = default_path;
      }
    }
    new_cookies[name] = {
      name,
      value,
      options: {
        ...opts,
        path
      }
    };
  }
  __name(set_internal, "set_internal");
  __name2(set_internal, "set_internal");
  return { cookies, new_cookies, get_cookie_header, set_internal };
}
__name(get_cookies, "get_cookies");
__name2(get_cookies, "get_cookies");
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
__name(domain_matches, "domain_matches");
__name2(domain_matches, "domain_matches");
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
__name(path_matches, "path_matches");
__name2(path_matches, "path_matches");
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", serialize_1(name, value, options2));
  }
}
__name(add_cookies_to_headers, "add_cookies_to_headers");
__name2(add_cookies_to_headers, "add_cookies_to_headers");
function create_fetch({ event, options: options2, manifest: manifest2, state: state2, get_cookie_header, set_internal }) {
  const server_fetch = /* @__PURE__ */ __name2(async (info, init22) => {
    const original_request = normalize_fetch_input(info, init22, event.url);
    let mode = (info instanceof Request ? info.mode : init22?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init22?.credentials) ?? "same-origin";
    return options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: /* @__PURE__ */ __name2(async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file = is_asset ? filename : filename_html;
          if (state2.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state2.read(file), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        const response = await respond(request, options2, manifest2, {
          ...state2,
          depth: state2.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of splitCookiesString_1(set_cookie)) {
            const { name, value, ...options3 } = parseString_1(str);
            set_internal(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }, "fetch")
    });
  }, "server_fetch");
  return (input, init22) => {
    const response = server_fetch(input, init22);
    response.catch(() => {
    });
    return response;
  };
}
__name(create_fetch, "create_fetch");
__name2(create_fetch, "create_fetch");
function normalize_fetch_input(info, init22, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init22);
}
__name(normalize_fetch_input, "normalize_fetch_input");
__name2(normalize_fetch_input, "normalize_fetch_input");
function validator(expected) {
  function validate(module, file) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || expected.has(key2))
        continue;
      const values = [...expected.values()];
      const hint = hint_for_supported_files(key2, file?.slice(file.lastIndexOf("."))) ?? `valid exports are ${values.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file ? ` in ${file}` : ""} (${hint})`);
    }
  }
  __name(validate, "validate");
  __name2(validate, "validate");
  return validate;
}
__name(validator, "validator");
__name2(validator, "validator");
function hint_for_supported_files(key2, ext = ".js") {
  const supported_files = [];
  if (valid_layout_exports.has(key2)) {
    supported_files.push(`+layout${ext}`);
  }
  if (valid_page_exports.has(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_layout_server_exports.has(key2)) {
    supported_files.push(`+layout.server${ext}`);
  }
  if (valid_page_server_exports.has(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.has(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.slice(0, -1).join(", ")}${supported_files.length > 1 ? " or " : ""}${supported_files.at(-1)}`;
  }
}
__name(hint_for_supported_files, "hint_for_supported_files");
__name2(hint_for_supported_files, "hint_for_supported_files");
var valid_layout_exports = /* @__PURE__ */ new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config"
]);
var valid_page_exports = /* @__PURE__ */ new Set([...valid_layout_exports, "entries"]);
var valid_layout_server_exports = /* @__PURE__ */ new Set([...valid_layout_exports]);
var valid_page_server_exports = /* @__PURE__ */ new Set([...valid_layout_server_exports, "actions", "entries"]);
var valid_server_exports = /* @__PURE__ */ new Set([
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "HEAD",
  "fallback",
  "prerender",
  "trailingSlash",
  "config",
  "entries"
]);
var validate_layout_exports = validator(valid_layout_exports);
var validate_page_exports = validator(valid_page_exports);
var validate_layout_server_exports = validator(valid_layout_server_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = /* @__PURE__ */ __name2(({ html }) => html, "default_transform");
var default_filter = /* @__PURE__ */ __name2(() => false, "default_filter");
var default_preload = /* @__PURE__ */ __name2(({ type }) => type === "js" || type === "css", "default_preload");
var page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "POST"]);
var allowed_page_methods = /* @__PURE__ */ new Set(["GET", "HEAD", "OPTIONS"]);
async function respond(request, options2, manifest2, state2) {
  const url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = is_form_content_type(request) && (request.method === "POST" || request.method === "PUT" || request.method === "PATCH" || request.method === "DELETE") && request.headers.get("origin") !== url.origin;
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state2.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) + (url.searchParams.get(TRAILING_SLASH_PARAM) === "1" ? "/" : "") || "/";
    url.searchParams.delete(TRAILING_SLASH_PARAM);
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("").map((node) => node === "1");
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state2.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state2.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-cloudflare"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state2.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: /* @__PURE__ */ __name2((new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            "Use `event.cookies.set(name, value, options)` instead of `event.setHeaders` to set cookies"
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state2.prerendering && lower === "cache-control") {
            state2.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    }, "setHeaders"),
    url,
    isDataRequest: is_data_request,
    isSubRequest: state2.depth > 0
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route) {
      if (url.pathname === base || url.pathname === base + "/") {
        trailing_slash = "always";
      } else if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n4) => n4 == void 0 ? n4 : manifest2._.nodes[n4]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (BROWSER)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (BROWSER)
          ;
      }
      if (!is_data_request) {
        const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
        if (normalized !== url.pathname && !state2.prerendering?.fallback) {
          return new Response(void 0, {
            status: 308,
            headers: {
              "x-sveltekit-normalize": "1",
              location: (
                // ensure paths starting with '//' are not treated as protocol-relative
                (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
              )
            }
          });
        }
      }
    }
    const { cookies, new_cookies, get_cookie_header, set_internal } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({
      event,
      options: options2,
      manifest: manifest2,
      state: state2,
      get_cookie_header,
      set_internal
    });
    if (state2.prerendering && !state2.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: /* @__PURE__ */ __name2((event2, opts) => resolve2(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state2.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      }), "resolve")
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e3) {
    if (e3 instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e3) : route?.page && is_action_json_request(event) ? action_json_redirect(e3) : redirect_response(e3.status, e3.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e3);
  }
  async function resolve2(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state2.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state: state2,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        const method = (
          /** @type {import('types').HttpMethod} */
          event2.request.method
        );
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state2,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state2);
        } else if (route.page) {
          if (page_methods.has(method)) {
            response = await render_page(event2, route.page, options2, manifest2, state2, resolve_opts);
          } else {
            const allowed_methods2 = new Set(allowed_page_methods);
            const node = await manifest2._.nodes[route.page.leaf]();
            if (node?.server?.actions) {
              allowed_methods2.add("POST");
            }
            if (method === "OPTIONS") {
              response = new Response(null, {
                status: 204,
                headers: {
                  allow: Array.from(allowed_methods2.values()).join(", ")
                }
              });
            } else {
              const mod = [...allowed_methods2].reduce(
                (acc, curr) => {
                  acc[curr] = true;
                  return acc;
                },
                /** @type {Record<string, any>} */
                {}
              );
              response = method_not_allowed(mod, method);
            }
          }
        } else {
          throw new Error("This should never happen");
        }
        if (request.method === "GET" && route.page && route.endpoint) {
          const vary = response.headers.get("vary")?.split(",")?.map((v3) => v3.trim().toLowerCase());
          if (!(vary?.includes("accept") || vary?.includes("*"))) {
            response = new Response(response.body, {
              status: response.status,
              statusText: response.statusText,
              headers: new Headers(response.headers)
            });
            response.headers.append("Vary", "Accept");
          }
        }
        return response;
      }
      if (state2.error && event2.isSubRequest) {
        return await fetch(request, {
          headers: {
            "x-sveltekit-error": "true"
          }
        });
      }
      if (state2.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state2.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state: state2,
          status: 404,
          error: new NotFound(event2.url.pathname),
          resolve_opts
        });
      }
      if (state2.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e3) {
      return await handle_fatal_error(event2, options2, e3);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
  __name(resolve2, "resolve2");
  __name2(resolve2, "resolve2");
}
__name(respond, "respond");
__name2(respond, "respond");
function filter_private_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k3]) => k3.startsWith(private_prefix) && (public_prefix === "" || !k3.startsWith(public_prefix))
    )
  );
}
__name(filter_private_env, "filter_private_env");
__name2(filter_private_env, "filter_private_env");
function filter_public_env(env, { public_prefix, private_prefix }) {
  return Object.fromEntries(
    Object.entries(env).filter(
      ([k3]) => k3.startsWith(public_prefix) && (private_prefix === "" || !k3.startsWith(private_prefix))
    )
  );
}
__name(filter_public_env, "filter_public_env");
__name2(filter_public_env, "filter_public_env");
var Server = class {
  static {
    __name(this, "Server");
  }
  static {
    __name2(this, "Server");
  }
  /** @type {import('types').SSROptions} */
  #options;
  /** @type {import('@sveltejs/kit').SSRManifest} */
  #manifest;
  /** @param {import('@sveltejs/kit').SSRManifest} manifest */
  constructor(manifest2) {
    this.#options = options;
    this.#manifest = manifest2;
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    set_private_env(
      filter_private_env(env, {
        public_prefix: this.#options.env_public_prefix,
        private_prefix: this.#options.env_private_prefix
      })
    );
    set_public_env(
      filter_public_env(env, {
        public_prefix: this.#options.env_public_prefix,
        private_prefix: this.#options.env_private_prefix
      })
    );
    if (!this.#options.hooks) {
      try {
        const module = await get_hooks();
        this.#options.hooks = {
          handle: module.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
          handleError: module.handleError || (({ error: error2 }) => console.error(error2)),
          handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
        };
      } catch (error2) {
        {
          throw error2;
        }
      }
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, this.#options, this.#manifest, {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
var manifest = (() => {
  function __memo(fn) {
    let value;
    return () => value ??= value = fn();
  }
  __name(__memo, "__memo");
  __name2(__memo, "__memo");
  return {
    appDir: "_app",
    appPath: "_app",
    assets: /* @__PURE__ */ new Set([".nojekyll", "_headers", "apple-touch-icon.png", "contributors.json", "favicon.png", "font/Fredoka-Regular.ttf", "font/Fredoka-SemiBold.ttf", "font/LilitaOne-Regular.ttf", "img/icon/connect_with_strava.svg", "img/icon/draw_square.svg", "img/icon/layer.svg", "img/icon/logo_outline.png", "img/icon/powered_by_strava.svg", "img/icon/print.svg", "img/icon/ruler.svg", "img/icon/shield.svg", "img/icon/strava_logo.svg", "img/icon/trash.svg", "img/map/trace_end.png", "img/map/trace_start.png", "img/touch/homescreen144.png", "img/touch/homescreen168.png", "img/touch/homescreen192.png", "img/touch/homescreen48.png", "img/touch/homescreen72.png", "img/touch/homescreen96.png", "manifest.json", "map_styles/basic.json", "map_styles/dark.json", "map_styles/datavis.json", "map_styles/landscape.json", "map_styles/light.json", "map_styles/satellite.json", "map_styles/streets.json", "map_styles/topo.json", "map_styles/winter.json", "safari-pinned-tab.svg"]),
    mimeTypes: { ".png": "image/png", ".json": "application/json", ".ttf": "font/ttf", ".svg": "image/svg+xml" },
    _: {
      client: { "start": "_app/immutable/entry/start.f6789f88.js", "app": "_app/immutable/entry/app.2ef0527d.js", "imports": ["_app/immutable/entry/start.f6789f88.js", "_app/immutable/chunks/scheduler.12a40e31.js", "_app/immutable/chunks/singletons.df650f58.js", "_app/immutable/entry/app.2ef0527d.js", "_app/immutable/chunks/preload-helper.a4192956.js", "_app/immutable/chunks/scheduler.12a40e31.js", "_app/immutable/chunks/index.95fd5629.js"], "stylesheets": [], "fonts": [] },
      nodes: [
        __memo(() => Promise.resolve().then(() => (init__(), __exports))),
        __memo(() => Promise.resolve().then(() => (init__2(), __exports2)))
      ],
      routes: [],
      matchers: /* @__PURE__ */ __name2(async () => {
        return {};
      }, "matchers")
    }
  };
})();
var prerendered = /* @__PURE__ */ new Set(["/", "/__data.json"]);
async function e2(e3, t22) {
  let n22 = "string" != typeof t22 && "HEAD" === t22.method;
  n22 && (t22 = new Request(t22, { method: "GET" }));
  let r32 = await e3.match(t22);
  return n22 && r32 && (r32 = new Response(null, r32)), r32;
}
__name(e2, "e2");
__name2(e2, "e2");
function t2(e3, t22, n22, o22) {
  return ("string" == typeof t22 || "GET" === t22.method) && r3(n22) && (n22.headers.has("Set-Cookie") && (n22 = new Response(n22.body, n22)).headers.append("Cache-Control", "private=Set-Cookie"), o22.waitUntil(e3.put(t22, n22.clone()))), n22;
}
__name(t2, "t2");
__name2(t2, "t2");
var n3 = /* @__PURE__ */ new Set([200, 203, 204, 300, 301, 404, 405, 410, 414, 501]);
function r3(e3) {
  if (!n3.has(e3.status))
    return false;
  if (~(e3.headers.get("Vary") || "").indexOf("*"))
    return false;
  let t22 = e3.headers.get("Cache-Control") || "";
  return !/(private|no-cache|no-store)/i.test(t22);
}
__name(r3, "r3");
__name2(r3, "r3");
function o4(n22) {
  return async function(r32, o22) {
    let a3 = await e2(n22, r32);
    if (a3)
      return a3;
    o22.defer((e3) => {
      t2(n22, r32, e3, o22);
    });
  };
}
__name(o4, "o4");
__name2(o4, "o4");
var s4 = caches.default;
var c3 = t2.bind(0, s4);
var r22 = e2.bind(0, s4);
var e22 = o4.bind(0, s4);
var server = new Server(manifest);
var worker = {
  async fetch(req, env, context) {
    await server.init({ env });
    let pragma = req.headers.get("cache-control") || "";
    let res = !pragma.includes("no-cache") && await r22(req);
    if (res)
      return res;
    let { pathname, search } = new URL(req.url);
    try {
      pathname = decodeURIComponent(pathname);
    } catch {
    }
    const stripped_pathname = pathname.replace(/\/$/, "");
    let is_static_asset = false;
    const filename = stripped_pathname.substring(1);
    if (filename) {
      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html");
    }
    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";
    if (is_static_asset || prerendered.has(pathname)) {
      res = await env.ASSETS.fetch(req);
    } else if (location && prerendered.has(location)) {
      if (search)
        location += search;
      res = new Response("", {
        status: 308,
        headers: {
          location
        }
      });
    } else {
      res = await server.respond(req, {
        // @ts-ignore
        platform: { env, context, caches, cf: req.cf },
        getClientAddress() {
          return req.headers.get("cf-connecting-ip");
        }
      });
    }
    pragma = res.headers.get("cache-control") || "";
    return pragma && res.status < 400 ? c3(req, res, context) : res;
  }
};
var worker_default = worker;
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e3) {
      console.error("Failed to drain the unused request body.", e3);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e3) {
  return {
    name: e3?.name,
    message: e3?.message ?? String(e3),
    stack: e3?.stack,
    cause: e3?.cause === void 0 ? void 0 : reduceError(e3.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e3) {
    const error2 = reduceError(e3);
    return Response.json(error2, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker2) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker2;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker2.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker2.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker2,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init3) {
        if (type === "scheduled" && worker2.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init3.cron ?? "",
            () => {
            }
          );
          return worker2.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init3) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init3.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// node_modules/.pnpm/wrangler@4.95.0_@cloudflare+workers-types@4.20260529.1/node_modules/wrangler/templates/pages-dev-util.ts
function isRoutingRuleMatch(pathname, routingRule) {
  if (!pathname) {
    throw new Error("Pathname is undefined.");
  }
  if (!routingRule) {
    throw new Error("Routing rule is undefined.");
  }
  const ruleRegExp = transformRoutingRuleToRegExp(routingRule);
  return pathname.match(ruleRegExp) !== null;
}
__name(isRoutingRuleMatch, "isRoutingRuleMatch");
function transformRoutingRuleToRegExp(rule) {
  let transformedRule;
  if (rule === "/" || rule === "/*") {
    transformedRule = rule;
  } else if (rule.endsWith("/*")) {
    transformedRule = `${rule.substring(0, rule.length - 2)}(/*)?`;
  } else if (rule.endsWith("/")) {
    transformedRule = `${rule.substring(0, rule.length - 1)}(/)?`;
  } else if (rule.endsWith("*")) {
    transformedRule = rule;
  } else {
    transformedRule = `${rule}(/)?`;
  }
  transformedRule = `^${transformedRule.replaceAll(/\./g, "\\.").replaceAll(/\*/g, ".*")}$`;
  return new RegExp(transformedRule);
}
__name(transformRoutingRuleToRegExp, "transformRoutingRuleToRegExp");

// .wrangler/tmp/pages-qqcaIH/h4ydzsweooo.js
var define_ROUTES_default = {
  version: 1,
  description: "Generated by @sveltejs/adapter-cloudflare",
  include: [
    "/*"
  ],
  exclude: [
    "/_app/*",
    "/.nojekyll",
    "/apple-touch-icon.png",
    "/contributors.json",
    "/favicon.png",
    "/font/Fredoka-Regular.ttf",
    "/font/Fredoka-SemiBold.ttf",
    "/font/LilitaOne-Regular.ttf",
    "/img/icon/connect_with_strava.svg",
    "/img/icon/draw_square.svg",
    "/img/icon/layer.svg",
    "/img/icon/logo_outline.png",
    "/img/icon/powered_by_strava.svg",
    "/img/icon/print.svg",
    "/img/icon/ruler.svg",
    "/img/icon/shield.svg",
    "/img/icon/strava_logo.svg",
    "/img/icon/trash.svg",
    "/img/map/trace_end.png",
    "/img/map/trace_start.png",
    "/img/touch/homescreen144.png",
    "/img/touch/homescreen168.png",
    "/img/touch/homescreen192.png",
    "/img/touch/homescreen48.png",
    "/img/touch/homescreen72.png",
    "/img/touch/homescreen96.png",
    "/manifest.json",
    "/map_styles/basic.json",
    "/map_styles/dark.json",
    "/map_styles/datavis.json",
    "/map_styles/landscape.json",
    "/map_styles/light.json",
    "/map_styles/satellite.json",
    "/map_styles/streets.json",
    "/map_styles/topo.json",
    "/map_styles/winter.json",
    "/safari-pinned-tab.svg",
    "/",
    "/__data.json"
  ]
};
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        const workerAsHandler = middleware_loader_entry_default;
        if (workerAsHandler.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return workerAsHandler.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};

// node_modules/.pnpm/wrangler@4.95.0_@cloudflare+workers-types@4.20260529.1/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e3) {
      console.error("Failed to drain the unused request body.", e3);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// node_modules/.pnpm/wrangler@4.95.0_@cloudflare+workers-types@4.20260529.1/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e3) {
  return {
    name: e3?.name,
    message: e3?.message ?? String(e3),
    stack: e3?.stack,
    cause: e3?.cause === void 0 ? void 0 : reduceError2(e3.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e3) {
    const error2 = reduceError2(e3);
    return Response.json(error2, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-V2PBT7/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = pages_dev_pipeline_default;

// node_modules/.pnpm/wrangler@4.95.0_@cloudflare+workers-types@4.20260529.1/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-V2PBT7/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker2) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker2;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker2.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker2.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker2,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init3) {
        if (type === "scheduled" && worker2.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init3.cron ?? "",
            () => {
            }
          );
          return worker2.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init3) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init3.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=h4ydzsweooo.js.map
