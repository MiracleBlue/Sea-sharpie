//! JSawScript.debug.js
//

(function() {

Type.registerNamespace('JSawScript');

////////////////////////////////////////////////////////////////////////////////
// JSawScript._generator

JSawScript._generator = function JSawScript__generator() {
    /// <field name="gain" type="JSawScript._generatorGain">
    /// </field>
    /// <field name="triggerSample" type="JSawScript._generatorTriggerSample">
    /// </field>
}
JSawScript._generator.prototype = {
    gain: null,
    triggerSample: null,
    
    connect: function JSawScript__generator$connect(mixer) {
        /// <param name="mixer" type="JSawScript.MixerNode">
        /// </param>
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript._generatorGain

JSawScript._generatorGain = function JSawScript__generatorGain() {
    /// <field name="_gain" type="Number">
    /// </field>
}
JSawScript._generatorGain.prototype = {
    _gain: 0,
    
    get_gain: function JSawScript__generatorGain$get_gain() {
        /// <value type="Number"></value>
        return this._gain;
    },
    set_gain: function JSawScript__generatorGain$set_gain(value) {
        /// <value type="Number"></value>
        this._gain = value;
        return value;
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript._generatorTriggerSample

JSawScript._generatorTriggerSample = function JSawScript__generatorTriggerSample() {
    /// <field name="_trigger" type="Number" integer="true">
    /// </field>
}
JSawScript._generatorTriggerSample.prototype = {
    _trigger: 0,
    
    get_trigger: function JSawScript__generatorTriggerSample$get_trigger() {
        /// <value type="Number" integer="true"></value>
        return this._trigger;
    },
    set_trigger: function JSawScript__generatorTriggerSample$set_trigger(value) {
        /// <value type="Number" integer="true"></value>
        this._trigger = value;
        return value;
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.JSaw

JSawScript.JSaw = function JSawScript_JSaw() {
    /// <field name="count" type="JSawScript.JSawCount" static="true">
    /// </field>
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.JSawCount

JSawScript.JSawCount = function JSawScript_JSawCount() {
    /// <field name="instrument" type="Number" integer="true">
    /// </field>
}
JSawScript.JSawCount.prototype = {
    instrument: 0
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.JSawEffect

JSawScript.JSawEffect = function JSawScript_JSawEffect() {
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.MixerNode

JSawScript.MixerNode = function JSawScript_MixerNode(options) {
    /// <param name="options" type="JSawScript.MixerNodeOptions">
    /// </param>
}
JSawScript.MixerNode.prototype = {
    
    connect: function JSawScript_MixerNode$connect(output) {
        /// <param name="output" type="AudioletOutput">
        /// </param>
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.MixerNodeOptions

JSawScript.MixerNodeOptions = function JSawScript_MixerNodeOptions(effects, audiolet) {
    /// <param name="effects" type="Array">
    /// </param>
    /// <param name="audiolet" type="Audiolet">
    /// </param>
    /// <field name="audiolet" type="Audiolet">
    /// </field>
    /// <field name="effects" type="Array">
    /// </field>
    this.effects = effects;
    this.audiolet = audiolet;
}
JSawScript.MixerNodeOptions.prototype = {
    audiolet: null,
    effects: null,
    
    get_audiolet: function JSawScript_MixerNodeOptions$get_audiolet() {
        /// <value type="Audiolet"></value>
        return this.audiolet;
    },
    set_audiolet: function JSawScript_MixerNodeOptions$set_audiolet(value) {
        /// <value type="Audiolet"></value>
        this.audiolet = value;
        return value;
    },
    
    get_effects: function JSawScript_MixerNodeOptions$get_effects() {
        /// <value type="Array"></value>
        return this.effects;
    },
    set_effects: function JSawScript_MixerNodeOptions$set_effects(value) {
        /// <value type="Array"></value>
        this.effects = value;
        return value;
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.Note

JSawScript.Note = function JSawScript_Note(noteOptionse) {
    /// <param name="noteOptionse" type="JSawScript.NoteOptions">
    /// </param>
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.NoteOptions

JSawScript.NoteOptions = function JSawScript_NoteOptions() {
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.SamplerParams

JSawScript.SamplerParams = function JSawScript_SamplerParams() {
    /// <field name="_audiolet" type="Audiolet">
    /// </field>
}
JSawScript.SamplerParams.prototype = {
    _audiolet: null,
    
    get_audiolet: function JSawScript_SamplerParams$get_audiolet() {
        /// <value type="Audiolet"></value>
        return this._audiolet;
    },
    set_audiolet: function JSawScript_SamplerParams$set_audiolet(value) {
        /// <value type="Audiolet"></value>
        this._audiolet = value;
        return value;
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript._voiceConstruct

JSawScript._voiceConstruct = function JSawScript__voiceConstruct() {
    /// <field name="velocity" type="JSawScript._voiceVelocity">
    /// </field>
}
JSawScript._voiceConstruct.prototype = {
    velocity: null,
    
    connect: function JSawScript__voiceConstruct$connect(mixer) {
        /// <param name="mixer" type="JSawScript.MixerNode">
        /// </param>
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.Voices

JSawScript.Voices = function JSawScript_Voices(instrument) {
    /// <param name="instrument" type="JSawScript.Instrument">
    /// </param>
    /// <field name="_instrument" type="JSawScript.Instrument">
    /// </field>
    /// <field name="_voices" type="JSawScript.Voices">
    /// </field>
    /// <field name="_list" type="Array">
    /// </field>
    this._list = [];
    this._instrument = instrument;
}
JSawScript.Voices.prototype = {
    _instrument: null,
    _voices: null,
    
    create: function JSawScript_Voices$create(datas) {
        /// <param name="datas" type="Array" elementType="VoicesCreateData">
        /// </param>
        /// <returns type="Boolean"></returns>
        console.group('Voice create');
        console.info('Type: ' + this._instrument._options.get_type());
        if (datas == null || !datas.length) {
            console.error('Cannot create voice: data argument is null or undefined.');
            console.groupEnd();
            return false;
        }
        if (datas.length > 1) {
            var $enum1 = ss.IEnumerator.getEnumerator(datas);
            while ($enum1.moveNext()) {
                var value = $enum1.current;
            }
            console.groupEnd();
            return false;
        }
        var data = datas[0];
        var noteData = data;
        if (this._instrument._options.get_type() === 'synth') {
            noteData.audiolet = this._instrument._al;
            noteData.velocity = noteData.velocity * this._instrument._options.get_volume();
            console.debug(noteData);
            var voiceObj = this._construct(this._instrument.generatorClass, [noteData]);
            voiceObj.velocity.set_gain(noteData.velocity);
            voiceObj.connect(this._instrument._mixer);
            this._list.add(voiceObj);
            console.debug('Voice created');
        }
        else if (this._instrument._options.get_type() === 'sampler') {
            this._instrument._generator.gain.set_gain(noteData.velocity);
            this._instrument._generator.triggerSample.set_trigger(1);
            console.debug('Sample triggered');
        }
        console.groupEnd();
        return true;
    },
    
    _construct: function JSawScript_Voices$_construct(generatorClass, voicesCreateDatas) {
        /// <param name="generatorClass" type="String">
        /// </param>
        /// <param name="voicesCreateDatas" type="Array">
        /// </param>
        /// <returns type="JSawScript._voiceConstruct"></returns>
        return null;
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.VoicesCreateData

JSawScript.VoicesCreateData = function JSawScript_VoicesCreateData() {
    /// <field name="audiolet" type="Audiolet">
    /// </field>
    /// <field name="velocity" type="Number">
    /// </field>
}
JSawScript.VoicesCreateData.prototype = {
    audiolet: null,
    velocity: 0
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript._voiceVelocity

JSawScript._voiceVelocity = function JSawScript__voiceVelocity() {
    /// <field name="_gain" type="Number">
    /// </field>
}
JSawScript._voiceVelocity.prototype = {
    _gain: 0,
    
    get_gain: function JSawScript__voiceVelocity$get_gain() {
        /// <value type="Number"></value>
        return this._gain;
    },
    set_gain: function JSawScript__voiceVelocity$set_gain(value) {
        /// <value type="Number"></value>
        this._gain = value;
        return value;
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.Instrument

JSawScript.Instrument = function JSawScript_Instrument(options) {
    /// <param name="options" type="JSawScript.InstrumentOptions">
    /// </param>
    /// <field name="_options" type="JSawScript.InstrumentOptions">
    /// </field>
    /// <field name="_al" type="Audiolet">
    /// </field>
    /// <field name="generatorClass" type="String">
    /// </field>
    /// <field name="_effects" type="Array">
    /// </field>
    /// <field name="_mixer" type="JSawScript.MixerNode">
    /// </field>
    /// <field name="_samplerParams" type="JSawScript.SamplerParams">
    /// </field>
    /// <field name="_generator" type="JSawScript._generator">
    /// </field>
    /// <field name="voices" type="JSawScript.Voices">
    /// </field>
    this._options = options;
    console.group('Instrument (' + this._options.get_type() + "): '" + this._options.get_name() + "'");
    this._al = this._options.get_audoilet();
    this.generatorClass = this._options.get_generator();
    this._effects = this._options.get_effects();
    this._mixer = new JSawScript.MixerNode(new JSawScript.MixerNodeOptions(this._effects, this._al));
    this._mixer.connect(this._al.output);
    if (this._options.get_type() === 'sampler') {
        this._samplerParams = options.get_samplerParams();
        this._samplerParams.set_audiolet(this._al);
        this._generator = this._construct(this.generatorClass, [this._samplerParams]);
        this._generator.connect(this._mixer);
    }
    this.voices = new JSawScript.Voices(this);
    console.debug('Mixer object: ');
    console.dir(this._mixer);
    console.groupEnd();
}
JSawScript.Instrument.prototype = {
    _options: null,
    _al: null,
    generatorClass: null,
    _effects: null,
    _mixer: null,
    _samplerParams: null,
    _generator: null,
    voices: null,
    
    playNote: function JSawScript_Instrument$playNote(notes) {
        /// <param name="notes" type="Array">
        /// </param>
        var $enum1 = ss.IEnumerator.getEnumerator(notes);
        while ($enum1.moveNext()) {
            var noteOptionse = $enum1.current;
            this.voices.create([ noteOptionse ]);
        }
    },
    
    _construct: function JSawScript_Instrument$_construct(generatorClass, samplerParamses) {
        /// <param name="generatorClass" type="String">
        /// </param>
        /// <param name="samplerParamses" type="Array">
        /// </param>
        /// <returns type="JSawScript._generator"></returns>
        return null;
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.InstrumentOptions

JSawScript.InstrumentOptions = function JSawScript_InstrumentOptions() {
    /// <field name="_id" type="Number" integer="true">
    /// </field>
    /// <field name="_name" type="String">
    /// </field>
    /// <field name="_type" type="String">
    /// </field>
    /// <field name="_generator" type="String">
    /// </field>
    /// <field name="_muted" type="Boolean">
    /// </field>
    /// <field name="_volume" type="Number">
    /// </field>
    /// <field name="_audiolet" type="Audiolet">
    /// </field>
    /// <field name="_effects" type="Array">
    /// </field>
    /// <field name="_pan" type="Number">
    /// </field>
    /// <field name="_samplerParams" type="JSawScript.SamplerParams">
    /// </field>
    this._id = JSawScript.JSaw.count.instrument++;
    this._effects = [];
}
JSawScript.InstrumentOptions.prototype = {
    _name: 'New Instrument',
    _type: 'New Instrument',
    _generator: 'New Instrument',
    _muted: false,
    _volume: 0.8,
    _audiolet: null,
    _pan: 0.5,
    
    get_id: function JSawScript_InstrumentOptions$get_id() {
        /// <value type="Number" integer="true"></value>
        return this._id;
    },
    set_id: function JSawScript_InstrumentOptions$set_id(value) {
        /// <value type="Number" integer="true"></value>
        this._id = value;
        return value;
    },
    
    get_name: function JSawScript_InstrumentOptions$get_name() {
        /// <value type="String"></value>
        return this._name;
    },
    set_name: function JSawScript_InstrumentOptions$set_name(value) {
        /// <value type="String"></value>
        this._name = value;
        return value;
    },
    
    get_type: function JSawScript_InstrumentOptions$get_type() {
        /// <value type="String"></value>
        return this._type;
    },
    set_type: function JSawScript_InstrumentOptions$set_type(value) {
        /// <value type="String"></value>
        this._type = value;
        return value;
    },
    
    get_generator: function JSawScript_InstrumentOptions$get_generator() {
        /// <value type="String"></value>
        return this._generator;
    },
    set_generator: function JSawScript_InstrumentOptions$set_generator(value) {
        /// <value type="String"></value>
        this._generator = value;
        return value;
    },
    
    get_muted: function JSawScript_InstrumentOptions$get_muted() {
        /// <value type="Boolean"></value>
        return this._muted;
    },
    set_muted: function JSawScript_InstrumentOptions$set_muted(value) {
        /// <value type="Boolean"></value>
        this._muted = value;
        return value;
    },
    
    get_volume: function JSawScript_InstrumentOptions$get_volume() {
        /// <value type="Number"></value>
        return this._volume;
    },
    set_volume: function JSawScript_InstrumentOptions$set_volume(value) {
        /// <value type="Number"></value>
        this._volume = value;
        return value;
    },
    
    get_pan: function JSawScript_InstrumentOptions$get_pan() {
        /// <value type="Number"></value>
        return this._pan;
    },
    set_pan: function JSawScript_InstrumentOptions$set_pan(value) {
        /// <value type="Number"></value>
        this._pan = value;
        return value;
    },
    
    get_effects: function JSawScript_InstrumentOptions$get_effects() {
        /// <value type="Array"></value>
        return this._effects;
    },
    set_effects: function JSawScript_InstrumentOptions$set_effects(value) {
        /// <value type="Array"></value>
        this._effects = value;
        return value;
    },
    
    get_audoilet: function JSawScript_InstrumentOptions$get_audoilet() {
        /// <value type="Audiolet"></value>
        return this._audiolet;
    },
    set_audoilet: function JSawScript_InstrumentOptions$set_audoilet(value) {
        /// <value type="Audiolet"></value>
        this._audiolet = value;
        return value;
    },
    
    _samplerParams: null,
    
    get_samplerParams: function JSawScript_InstrumentOptions$get_samplerParams() {
        /// <value type="JSawScript.SamplerParams"></value>
        return this._samplerParams;
    },
    set_samplerParams: function JSawScript_InstrumentOptions$set_samplerParams(value) {
        /// <value type="JSawScript.SamplerParams"></value>
        this._samplerParams = value;
        return value;
    }
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.Main

JSawScript.Main = function JSawScript_Main() {
}


////////////////////////////////////////////////////////////////////////////////
// JSawScript.App

JSawScript.App = function JSawScript_App() {
}


JSawScript._generator.registerClass('JSawScript._generator');
JSawScript._generatorGain.registerClass('JSawScript._generatorGain');
JSawScript._generatorTriggerSample.registerClass('JSawScript._generatorTriggerSample');
JSawScript.JSaw.registerClass('JSawScript.JSaw');
JSawScript.JSawCount.registerClass('JSawScript.JSawCount');
JSawScript.JSawEffect.registerClass('JSawScript.JSawEffect');
JSawScript.MixerNode.registerClass('JSawScript.MixerNode');
JSawScript.MixerNodeOptions.registerClass('JSawScript.MixerNodeOptions');
JSawScript.Note.registerClass('JSawScript.Note');
JSawScript.NoteOptions.registerClass('JSawScript.NoteOptions');
JSawScript.SamplerParams.registerClass('JSawScript.SamplerParams');
JSawScript._voiceConstruct.registerClass('JSawScript._voiceConstruct');
JSawScript.Voices.registerClass('JSawScript.Voices');
JSawScript.VoicesCreateData.registerClass('JSawScript.VoicesCreateData');
JSawScript._voiceVelocity.registerClass('JSawScript._voiceVelocity');
JSawScript.Instrument.registerClass('JSawScript.Instrument');
JSawScript.InstrumentOptions.registerClass('JSawScript.InstrumentOptions');
JSawScript.Main.registerClass('JSawScript.Main');
JSawScript.App.registerClass('JSawScript.App');
JSawScript.JSaw.count = null;
})();

//! This script was generated using Script# v0.7.4.0
