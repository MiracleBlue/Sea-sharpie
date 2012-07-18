using System.Collections.Generic;
using AudioletLibrary;

namespace JSawScript
{
    public class MixerNodeOptions
    {
        public Audiolet audiolet;
        public List<JSawEffect> effects;

        public MixerNodeOptions(List<JSawEffect> effects, Audiolet audiolet)
        {
            this.effects = effects;
            this.audiolet = audiolet;
        }

        public Audiolet Audiolet { get { return audiolet; } set { audiolet = value; } }
        public List<JSawEffect> Effects { get { return effects; } set { effects = value; } }

    }
}