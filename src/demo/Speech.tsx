import useSpeech from '../hooks/useSpeech'

const voices = window.speechSynthesis.getVoices()

const Demo = () => {
  // speech 会走 translate
  const state = useSpeech('Hello world!', { rate: 0.8, pitch: 0.5, voice: voices[0] })

  return <pre>{JSON.stringify(state, null, 2)}</pre>
}
export default Demo
