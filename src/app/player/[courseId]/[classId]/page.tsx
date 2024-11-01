import { PlayerHeader } from '@/components/player/player-header'
import { PlayerPlaylist } from '@/components/player/playlist/player-playlist'

interface PlayerProps {
  params: {
    courseId: string
    classId: string
  }
}

export default function PlayerPage({
  params: { courseId, classId },
}: PlayerProps) {
  return (
    <main className="flex flex-col gap-10">
      <PlayerHeader
        title="API Rest, Node e Typescript: #01 - Apresentação do curso"
        subTitle="API Rest, Node e Typescript"
      />

      <div className="flex gap-2">
        <div className="max-w-96">
          <PlayerPlaylist
            courseId={courseId}
            playingClassId={classId}
            classGroups={[
              {
                title: 'Introdução e apresentação do projeto',
                classes: [
                  {
                    title:
                      'API Rest, Node e Typescript: #01 - Apresentação do curso',
                    done: true,
                    classId: '12',
                  },
                  {
                    title:
                      'API Rest, Node e Typescript: #02 - Primeiro componente',
                    classId: '123',
                  },
                ],
              },
              {
                title: 'Primeiro componente',
                classes: [
                  {
                    title:
                      'API Rest, Node e Typescript: #04 - Estilização com Tailwind',
                    classId: '1234',
                  },
                ],
              },
            ]}
          />
        </div>

        <div className="flex-1">Player</div>
      </div>
    </main>
  )
}
