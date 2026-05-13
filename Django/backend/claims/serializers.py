from rest_framework import serializers

from .models import Claim, ClaimDocument,ClaimAttachment


class ClaimDocumentSerializer(
    serializers.ModelSerializer
): 

    class Meta:

        model = ClaimDocument

        fields = '__all__'

class ClaimSerializer(
    serializers.ModelSerializer
):
    
    documents = ClaimDocumentSerializer(
        many=True,
        read_only=True
    )

    policy_number = serializers.CharField(

            source='policy.policy_number',

            read_only=True
        )

    customer_name = serializers.CharField(

            source='policy.customer.first_name',

            read_only=True
        )

    class Meta:

        model = Claim

        fields = '__all__'


class ClaimAttachmentSerializer(
    serializers.ModelSerializer
):

    file_url = serializers.SerializerMethodField()

    class Meta:

        model = ClaimAttachment

        fields = [

            "id",

            "claim",

            "file",

            "file_url",

            "uploaded_at",
        ]

    def get_file_url(
        self,
        obj
    ):

        request = self.context.get(
                "request"
            )

        if obj.file:

            return (
                request.build_absolute_uri(
                    obj.file.url
                )
            )

        return None