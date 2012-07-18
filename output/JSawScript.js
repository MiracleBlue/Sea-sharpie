// JSawScript.js
(function(){
Type.registerNamespace('JSawScript');JSawScript._Generator=function(){}
JSawScript._Generator.prototype={$0:null,$1:null,$2:function($p0){}}
JSawScript.JSawScript$3=function(){}
JSawScript.JSawScript$3.prototype={$0:0,get_$1:function(){return this.$0;},set_$1:function($p0){this.$0=$p0;return $p0;}}
JSawScript.JSawScript$2=function(){}
JSawScript.JSawScript$2.prototype={$0:0,get_$1:function(){return this.$0;},set_$1:function($p0){this.$0=$p0;return $p0;}}
JSawScript.JSaw=function(){}
JSawScript.JSawCount=function(){}
JSawScript.JSawCount.prototype={instrument:0}
JSawScript.JSawEffect=function(){}
JSawScript.MixerNode=function(options){}
JSawScript.MixerNode.prototype={connect:function(output){}}
JSawScript.MixerNodeOptions=function(effects,audiolet){this.effects=effects;this.audiolet=audiolet;}
JSawScript.MixerNodeOptions.prototype={audiolet:null,effects:null,get_audiolet:function(){return this.audiolet;},set_audiolet:function(value){this.audiolet=value;return value;},get_effects:function(){return this.effects;},set_effects:function(value){this.effects=value;return value;}}
JSawScript.Note=function(noteOptionse){}
JSawScript.NoteOptions=function(){}
JSawScript.SamplerParams=function(){}
JSawScript.SamplerParams.prototype={$0:null,get_audiolet:function(){return this.$0;},set_audiolet:function(value){this.$0=value;return value;}}
JSawScript.JSawScript$1=function(){}
JSawScript.JSawScript$1.prototype={$0:null,$1:function($p0){}}
JSawScript.Voices=function(instrument){this.$2=[];this.$0=instrument;}
JSawScript.Voices.prototype={$0:null,$1:null,create:function(datas){console.group('Voice create');console.info('Type: '+this.$0.$0.get_type());if(datas==null||!datas.length){console.error('Cannot create voice: data argument is null or undefined.');console.groupEnd();return false;}if(datas.length>1){var $enum1=ss.IEnumerator.getEnumerator(datas);while($enum1.moveNext()){var $2=$enum1.current;}console.groupEnd();return false;}var $0=datas[0];var $1=$0;if(this.$0.$0.get_type()==='synth'){$1.audiolet=this.$0.al;$1.velocity=$1.velocity*this.$0.$0.get_volume();console.debug($1);var $3=this.$3(this.$0.generatorClass,[$1]);$3.$0.set_$1($1.velocity);$3.$1(this.$0.$2);this.$2.add($3);console.debug('Voice created');}else if(this.$0.$0.get_type()==='sampler'){this.$0.$4.$0.set_$1($1.velocity);this.$0.$4.$1.set_$1(1);console.debug('Sample triggered');}console.groupEnd();return true;},$3:function($p0,$p1){return null;}}
JSawScript.VoicesCreateData=function(){}
JSawScript.VoicesCreateData.prototype={audiolet:null,velocity:0}
JSawScript.JSawScript$0=function(){}
JSawScript.JSawScript$0.prototype={$0:0,get_$1:function(){return this.$0;},set_$1:function($p0){this.$0=$p0;return $p0;}}
JSawScript.Instrument=function(options){this.$0=options;console.group('Instrument ('+this.$0.get_type()+"): '"+this.$0.get_name()+"'");this.al=this.$0.get_audoilet();this.generatorClass=this.$0.get_generator();this.$1=this.$0.get_effects();this.$2=new JSawScript.MixerNode(new JSawScript.MixerNodeOptions(this.$1,this.al));this.$2.connect(this.al.output);if(this.$0.get_type()==='sampler'){this.$3=options.get_samplerParams();this.$3.set_audiolet(this.al);this.$4=this.$5(this.generatorClass,[this.$3]);this.$4.$2(this.$2);}this.voices=new JSawScript.Voices(this);console.debug('Mixer object: ');console.dir(this.$2);console.groupEnd();}
JSawScript.Instrument.prototype={$0:null,al:null,generatorClass:null,$1:null,$2:null,$3:null,$4:null,voices:null,playNote:function(notes){var $enum1=ss.IEnumerator.getEnumerator(notes);while($enum1.moveNext()){var $0=$enum1.current;this.voices.create([$0]);}},$5:function($p0,$p1){return null;}}
JSawScript.InstrumentOptions=function(){this.id=JSawScript.JSaw.count.instrument++;this.$6=[];}
JSawScript.InstrumentOptions.prototype={$0:'New Instrument',$1:'New Instrument',$2:'New Instrument',$3:false,$4:0.8,$5:null,$7:0.5,get_id:function(){return this.id;},set_id:function(value){this.id=value;return value;},get_name:function(){return this.$0;},set_name:function(value){this.$0=value;return value;},get_type:function(){return this.$1;},set_type:function(value){this.$1=value;return value;},get_generator:function(){return this.$2;},set_generator:function(value){this.$2=value;return value;},get_muted:function(){return this.$3;},set_muted:function(value){this.$3=value;return value;},get_volume:function(){return this.$4;},set_volume:function(value){this.$4=value;return value;},get_pan:function(){return this.$7;},set_pan:function(value){this.$7=value;return value;},get_effects:function(){return this.$6;},set_effects:function(value){this.$6=value;return value;},get_audoilet:function(){return this.$5;},set_audoilet:function(value){this.$5=value;return value;},$8:null,get_samplerParams:function(){return this.$8;},set_samplerParams:function(value){this.$8=value;return value;}}
JSawScript.Main=function(){}
JSawScript.App=function(){}
JSawScript._Generator.registerClass('JSawScript._Generator');JSawScript.JSawScript$3.registerClass('JSawScript.JSawScript$3');JSawScript.JSawScript$2.registerClass('JSawScript.JSawScript$2');JSawScript.JSaw.registerClass('JSawScript.JSaw');JSawScript.JSawCount.registerClass('JSawScript.JSawCount');JSawScript.JSawEffect.registerClass('JSawScript.JSawEffect');JSawScript.MixerNode.registerClass('JSawScript.MixerNode');JSawScript.MixerNodeOptions.registerClass('JSawScript.MixerNodeOptions');JSawScript.Note.registerClass('JSawScript.Note');JSawScript.NoteOptions.registerClass('JSawScript.NoteOptions');JSawScript.SamplerParams.registerClass('JSawScript.SamplerParams');JSawScript.JSawScript$1.registerClass('JSawScript.JSawScript$1');JSawScript.Voices.registerClass('JSawScript.Voices');JSawScript.VoicesCreateData.registerClass('JSawScript.VoicesCreateData');JSawScript.JSawScript$0.registerClass('JSawScript.JSawScript$0');JSawScript.Instrument.registerClass('JSawScript.Instrument');JSawScript.InstrumentOptions.registerClass('JSawScript.InstrumentOptions');JSawScript.Main.registerClass('JSawScript.Main');JSawScript.App.registerClass('JSawScript.App');JSawScript.JSaw.count=null;})();// This script was generated using Script# v0.7.4.0
