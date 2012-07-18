// Class1.cs
//

using System;
using System.Html;
using System.Runtime.CompilerServices;

namespace BrowserLibraries
{
    [ScriptName("console")]
    [IgnoreNamespace]
    public class Console
    {
        [ScriptName("log")]
        public void Log(object val)
        {
        }

        [ScriptName("log")]
        public void Log()
        {
        }

        [ScriptName("group")]
        public static void Group(string s)
        {

        }
        [ScriptName("groupEnd")]
        public static void GroupEnd()
        {

        }
        [ScriptName("info")]
        public static void Info(string s)
        {
            
        }
        [ScriptName("error")]
        public static void Error(string data)
        {
        }

        [ScriptName("debug")]
        public static void Debug(object noteData)
        {
        }

        [ScriptName("dir")]
        public static void Dir(object mixer)
        {
        }
    }

}
