/* c:\Projects\Cobalt\Repository\Source\Curse.Titanium.Web\..\Curse.Cobalt.Web\Content\js\Cobalt\Cobalt.AnchorUnit.js */
(function(d) {
	if (typeof(Curse) == "undefined") {
		Curse = {}
	}(function(e) {
		Curse.isMobileBrowser = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
	})(navigator.userAgent || navigator.vendor || window.opera);
	(function(l) {
		var s = /^<([\-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
			n = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
			m = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;
		var e = k("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");
		var j = k("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");
		var h = k("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var");
		var q = k("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
		var g = k("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");
		var f = k("script,style");

		function i(u) {
			var C, w, E, A = [],
				D = "",
				v;
			A.last = function() {
				return this[this.length - 1]
			};

			function B(G, H) {
				H = H.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
				if (u.chars) {
					u.chars(H)
				}
				return ""
			}

			function x(H) {
				H = D + H;
				D = H;
				if (o.debug.parse) {
					console.log("PARSE parseMore", H)
				}
				while (H) {
					w = true;
					if (v || (A.last() && f[A.last()])) {
						v = false;
						var G = new RegExp("([\\s\\S]*?)</" + A.last() + "[^>]*>", "i");
						if (!H.match(G)) {
							v = true;
							return y
						}
						H = H.replace(G, B);
						F("", A.last())
					} else {
						if (H.indexOf("<!--") === 0) {
							C = H.indexOf("-->");
							if (C >= 0) {
								if (o.debug.parse) {
									console.log("PARSE comment", E)
								}
								if (u.comment) {
									u.comment(H.substring(4, C))
								}
								H = H.substring(C + 3);
								w = false
							}
						} else {
							if (H.indexOf("</") === 0) {
								E = H.match(n);
								if (E) {
									if (o.debug.parse) {
										console.log("PARSE end tag", E)
									}
									H = H.substring(E[0].length);
									E[0].replace(n, F);
									w = false
								}
							} else {
								if (H.indexOf("<") === 0) {
									E = H.match(s);
									if (E) {
										if (o.debug.parse) {
											console.log("PARSE start tag", E)
										}
										H = H.substring(E[0].length);
										E[0].replace(s, t);
										w = false
									}
								}
							}
						} if (w) {
							C = H.indexOf("<");
							var J = C < 0 ? H : H.substring(0, C);
							H = C < 0 ? "" : H.substring(C);
							if (o.debug.parse) {
								console.log("PARSE chars", J)
							}
							if (u.chars) {
								u.chars(J)
							}
						}
					}
					var I = H == D;
					D = H;
					if (I) {
						break
					}
				}
				if (o.debug.parse) {
					console.log("PARSE end parse")
				}
				return y
			}

			function t(G, H, I, K) {
				H = H.toLowerCase();
				if (j[H]) {
					while (A.last() && h[A.last()]) {
						F("", A.last())
					}
				}
				if (q[H] && A.last() == H) {
					F("", H)
				}
				K = e[H] || !!K;
				if (!K) {
					A.push(H)
				}
				if (u.start) {
					var J = [];
					I.replace(m, function(N, M) {
						var L = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : g[M] ? M : "";
						J.push({
							name: M,
							value: L,
							escaped: L.replace(/(^|[^\\])"/g, '$1\\\\"')
						})
					});
					if (u.start) {
						u.start(H, J, K)
					}
				}
			}

			function F(G, I) {
				if (o.debug.parse) {
					console.log("PARSE parseEndTag", G, I)
				}
				var H;
				if (!I) {
					H = 0
				} else {
					for (H = A.length - 1; H >= 0; H--) {
						if (A[H] == I) {
							break
						}
					}
				} if (H >= 0) {
					for (var J = A.length - 1; J >= H; J--) {
						if (u.end) {
							u.end(A[J])
						}
					}
					if (o.debug.parse) {
						console.log("PARSE parseEndTag pop", A.slice(H))
					}
					A.length = H
				}
			}

			function z(G) {
				if (G) {
					x(G)
				}
				F()
			}
			var y = {
				parseMore: x,
				end: z
			};
			return y
		}

		function r(w, u) {
			u = u || {};
			var z = w;
			var A = [z],
				y = w.ownerDocument || w.getOwnerDocument && w.getOwnerDocument();
			A.last = function() {
				return this[this.length - 1]
			};
			A.pop = function() {
				var C = Array.prototype.pop.call(this);
				z = this.last();
				return C
			};
			A.push = function(C) {
				Array.prototype.push.call(this, C);
				z = C
			};

			function v(C) {
				if (u[C]) {
					return u[C].apply(u, p(arguments, 1).concat([t()]))
				}
			}

			function t() {
				return {
					stack: A
				}
			}
			var B, x = i(B = {
				start: function(G, H, F) {
					if (v("start", G, H, F) === false) {
						return
					}
					if (o.debug.write) {
						console.log("WRITE start", G, H, F)
					}
					var D = y.createElement(G);
					for (var C = 0; C < H.length; C++) {
						var E = H[C];
						D.setAttribute(E.name, E.value)
					}
					if (z && z.appendChild) {
						z.appendChild(D);
						if (o.debug.write) {
							console.log("WRITE start append", D, "to", z)
						}
					}
					if (!F) {
						if (o.debug.write) {
							console.log("WRITE push", D, A.slice(0))
						}
						A.push(D)
					}
					if (o.debug.write) {
						console.log("WRITE start done - parent:", z)
					}
				},
				end: function(C) {
					if (v("end", C) === false) {
						return
					}
					A.pop();
					if (o.debug.write) {
						console.log("WRITE end", C, "new parent:", z, "elems", A)
					}
				},
				chars: function(C) {
					if (v("chars", C) === false) {
						return
					}
					if (o.debug.write) {
						console.log("WRITE chars", C, "el:", w)
					}
					z.appendChild(y.createTextNode(C))
				},
				comment: function(C) {
					if (v("comment", C) === false) {
						return
					}
				},
				close: function() {
					if (v("close") === false) {
						return
					}
					if (o.debug.write) {
						console.log("WRITE close el:", w)
					}
				},
				_handle: function(C) {
					v.apply(this, arguments)
				}
			});
			return u.writer = {
				handle: function(C, D) {
					if (B[C]) {
						B[C].apply(B, D || [])
					} else {
						B._handle.apply(B, arguments)
					}
				},
				write: function(C) {
					x.parseMore(C);
					return this
				},
				writeln: function(C) {
					this.write(C + "\n");
					return this
				},
				close: function(C) {
					x.end(C);
					B.close();
					return this
				}
			}
		}

		function k(v) {
			var w = {},
				t = v.split(",");
			for (var u = 0; u < t.length; u++) {
				w[t[u]] = true
			}
			return w
		}

		function p(u, t) {
			return Array.prototype.slice.call(u, t)
		}
		var o = {
			toElement: r,
			HTMLParser: i,
			debug: {
				parse: false,
				write: false
			}
		};
		l(o)
	})(typeof define == "function" ? define : function(e) {
		if (typeof exports === "object") {
			module.exports = e
		} else {
			this.elementWrite = e
		}
	});
	(function(f) {
		var t = window.console || {
			log: function() {}
		};
		t.blahblah = t.log;
		var h = t.log;
		t.log = function() {
			if (l.debug) {
				h.apply(this, arguments)
			}
		};
		var j = (function() {
			var u = document.createElement("script");
			var v = "script" + (new Date()).getTime();
			var x = document.documentElement;
			u.type = "text/javascript";
			try {
				u.appendChild(document.createTextNode("window." + v + "=1;"))
			} catch (w) {}
			x.insertBefore(u, x.firstChild);
			if (window[v]) {
				delete window[v];
				return true
			}
			return false
		})();
		var e;

		function l(u, w) {
			var y, A, v, x, z = 0,
				B, C;
			w = w || function() {};
			y = e.toElement(u, g({
				start: function(D, G, H, F) {
					if (B) {
						return false
					}
					if (D.toLowerCase() === "script") {
						t.log("WC element:", u, "start script. attrs:", G, this.id);
						v = "";
						A = G || {};
						return false
					}
					if (z || /^(object|embed)$/i.test(D)) {
						x = (z ? x : "") + "<" + D;
						for (var E = 0; E < G.length; E++) {
							x += " " + G[E].name + '="' + G[E].escaped + '"'
						}
						x += ">";
						if (H && !z) {
							F.stack.last().innerHTML += x
						} else {
							if (!H) {
								z++
							}
						}
						return false
					}
					if (D.toLowerCase() === "noscript") {
						B = true;
						return false
					}
					if (D.toLowerCase() === "iframe") {
						C = true
					}
				},
				chars: function(D, E) {
					if (z) {
						x += D;
						return false
					}
					if (B) {
						return false
					}
					if (C) {
						return false
					}
					if (A) {
						t.log("WC element:", u, "chars:", D, this.id);
						v += D;
						return false
					}
				},
				end: function(D, F) {
					if (z) {
						x += "</" + D + ">";
						if (!--z) {
							F.stack.last().innerHTML += x
						}
						return false
					}
					if (B) {
						B = D.toLowerCase() !== "noscript";
						return false
					}
					if (C) {
						C = D.toLowerCase() !== "iframe"
					}
					if (A) {
						var E = A;
						A = false;
						n(v, E, F.stack.last(), y);
						return false
					}
				},
				comment: function(D, E) {
					return false
				},
				done: w
			}));
			return y
		}

		function n(u, A, z, w) {
			var y = l(z, x),
				v;
			t.log("WC captureScript attrs:", A, "body:", u, "in parent:", z);
			w.handle("pause");
			setTimeout(function() {
				v = q(k(z), y);
				m(u, A, z, function() {
					y.close()
				})
			}, 25);

			function x() {
				v();
				w.handle("resume")
			}
		}

		function m(v, D, z, A) {
			var B = k(z),
				w = B.createElement("script"),
				x, u;
			for (var C = 0; C < D.length; C++) {
				var y = D[C];
				x = y.name;
				u = y.value;
				if (l.fixUrls && x === "src") {
					u = l.fixUrls(u)
				}
				w.setAttribute(x, u)
			}
			if (v) {
				if (j) {
					w.appendChild(B.createTextNode(v))
				} else {
					w.text = v
				}
			}
			if (A && w.src) {
				w.onload = w.onreadystatechange = function(E, F) {
					if (F || !w.readyState || /loaded|complete/.test(w.readyState)) {
						w.onload = w.onreadystatechange = null;
						w = undefined;
						if (!F) {
							A()
						}
					}
				}
			}
			z.appendChild(w);
			if (A && !w.src) {
				A()
			}
		}

		function q(w, v) {
			var u = {
				write: w.write,
				writeln: w.writeln
			};
			w.write = function(x) {
				v.handle("write", [x])
			};
			w.writeln = function(x) {
				w.write(x + "\n")
			};
			return function() {
				w.write = u.write;
				w.writeln = u.writeln
			}
		}
		var p = 0;

		function g(x) {
			var v = [],
				w, u = p++;
			return {
				pause: function() {
					t.log("WC PAUSE", u);
					w = true
				},
				resume: function() {
					t.log("WC RESUME", u, v.slice(0));
					w = false;
					while (!w && v.length) {
						var y = v.shift();
						this.writer.handle(y[0], y[1])
					}
				},
				start: function(y, A, B, z) {
					t.log("WC start", w, "args", y, A, B, z, u);
					if (w) {
						v.push(["start", [y, A, B]]);
						return false
					} else {
						return x.start(y, A, B, z)
					}
				},
				chars: function(y, z) {
					t.log("WC chars", w, "args", y, z, u);
					if (w) {
						v.push(["chars", [y]]);
						return false
					} else {
						return x.chars(y, z)
					}
				},
				end: function(z, y) {
					t.log("WC end", w, "args", z, y, u);
					if (w) {
						v.push(["end", [z]]);
						return false
					} else {
						return x.end(z, y)
					}
				},
				comment: function(y, z) {
					if (w) {
						v.push(["comment", [y]]);
						return false
					} else {
						return x.comment(y, z)
					}
				},
				write: function(y) {
					t.log("WC queue.write", w, u);
					if (w) {
						v.push(["write", [y]]);
						return false
					} else {
						this.writer.write(y);
						return false
					}
				},
				close: function() {
					t.log("WC close", w, u);
					if (w) {
						v.push(["close", []]);
						return false
					} else {
						if (x.done) {
							return x.done()
						}
					}
				}
			}
		}

		function k(u) {
			return u.ownerDocument || u.getOwnerDocument && u.getOwnerDocument()
		}

		function r(v) {
			function u() {}
			u.prototype = v;
			return new u()
		}
		var s = [],
			o;

		function i() {
			if (!o) {
				var u = s.shift();
				if (typeof u === "undefined") {
					return
				} else {
					if (typeof u.el === "function") {
						u.el();
						return
					}
				}
				o = true;
				l(u.el, function() {
					o = false;
					i()
				}).close(u.html)
			}
		}
		l.write = function(v, u) {
			s.push({
				el: v,
				html: u
			});
			i()
		};
		f(["element.write"], function(u) {
			e = l.elementWrite = u;
			l.fixUrls = function(v) {
				return v.replace(/&amp;/g, "&")
			};
			return l
		})
	})(typeof define == "function" ? define : function(f, e) {
		if (typeof exports === "object") {
			module.exports = e(require(f[0]))
		} else {
			window.writeCapture = e(window.elementWrite)
		}
	});
	var b = "";
	var a = "http://www.curse.com/news/curse/47223-a-message-from-curse-ceo-hubert-thieblot";
	var c = {
		scriptSource: "pending",
		initialize: function() {
			var e = d("body").attr("data-site-identifier");
			if (typeof(e) == "undefined" || e == null || e == "") {
				var i = jQuery("script[src*=anchor\\.js],script[src*=AnchorUnit\\.js]");
				var f = (i.attr("src") || "");
				var g = f.substring(f.indexOf("?") + 1);
				var h = g.split("&");
				jQuery.each(h, function(n, l) {
					h[n] = l.split(/=/);
					var j = h[n][0];
					var m = h[n][1];
					if (j == "id") {
						e = parseInt(m)
					} else {
						if (j == "theme") {
							b = "/themes/" + m;
							switch (m) {
								case "bulbagarden":
									a = "http://bulbanews.bulbagarden.net/wiki/Front_page";
									break;
								case "blank":
									a = "";
									break
							}
						}
					}
				})
			}
			if (typeof(e) == "undefined") {
				e = 2663204
			}
			if (window.adgroupid == undefined) {
				window.adgroupid = Math.round(Math.random() * 1000)
			}
			this.scriptSource = "http://adserver.adtechus.com/addyn/3.0/5259.1/" + e + "/0/2065/ADTECH;loc=100;target=_blank;key=[keywords];grp=" + window.adgroupid + ";misc=" + new Date().getTime();
			this.adIdSalt = Math.floor(Math.random() * 1000);
			d("body").prepend("<style>#ad-container-" + this.adIdSalt + "{position:relative;width:758px;height:108px;margin:0 auto;background:url(http://media-titanium.cursecdn.com/shared-assets/current" + b + "/anchor-bg.png) 0 0 no-repeat;z-index:10001;}#ad-content-" + this.adIdSalt + "{position:absolute;top:6px;left:24px;width:728px;height:90px;overflow:hidden;z-index:10002;}#ad-content-" + this.adIdSalt + " *{z-index:10004;position:absolute;left:0;}#ad-wrapper-" + this.adIdSalt + "{width:100%;position:fixed;bottom:0;left: 0;text-align:center;z-index:10000 !important;}.close-btn{position:absolute;top:0px;left:0;width:20px;height:50px;cursor:pointer;}#ad-placeholder-background-" + this.adIdSalt + '{background: url("http://media-titanium.cursecdn.com/shared-assets/current' + b + '/anchor-placeholder.jpg") 0 0 no-repeat;width:728px;height:90px;position:absolute;top:0;left:0;z-index:10003;}</style>');
			d("body").append(d(document.createElement("div")).attr("id", "ad-wrapper-" + this.adIdSalt).append(d(document.createElement("div")).attr("id", "ad-container-" + this.adIdSalt).append(d(document.createElement("div")).attr("id", "ad-content-" + this.adIdSalt).append(d(document.createElement("a")).attr({
				href: a,
				id: "ad-placeholder-background-" + this.adIdSalt,
				target: "_blank"
			}))).append(d(document.createElement("div")).addClass("close-btn")).hide()));
			d("#ad-container-" + this.adIdSalt).data("adLoaded", 0).data("isDefault", 0).data("animatingUp", 0).data("animatingDown", 0).data("isShowing", 0).data("isEmpty", 1).data("writeCaptureCallback", 0);
			this.adContainer = d("#ad-container-" + this.adIdSalt);
			this.curseAdInterval = setInterval(this.anchorInterval, 200);
			d("#ad-container-" + this.adIdSalt).children(".close-btn").bind("click", function() {
				c.slideDownAnchor(function() {
					clearInterval(c.curseAdInterval);
					d(this).remove()
				})
			})
		},
		isOverlayed: function(j, k) {
			var l = j.offset();
			var o = k.offset();
			var h = l.left;
			var n = l.left + j.width();
			var i = o.left;
			var f = o.left + k.width();
			var p = l.top;
			var m = l.top + j.height();
			var e = o.top;
			var g = o.top + k.height();
			if (i > n || f < h) {
				return false
			}
			if (e > m || g < p) {
				return false
			}
			if (i > h && i < n) {
				return true
			}
			if (f > h && f < n) {
				return true
			}
			if (e > p && e < m) {
				return true
			}
			if (g > p && g < m) {
				return true
			}
			return false
		},
		anchorInterval: function() {
			var f = d(window).scrollTop();
			var e = d("#ad-wrapper-" + c.adIdSalt);
			var h = d("#ad-content-" + c.adIdSalt);
			var i = d(".ad-placement,.atflb,.recent-ad atfmrec,.btflb,.footer-ad-medRect,.atf-ad-medrec,.btf-ad-medrec,.atfmrec,.atf-ad-leaderboard,.btf-ad-leaderboard,.btf-ad-medRect,.ad-atf-leaderboard,.ad-btf-leaderboard,.ad-atf-medRect,.ad-btf-medRect,.atfrec,.btfrec");
			var g = false;
			i.each(function() {
				var j = d(this);
				if (c.isOverlayed(e, j)) {
					g = true
				}
			});
			if (g) {
				h.hide();
				e.css("visibility", "hidden");
				return
			} else {
				e.css("visibility", "visible");
				h.show()
			} if (f > 200) {
				startAnimateUp = false;
				if (c.adContainer.data().isEmpty === 1) {
					c.adContainer.data("isEmpty", 0);
					writeCapture.write(document.getElementById("ad-content-" + c.adIdSalt), "<script src='" + c.scriptSource + "'></script>");
					writeCapture.write((function() {
						c.adContainer.data("adLoaded", 1).data("writeCaptureCallback", 1);
						if (d(".sliding-ad-default").length > 0) {
							c.adContainer.data("isDefault", 1);
							var j = "http://media-titanium.cursecdn.com/shared-assets/current" + b + "/anchor-placeholder.jpg";
							(new Image()).src = j
						}
						if (c.adContainer.data().adLoaded === 1 && c.adContainer.data().animatingUp !== 1 && c.adContainer.data().isDefault !== 1 && c.adContainer.data().isShowing !== 1) {
							c.adContainer.data("animatingUp", 1);
							setTimeout(c.slideUpAnchor, 500)
						}
					}))
				} else {
					if (c.adContainer.data().animatingUp !== 1 && c.adContainer.data().isShowing !== 1 && c.adContainer.data().isDefault !== 1 && c.adContainer.data().writeCaptureCallback === 1) {
						startAnimateUp = true
					}
				} if (startAnimateUp) {
					c.slideUpAnchor()
				}
			} else {
				startAnimateDown = false;
				if (c.adContainer.data().isShowing === 1 && c.adContainer.data().animatingDown !== 1) {
					startAnimateDown = true
				}
				if (startAnimateDown) {
					c.slideDownAnchor()
				}
			}
		},
		slideUpAnchor: function() {
			d("#ad-container-" + c.adIdSalt).data("animatingUp", 1).stop().attr("style", "").css({
				paddingTop: 0,
				paddingBottom: 0,
				marginTop: 0,
				marginBottom: 0,
				height: 0
			}).animate({
				height: 108
			}, 400, function() {
				d(this).attr("style", "overflow:hidden;display:block;").data("animatingUp", 0).data("isShowing", 1)
			}).data()
		},
		slideDownAnchor: function(e) {
			d("#ad-container-" + c.adIdSalt).data("animatingDown", 1).stop().css({
				paddingTop: 0,
				paddingBottom: 0,
				marginTop: 0,
				marginBottom: 0
			}).animate({
				height: 1
			}, 400, function() {
				d(this).attr("style", "overflow:hidden;display:block;position:absolute;left:-9999px;").data("animatingDown", 0).data("isShowing", 0);
				if (typeof e !== "undefined") {
					e.call(this)
				}
			})
		}
	};
	if (!Curse.isMobileBrowser) {
		d(document).ready(d.proxy(c.initialize, c))
	}
})(jQuery);