/**
 * @descriptor 使用 audio
 * @author obf1313
 */
import useAudio from '../hooks/useAudio'

const Demo = () => {
  const [audio, state, controls, ref] = useAudio({
    src: 'https://win-web-ra01-sycdn.kuwo.cn/aaf0e0d04f9846db2067ff6a21ed6bf1/63eafea5/resource/n3/128/76/62/2651696877.mp3',
    autoPlay: true,
  })
  return (
    <>
      {audio}
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
    </>
  )
}
export default Demo
