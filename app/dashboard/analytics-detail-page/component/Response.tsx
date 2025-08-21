import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function ResponseTimeModal() {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* How patients reach me */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-lg">How patients reach me</h3>
            <div className="flex justify-between">
              <span>Patient Portal</span>
              <span className="font-medium">1.2 hr</span>
            </div>
            <div className="flex justify-between">
              <span>Direct message</span>
              <span className="font-medium">2.8 hr</span>
            </div>
            <div className="flex justify-between">
              <span>Calls</span>
              <span className="font-medium">4.1 hr</span>
            </div>
          </CardContent>
        </Card>

        {/* When I respond fastest */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-lg">When I Respond Fastest</h3>
            <div>
              <p className="text-sm text-gray-500">My best Time</p>
              <p className="font-semibold">8-10 AM</p>
              <p className="text-green-600 text-sm">45 min average response</p>
            </div>
            <div className="pt-2">
              <p className="text-sm text-gray-500">My slowest Time</p>
              <p className="font-semibold">2-4 PM</p>
              <p className="text-red-500 text-sm">4 hr average</p>
            </div>
          </CardContent>
        </Card>

        {/* Type of messages */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <h3 className="font-semibold text-lg">Type of messages</h3>
            <div className="flex justify-between">
              <span>Urgent symptoms</span>
              <Badge variant="destructive">0.8 hr</Badge>
            </div>
            <div className="flex justify-between">
              <span>Test Results</span>
              <span className="font-medium">1.5 hr</span>
            </div>
            <div className="flex justify-between">
              <span>General Questions</span>
              <span className="font-medium">4.1 hr</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Messages */}
      <Card>
        <CardContent className="p-4 space-y-4">
          <h3 className="font-semibold text-lg">Recent Messages</h3>

          {/* Message 1 */}
          <div className="flex gap-3 border-b pb-3">
            <Avatar>
              <AvatarImage src="/avatars/jennifer.jpg" alt="Jennifer James" />
              <AvatarFallback>JJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Jennifer James</span>
                <span className="text-sm text-gray-500">10:27 AM</span>
              </div>
              <p className="text-sm text-gray-700">
                Hi Dr. Smith, Im experiencing chest pain and shortness of breath.
              </p>
              <div className="flex gap-2 mt-1">
                <Badge variant="secondary">Urgent</Badge>
                <Badge variant="secondary">Cardiology</Badge>
                <Badge variant="secondary">Same Day</Badge>
              </div>
            </div>
          </div>

          {/* Message 2 */}
          <div className="flex gap-3 border-b pb-3">
            <Avatar>
              <AvatarImage src="/avatars/anna.jpg" alt="Anna Smith" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Anna Smith</span>
                <span className="text-sm text-gray-500">10:27 AM</span>
              </div>
              <p className="text-sm text-gray-700">
                It started about 2 hours ago and I’m really worried. Can you come to my house today?
              </p>
              <div className="flex gap-2 mt-1">
                <Badge variant="secondary">Same Day</Badge>
                <Badge variant="secondary">Cardiology</Badge>
                <Badge variant="secondary">Urgent</Badge>
              </div>
            </div>
          </div>

          {/* Message 3 */}
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src="/avatars/jennifer.jpg" alt="Jennifer James" />
              <AvatarFallback>JJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Jennifer James</span>
                <span className="text-sm text-gray-500">10:27 AM</span>
              </div>
              <p className="text-sm text-gray-700">I’m on my way</p>
              <div className="flex gap-2 mt-1">
                <Badge variant="secondary">Cardiology</Badge>
                <Badge variant="secondary">Urgent</Badge>
                <Badge variant="secondary">Same Day</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
