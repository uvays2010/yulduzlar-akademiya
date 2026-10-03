const Store={
 key:'ya_titan',
 defaults:{theme:'dark',xp:2480,streak:7,minutes:2280,completed:38,favs:[],notes:[],tasks:[],
  notifications:true,autoSave:true,animations:true,sounds:false,compact:false,largeText:false,highContrast:false,
  sidebar:true,showTips:true,autoPlay:true,accent:'purple',language:'uz',profileName:'Uvays',goalMinutes:45
 },
 data(){try{return {...this.defaults,...JSON.parse(localStorage.getItem(this.key)||'{}')}}catch(e){return {...this.defaults}}},
 save(v){localStorage.setItem(this.key,JSON.stringify(v));},
 get(k){return this.data()[k]},
 set(k,v){const d=this.data();d[k]=v;this.save(d);return v},
 patch(obj){const d=this.data();Object.assign(d,obj);this.save(d);return d},
 toggle(k){const d=this.data();d[k]=!Boolean(d[k]);this.save(d);return d[k]},
 toggleTheme(){const d=this.data();d.theme=d.theme==='dark'?'light':'dark';this.save(d);return d.theme},
 fav(id){const d=this.data();d.favs=d.favs.includes(id)?d.favs.filter(x=>x!==id):[...d.favs,id];this.save(d);return d.favs.includes(id)},
 reset(){localStorage.removeItem(this.key);return this.data()},
 export(){return JSON.stringify(this.data(),null,2)}
};
