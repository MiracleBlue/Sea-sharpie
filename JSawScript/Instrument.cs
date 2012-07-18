using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using AudioletLibrary;
using BrowserLibraries; 
using KnockoutApi;

namespace JSawScript
{
    
    public class Instrument
    {

        //lowercase for private/internal, uppercase for public
        internal InstrumentOptions options;
        internal Audiolet al;
        public string generatorClass;
        private List<JSawEffect> effects;
        internal MixerNode mixer;
        private SamplerParams samplerParams;
        internal Generator generator;
        public Voices voices;


        public Instrument(InstrumentOptions options)
        {
            this.options = options;
            //no need to extend options, our defaults are in the instrument 

            //options.ObservableName = Knockout.Observable(options.Name);
            Console.Group("Instrument (" + this.options.Type + "): '" + this.options.Name + "'");

            al = this.options.Audoilet;
            generatorClass = this.options.Generator;
            effects = this.options.Effects;

            mixer = new MixerNode(new MixerNodeOptions(effects, al));

            this.mixer.Connect(this.al.Output);
            if (this.options.Type == "sampler")
            {
                this.samplerParams = options.SamplerParams;
                samplerParams.Audiolet = this.al;
                this.generator = construct(this.generatorClass, new List<SamplerParams>(this.samplerParams));
                this.generator.Connect(this.mixer);
            }
            //var self=this; //NO NEED FOR THIS lol

            this.voices = new Voices(this);

            Console.Debug("Mixer object: ");
            Console.Dir(this.mixer);
            Console.GroupEnd();

        }
        public void PlayNote(List<VoicesCreateData>  notes)
        {
            foreach (VoicesCreateData noteOptionse in notes)
            {
                this.voices.Create(new VoicesCreateData[]{noteOptionse});
            }
        }

        private Generator construct(string generatorClass, List<SamplerParams> samplerParamses)
        {
            return null;//idk

        }

    }

    public class InstrumentOptions
    {
        private int id = JSaw.Count.Instrument++;//defaults
        private string name = "New Instrument";//defaults
        private string type = "New Instrument";//defaults
        private string generator = "New Instrument";//defaults
        private bool muted = false;//defaults
        private double volume = 0.8;//defaults 
        private Audiolet audiolet;
        private List<JSawEffect> effects = new List<JSawEffect>();//defaults
        private double pan = 0.5;//defaults



        public int ID { get { return id; } set { id = value; } }

        public string Name { get { return name; } set { name = value; } }

        public string Type { get { return type; } set { type = value; } }

        public string Generator { get { return generator; } set { generator = value; } }

        public bool Muted { get { return muted; } set { muted = value; } }

        public double Volume { get { return volume; } set { volume = value; } }

        public double Pan { get { return pan; } set { pan = value; } }
         
        public List<JSawEffect> Effects { get { return effects; } set { effects = value; } }

        public Audiolet Audoilet
        {
            get { return audiolet; }
            set { audiolet = value; }
        }

        private SamplerParams samplerParams;
        public SamplerParams SamplerParams
        {
            get { return samplerParams; }
            set { samplerParams = value; }
        }
    }

}
