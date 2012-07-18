using System.Collections.Generic;
using BrowserLibraries;

namespace JSawScript
{
    public class Voices//voices in an inner class
    {
        private readonly Instrument instrument;
        private readonly Voices voices;
        private readonly List<VoiceConstruct> list = new List<VoiceConstruct>();

        public Voices(Instrument instrument)
        {
            this.instrument = instrument;
        }

        public bool Create(VoicesCreateData[] datas)
        {
            Console.Group("Voice create");
            Console.Info("Type: " + instrument.options.Type);

            if (datas == null || datas.Length == 0)
            {
                Console.Error("Cannot create voice: data argument is null or undefined.");
                Console.GroupEnd();
                return false;
            }
            if (datas.Length > 1)
            {
                foreach (VoicesCreateData value in datas)
                {
                    //              this.voices.create(value);
                }
                Console.GroupEnd();
                return false;
            }
            VoicesCreateData data = datas[0];

            //var noteData = (data.instance) ? data.hashify() : data;
            VoicesCreateData noteData = data;

            if (instrument.options.Type == "synth")
            {
                noteData.Audiolet = this.instrument.al;
                noteData.Velocity = noteData.Velocity * this.instrument.options.Volume;
                Console.Debug(noteData);
                VoiceConstruct voiceObj = Construct(this.instrument.generatorClass, new List<VoicesCreateData>(noteData));

                voiceObj.Velocity.Gain = noteData.Velocity;

                voiceObj.Connect(instrument.mixer);
                this.list.Add(voiceObj);
                Console.Debug("Voice created");
            }

            else if (this.instrument.options.Type == "sampler")
            {
                this.instrument.generator.Gain.Gain = noteData.Velocity;
                this.instrument.generator.TriggerSample.Trigger = 1;

                Console.Debug("Sample triggered");
            }
            Console.GroupEnd();

            return true;
        }

        private VoiceConstruct Construct(string generatorClass, List<VoicesCreateData> voicesCreateDatas)
        {
            return null;//idk
        }
    }
}